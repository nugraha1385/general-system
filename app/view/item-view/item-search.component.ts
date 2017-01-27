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
  displayType : string;
  private searchTerms = new Subject<string>();

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.displayType = Constant.DISPLAY_TYPE_TABLE;
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

  gotoEditDetail(item: Item):void{
    let link = ['/itemDetail/edit', item.id];
    this.router.navigate(link);
  }

  gotoAddItem():void{
    let link = ['/itemDetail/add'];
    this.router.navigate(link);
  }

  gotoSearchItem():void{
    let link = ['/itemSearch'];
    this.router.navigate(link);
  }


  isDisplayTypeTable():boolean{
    return !!(this.displayType === Constant.DISPLAY_TYPE_TABLE);
  }
}

