import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InicioPage, ChatPage, AjustesPage } from "../pages";

/**
 * Generated class for the BarraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-barra',
  templateUrl: 'barra.html',
})
export class BarraPage {

  tab1:any;
  tab2:any;
  tab3:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = InicioPage;
    this.tab2 = ChatPage;
    this.tab3 = AjustesPage;
  }


}
