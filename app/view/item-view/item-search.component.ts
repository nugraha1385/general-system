import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { ItemService } from '../../services/item.service';
import { Item } from "../../model/item";
import { Constant } from "../../utils/constant";


@Component({
  moduleId: module.id,
  selector: 'item-search',
  templateUrl: 'item-search.template.html',
  styleUrls: ['item-search.style.css']
})

export class ItemSearchComponent implements OnInit {
  items: Observable<Item[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute) {
  }

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.items = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.itemService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Item[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return Observable.of<Item[]>([]);
      });
  }
}

