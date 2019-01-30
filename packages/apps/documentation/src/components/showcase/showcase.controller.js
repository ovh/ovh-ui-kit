import fromPairs from "lodash/fromPairs";
import get from "lodash/get";
import groupBy from "lodash/groupBy";
import join from "lodash/join";
import map from "lodash/map";
import orderBy from "lodash/orderBy";
import sortBy from "lodash/sortBy";
import split from "lodash/split";
import take from "lodash/take";

export default class ShowcaseController {
    constructor ($state, $transitions, $window, ShowcaseService) {
        "ngInject";

        this.$state = $state;
        this.$transitions = $transitions;
        this.$window = $window;
        this.ShowcaseService = ShowcaseService;

        this.currentItemExpanded = 0;
        this.mainLinks = [];
        this.rootState = "showcase";
    }

    $onInit () {
        this.rootChildren = this.getOrderedChildrenState(this.rootState);
        this.secondLevelsChildren = this.getSecondLevelsChildren();
        this.currentSecondLevelStateName = this.getCurrentSecondLevelStateName();

        this.mainLinks.push(...this.rootChildren.map(rootChild => ({
            name: rootChild.state,
            title: rootChild.name,
            isPrimary: true,
            state: rootChild.state
        })));

        this.mainLinks.forEach(link => {
            const state = link.name;
            const subLinks = [];

            if (!state || !this.secondLevelsChildren[state]) {
                return;
            }

            if (this.secondLevelsChildren[state].children.undefined) {
                subLinks.push(...this.getLinks(state, "undefined"));
            }

            (this.secondLevelsChildren[state].groupsOrder || []).forEach(groupName => {
                if (groupName === "undefined") {
                    return;
                }

                subLinks.push({
                    name: `${state}_${groupName}`,
                    title: this.secondLevelsChildren[state].groups[groupName].name,
                    subLinks: this.getLinks(state, groupName)
                });
            });

            link.subLinks = subLinks;
        });

        this.$transitions.onStart({}, trans => {
            this.$window.scrollTo(0, 0);
            this.currentSecondLevelStateName = ShowcaseController.getSecondLevelStateName(trans.$to().name);
        });
    }

    getLinks (state, groupName) {
        return this.secondLevelsChildren[state].children[groupName].map(link => ({
            name: link.state,
            title: link.name,
            state: link.state
        }));
    }

    getOrderedChildrenState (stateName) {
        let childrenState = sortBy(this.ShowcaseService.getChildren(stateName), (childState) => -1 * get(childState, "weight", 0));
        childrenState = map(childrenState, (childState) => ({
            state: childState.name,
            name: get(childState, "friendlyName", `<unnamed state: ${childState.name}>`),
            groups: get(childState, "groups"),
            group: get(childState, "group")
        }));
        return childrenState;
    }

    getOrderedAndGroupedChildrenState (stateName) {
        return groupBy(this.getOrderedChildrenState(stateName), "group");
    }

    static getGroupsOrder (orderedAndGroupedChildrenState, groupsDetails) {
        const keys = Object.keys(orderedAndGroupedChildrenState);

        // The -9999 weigth is arbitrary, it is only to keep the
        // ungrouped element at the beginning of the list so the
        // user can use negative and positive values.
        return orderBy(keys, groupName => groupName === "undefined" ? -Infinity : -1 * get(groupsDetails, [groupName, "weight"], 0));
    }

    getSecondLevelsChildren () {
        let secondLevelsChildren = map(this.rootChildren, (rootChild) => {
            const orderedAndGroupedChildrenState = this.getOrderedAndGroupedChildrenState(rootChild.state);
            const groupsDetails = get(rootChild, "groups");

            return [rootChild.state, {
                name: this.getSecondLevelGroupName(rootChild.state),
                children: orderedAndGroupedChildrenState,
                groupsOrder: ShowcaseController.getGroupsOrder(orderedAndGroupedChildrenState, groupsDetails),
                groups: groupsDetails
            }];
        });
        secondLevelsChildren = fromPairs(secondLevelsChildren);
        return secondLevelsChildren;
    }

    static getSecondLevelStateName (stateName) {
        const index = 2;
        let secondLevelStateName = split(stateName, ".");
        secondLevelStateName = take(secondLevelStateName, index);
        secondLevelStateName = join(secondLevelStateName, ".");
        return secondLevelStateName;
    }

    getCurrentSecondLevelStateName () {
        return ShowcaseController.getSecondLevelStateName(this.$state.current.name);
    }

    getSecondLevelGroupName (stateName) {
        return get(this.$state.get(stateName), "groupName", `<groupName property missing on state ${stateName}>`);
    }

    updateSecondLevelInformation (state) {
        this.secondLevelRootState = ShowcaseController.getSecondLevelStateName(state.name);
        this.secondLevelRootStateNoChildrenMessage = `No children found under state ${this.secondLevelRootState}`;
        this.secondLevelGroupName = this.getSecondLevelGroupName(this.secondLevelRootState);
    }
}
