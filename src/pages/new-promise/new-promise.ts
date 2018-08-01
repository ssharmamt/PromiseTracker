import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-new-promise',
  templateUrl: 'new-promise.html'
})
export class NewPromisePage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  promise = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    
  }

  addPromise(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
