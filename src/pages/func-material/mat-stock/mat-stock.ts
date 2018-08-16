import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mat-stock',
  templateUrl: 'mat-stock.html',
})
export class MatStockPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }


  toMatStockDet():void{
    this.navCtrl.push("MatStockDetPage");
  }
}
