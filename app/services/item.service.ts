import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { Item } from '../model/item';

@Injectable()
export class ItemService {
  private itemsUrl = 'app/items';  // URL to web api

  constructor(private http: Http) { }

  getItems(): Promise<Item[]> {
    return this.http
      .get(this.itemsUrl)
      .toPromise()
      .then(response => response.json().data as Item[])
      .catch(this.handleError);
  }

  getItem(id: string): Promise<Item> {
    return this.getItems()
      .then(items => items.find(item => item.id === id));
  }

  save(item: Item): Promise<Item> {
    if (item.id) {
      return this.put(item);
    }
    return this.post(item);
  }

  delete(item: Item): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.itemsUrl}/${item.id}`;

    return this.http
      .delete(url, { headers: headers })
      .toPromise()
      .catch(this.handleError);
  }

  // Add new Item
  private post(item: Item): Promise<Item> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.itemsUrl, JSON.stringify(item), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Update existing Item
  private put(item: Item): Promise<Item> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.itemsUrl}/${item.id}`;

    return this.http
      .put(url, JSON.stringify(item), { headers: headers })
      .toPromise()
      .then(() => item)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
