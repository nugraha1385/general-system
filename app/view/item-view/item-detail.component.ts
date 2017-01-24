import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
    }

    ngOnInit(): void {
        console.log("On Init");
        this.route.params.forEach((params: Params) => {
          if (params['id'] !== undefined) {
            let id = params['id'];
            this.navigated = true;
            this.itemService.getItem(id)
              .then(item => this.item = item);
          } else {
            this.navigated = false;
            this.item = new Item();
          }
        });
    }

    save(): void {
        console.log("Save Item Detail");
        this.itemService
          .save(this.item)
          .then(item => {
            this.item = item; // saved hero, w/ id if new
            //this.goBack(item);
          })
          .catch(error => this.error = error); // TODO: Display error message
    }

    goBack(savedItem: Item = null): void {
        this.close.emit(savedItem);
        if (this.navigated) { window.history.back(); }
    }
}

