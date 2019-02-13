export default class {
    $onInit () {
        this.pagination1 = {
            offset: 1,
            pageSize: 25,
            totalItems: 100
        };

        this.pagination2 = {
            offset: 1,
            pageSize: 25,
            totalItems: 500
        };

        this.pagination3 = {
            offset: 1,
            pageSize: 25,
            totalItems: 5000000
        };
    }

    onChange (pagination, $event) {
        this[pagination].offset = $event.offset;
        this[pagination].pageSize = $event.pageSize;
    }
}
