import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
@Component({
    selector: 'page-courses',
    templateUrl: 'grammer.html'
})
export class GrmPage {

  	constructor(public navCtrl: NavController) {

  	}	
  	openPage(page) {
	       
	    this.navCtrl.push(RegisterPage,{}, {animate: true, direction: 'forward'});
	    
	}
}
