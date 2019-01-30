export default class {
    constructor ($interval) {
        "ngInject";

        this.$interval = $interval;
    }

    $onInit () {
        const progressData = {
            value1: 1,
            value2: 1,
            value3: 1,
            value4: 1
        };
        const updateInterval = 500;
        const THREE = 3;
        const FIVE = 5;
        const TEN = 10;
        const TWENTY = 20;
        const HUNDRED = 100;
        this.progressUpdater = this.$interval(() => {
            progressData.value1 = (progressData.value1 + THREE) % HUNDRED;
            progressData.value2 = (progressData.value2 + FIVE) % HUNDRED;
            progressData.value3 = (progressData.value3 + TEN) % HUNDRED;
            progressData.value4 = (progressData.value4 + TWENTY) % HUNDRED;
        }, updateInterval);
        this.progressData = progressData;
    }

    $onDestroy () {
        this.$interval.cancel(this.progressUpdater);
    }
}
