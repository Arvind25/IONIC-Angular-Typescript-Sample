import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
@Component({
    selector: 'page-courses',
    templateUrl: 'miscellaneous.html'
})
export class MiscPage {

  	constructor(public navCtrl: NavController) {

  	}	
  	openPage(page) {
	    this.navCtrl.push(RegisterPage,{}, {animate: true, direction: 'forward'});
	}
}
