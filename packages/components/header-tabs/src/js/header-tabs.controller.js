const checkScrollDelay = 800;

export default class {
    constructor ($attrs, $element, $interval, $scope, $timeout, $window) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$interval = $interval;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.$window = $window;
    }

    $onInit () {
        this.scroll = {
            begin: 0,
            end: 0
        };
    }

    $onDestroy () {
        angular.element(this._tabsElement).off("scroll");
        angular.element(this.$window).off("resize");
    }

    $postLink () {
        this.$timeout(() => {
            this.$element
                .addClass("oui-header-tabs");

            this._tabsElement = this.$element[0].querySelector(".oui-header-tabs__container");
            angular.element(this._tabsElement).on("scroll", event => this._checkScroll(event));
            angular.element(this.$window).on("resize", event => this._checkScroll(event));
            this._initialCheck();
        });

        /* On initial render, we need to wait few seconds before calling
           the checkScroll method otherwise panel size would be wrong. */
        this.$timeout(() => this._initialCheck(), checkScrollDelay);
    }

    scrollLeft () {
        this._scroll("left");
    }

    scrollRight () {
        this._scroll("right");
    }

    _initialCheck () {
        const activeTab = this.$element[0].querySelector(".oui-header-tabs__item_active");
        if (activeTab && activeTab.offsetLeft - this._tabsElement.offsetLeft > 0) {
            this._tabsElement.scrollLeft = activeTab.offsetLeft - this._tabsElement.offsetLeft;
        } else {
            this.scroll.end = this._tabsElement.scrollWidth - this._tabsElement.offsetWidth;
        }
    }

    _scroll (direction) {
        const itemToGo = this._findItemToGo(direction);
        this._scrollToItem(direction, itemToGo);
    }

    _checkScroll (e) {
        if (e) {
            e.preventDefault();
        }

        this.scroll.begin = this._tabsElement.scrollLeft;
        this.scroll.end = this._tabsElement.scrollWidth - this._tabsElement.offsetWidth - this._tabsElement.scrollLeft;
        this.$scope.$digest();
    }

    _findItemToGo (direction) {
        const tabsList = [].slice.call(this._tabsElement.querySelectorAll(":scope > .oui-header-tabs__item"));
        const tabsOffset = this._tabsElement.offsetLeft;
        const tabsStart = this._tabsElement.scrollLeft;
        const tabsEnd = tabsStart + this._tabsElement.offsetWidth;

        let itemGutter = 0;
        if (tabsList && tabsList.length > 1) {
            itemGutter = tabsList[1].offsetLeft - (tabsList[0].offsetLeft + tabsList[0].offsetWidth);
        }

        let itemToGo = tabsList[0];
        for (const item of tabsList) {
            const itemStart = item.offsetLeft - tabsOffset;
            if (direction === "right" && itemStart <= tabsEnd + tabsOffset + itemGutter) {
                itemToGo = item;
            } else if (direction === "left" && itemStart < tabsStart) {
                itemToGo = item;
            } else {
                break;
            }
        }
        return itemToGo;
    }

    _scrollToItem (direction, item) {
        const duration = 500;
        const stepDuration = 15;
        const step = this._tabsElement.scrollWidth / (duration / stepDuration);

        const itemStart = item.offsetLeft - this._tabsElement.offsetLeft;
        const itemEnd = itemStart + item.offsetWidth;
        const tabsWidth = this._tabsElement.offsetWidth;

        const loop = this.$interval(() => {
            const tabsStart = this._tabsElement.scrollLeft;
            const tabsEnd = this._tabsElement.scrollWidth - this._tabsElement.offsetWidth - this._tabsElement.scrollLeft;
            const screenEnd = tabsStart + this._tabsElement.offsetWidth;

            if (direction === "right" && tabsEnd > 0 && (tabsStart + step < itemStart || itemEnd > screenEnd)) {
                this._tabsElement.scrollLeft += step;
            } else if (direction === "left" && tabsStart > 0 && (screenEnd - step > itemEnd || itemStart < tabsStart - step)) {
                this._tabsElement.scrollLeft -= step;
            } else {
                if (direction === "right") {
                    this._tabsElement.scrollLeft = tabsStart <= itemStart ? itemStart : itemEnd - tabsWidth;
                } else {
                    this._tabsElement.scrollLeft = tabsStart >= itemStart ? itemStart : itemEnd - tabsWidth;
                }
                this.$interval.cancel(loop);
            }
        }, stepDuration);
    }
}
