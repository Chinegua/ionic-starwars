import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-personaje',
  templateUrl: 'personaje.html',
})
export class PersonajePage {

  personaje:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personaje = this.navParams.get("personaje")
    console.log("Datos:")
    console.log(this.personaje);
  }

  volverAtras(){
    console.log("VOlviendo al root");
    this.navCtrl.pop();
  }

}
