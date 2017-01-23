import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemService } from '../../services/item.service';
import { Item } from "../../model/item";



@Component({
    moduleId: module.id,
    selector: 'item-detail',
    templateUrl: 'item-detail.template.html',
    styleUrls: ['item-detail.style.css']
})

export class ItemDetailComponent implements OnInit {
    @Input() item: Item;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

    constructor(
        private route: ActivatedRoute,
        private itemService : ItemService) {

        this.item = itemService.getItem('1');
    }

    ngOnInit(): void {
        console.log("On Init");
    }

    save(): void {
        console.log("Save Item Detail");
    }

    goBack(savedItem: Item = null): void {
        this.close.emit(savedItem);
        if (this.navigated) { window.history.back(); }
    }
}

