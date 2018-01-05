import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';
import {CoursesPage} from '../courses/courses';
import {HomePage} from '../home/home';
@Component({
    selector: 'page-landing',
    templateUrl: 'landing.html'
})
export class LandingPage {

  	constructor(public navCtrl: NavController, public menu: MenuController,) {
  		this.menu.swipeEnable(false);
  	}
  	openPage(page) {
	    // Reset the content nav to have just this page
	    // we wouldn't want the back button to show in this scenario
	    console.log('page -> ', page);
	    //this.nav.setRoot(page.component);
	    if(page === 'login'){
	    	this.navCtrl.push(LoginPage,{}, {animate: true, direction: 'forward'});
	    }else if(page === 'register'){
	    	this.navCtrl.push(RegisterPage,{}, {animate: true, direction: 'forward'});
	    }else if (page === 'courses'){
	    	this.navCtrl.push(CoursesPage,{}, {animate: true, direction: 'forward'});
	    }else if (page === 'home'){
	    	this.navCtrl.push(RegisterPage,{}, {animate: true, direction: 'forward'});
	    } 
	}
}
