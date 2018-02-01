import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PERSONAJES } from "../../assets/data/personajes.data";
import { PersonajePage } from "../personaje/personaje";
/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  personajes:any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personajes = PERSONAJES.slice();
  }

  verPersonaje(personaje:any){
    console.log(personaje);
    this.navCtrl.push(PersonajePage,{ 'personaje':personaje});
  }



}
