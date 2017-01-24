"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var item_service_1 = require("../../services/item.service");
var item_1 = require("../../model/item");
var constant_1 = require("../../utils/constant");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(route, itemService) {
        this.route = route;
        this.itemService = itemService;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var action = params['action'];
            var id = params['id'];
            if (action !== undefined) {
                if (action == constant_1.Constant.ACTION_ADD) {
                    _this.navigated = false;
                    _this.item = new item_1.Item();
                }
                else if (action == constant_1.Constant.ACTION_EDIT && id !== undefined) {
                    _this.navigated = true;
                    _this.itemService.getItem(id)
                        .then(function (item) { return _this.item = item; });
                }
            }
        });
    };
    ItemDetailComponent.prototype.save = function () {
        var _this = this;
        console.log("Save Item Detail");
        this.itemService
            .save(this.item)
            .then(function (item) {
            _this.item = item; // saved hero, w/ id if new
            //this.goBack(item);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    ItemDetailComponent.prototype.goBack = function (savedItem) {
        if (savedItem === void 0) { savedItem = null; }
        this.close.emit(savedItem);
        if (this.navigated) {
            window.history.back();
        }
    };
    return ItemDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", item_1.Item)
], ItemDetailComponent.prototype, "item", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ItemDetailComponent.prototype, "close", void 0);
ItemDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'item-detail',
        templateUrl: 'item-detail.template.html',
        styleUrls: ['item-detail.style.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        item_service_1.ItemService])
], ItemDetailComponent);
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item-detail.component.js.map