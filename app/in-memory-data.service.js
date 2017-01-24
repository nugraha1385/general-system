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
            { id: 'IT-001', name: 'Kasa Roll Besar ', description: 'Kassa Roll Besar 10cm', unit: 'Roll', rate: 500 },
            { id: 'IT-002', name: 'Kasa Roll Sedang ', description: 'Kassa Roll Sedang 8cm', unit: 'Roll', rate: 400 },
            { id: 'IT-003', name: 'Kasa Roll Kecil ', description: 'Kassa Roll Kecil 5cm', unit: 'Roll', rate: 300 },
            { id: 'IT-004', name: 'Gunting Besar ', description: 'Gunting Besar', unit: 'Buah', rate: 5000 },
            { id: 'IT-005', name: 'Gunting Sedang ', description: 'Gunting Sedang', unit: 'Buah', rate: 4000 },
            { id: 'IT-006', name: 'Gunting Kecil ', description: 'Gunting Kecil', unit: 'Buah', rate: 3000 }
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