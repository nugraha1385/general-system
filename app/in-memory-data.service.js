"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco', description: "Fly Power!" },
            { id: 13, name: 'Bombasto', description: "Bomba!" },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        var items = [
            { id: 'IT-001', name: 'Kasa Roll Besar ', description: 'Kassa Roll Besar 10cm' },
            { id: 'IT-002', name: 'Kasa Roll Sedang ', description: 'Kassa Roll Sedang 8cm' },
            { id: 'IT-003', name: 'Kasa Roll Kecil ', description: 'Kassa Roll Kecil 5cm' },
            { id: 'IT-004', name: 'Gunting Besar ', description: 'Gunting Besar' },
            { id: 'IT-005', name: 'Gunting Sedang ', description: 'Gunting Sedang' },
            { id: 'IT-006', name: 'Gunting Kecil ', description: 'Gunting Kecil' }
        ];
        return {
            heroes: heroes,
            items: items
        };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map