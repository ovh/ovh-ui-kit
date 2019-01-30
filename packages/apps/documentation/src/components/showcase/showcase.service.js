import includes from "lodash/includes";

export default class {
    constructor ($state) {
        "ngInject";

        this.$state = $state;
    }

    getChildren (stateName, firstLevelOnly = true) {
        const prefixToFind = `${stateName}.`;

        return this.$state.get().filter((state) => {
            if (includes(state.name, prefixToFind)) {
                if (firstLevelOnly) {
                    const stateNameWithoutPrefix = state.name.replace(prefixToFind, "");

                    // Exclude all subs states, only take the first child level
                    return !includes(stateNameWithoutPrefix, ".");
                }

                return true;
            }

            return false;
        });
    }
}
