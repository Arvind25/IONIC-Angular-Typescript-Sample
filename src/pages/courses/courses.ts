import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {PtePage} from './pte';
import {IeltsPage} from './ielts';
import {MiscPage} from './miscellaneous';
import {GrmPage} from './grammer';
@Component({
    selector: 'page-courses',
    templateUrl: 'courses.html'
})
export class CoursesPage {

  	constructor(public navCtrl: NavController) {

  	}
  	openPage(page) {
	    if(page === 'misc'){
	    	this.navCtrl.push(MiscPage,{}, {animate: true, direction: 'forward'});
	    }else if(page === 'pte'){
	    	this.navCtrl.push(PtePage,{}, {animate: true, direction: 'forward'});
	    }else if (page === 'ielts'){
	    	this.navCtrl.push(IeltsPage,{}, {animate: true, direction: 'forward'});
	    }else if (page === 'grm'){
	    	this.navCtrl.push(GrmPage,{}, {animate: true, direction: 'forward'});
	    }else if (page === 'register'){
	    	this.navCtrl.push(RegisterPage,{}, {animate: true, direction: 'forward'});
	    }
	}

}
