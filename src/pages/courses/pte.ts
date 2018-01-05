import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
@Component({
    selector: 'page-courses',
    templateUrl: 'pte.html'
})
export class PtePage {

  	constructor(public navCtrl: NavController) {

  	}	
  	openPage(page) {
	    console.log('courses -> ', page);
	    
	    this.navCtrl.push(RegisterPage,{}, {animate: true, direction: 'forward'});
	    
	}
}
