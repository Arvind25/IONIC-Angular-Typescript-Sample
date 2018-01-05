import { Component } from '@angular/core';
import { NavController , NavParams,AlertController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {LoginPage} from '../login/login';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {
	information:any[];
	
	username:string;
	firstname:string;
	lastname:string;
	password:string;
	c_password:string;
	email:string;
	phone:string;
	course:string;
  	constructor(public navCtrl: NavController, public navParams: NavParams, public alertController: AlertController, public restProvider: RestProvider) {
  		this.getCat("6b507289dd68d47763298b5a485f9ded");
  	}

  	getCat(tkn){
  		this.restProvider.get_course_categories( tkn )
    	.then(data => { 
	    	if (data !== undefined)  {
          this.information = this.creatValidCategoryObject(data);
	    	}
    	});
  	}
  	creatValidCategoryObject(data){
  		var parentCategory:string[] = new Array();
  		for (var i=0; i < data.length; i++) 
  		{
  			if( data[i]['parent'] == 0 ) 
  			{
 				   parentCategory.push(data[i]);
  			}else{
  				continue;
  			}  			
  		}
  		return parentCategory;
  	}
  	addUser(){
  		if(this.firstname ==undefined || this.lastname == undefined || this.username == undefined ||  this.password == undefined || this.c_password ==undefined || this.email ==undefined || this.phone ==undefined || this.course ==undefined){
  			this.alertPrompt();
  			return;
  		}
  		if( this.firstname =="" || this.lastname == "" || this.username =="" ||  this.password =="" || this.c_password =="" || this.email =="" || this.phone =="" || this.course == ""){
  			this.alertPrompt();
  			return;
  		}
  		var str = "firstname="+this.firstname+"&lastname="+this.lastname+"&username="+this.username+"&password="+this.password+"&email="+this.email+"&course_id="+this.course+"&customprofilefields[0][type]=alphanumtext&customprofilefields[0][name]=profile_field_MobileNo&customprofilefields[0][value]="+this.phone;
  		this.restProvider.addUser("6b507289dd68d47763298b5a485f9ded", str )
    	.then(data => { 
	    	if( data != undefined && data['success'] != undefined ){
	    		if(data['success'] == true){
	    			this.navCtrl.push(LoginPage,{}, {animate: true, direction: 'forward'});
	    		}else{
	    			this.alertPrompt();
	    			return;
	    		}
	    	}else{
	    		this.alertPrompt();
	    		return;
	    	}
    	});		
  	}

  	alertPrompt(){
  		let e_alert = this.alertController.create({
	        title: 'Error',
	        subTitle: 'Error during registration, please check entered value once.',
	        buttons: ['OK']
	    });

	    e_alert.present();
  	}
}
