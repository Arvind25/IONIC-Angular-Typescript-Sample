import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {RegisterPage} from '../register/register';
import {HomePage} from '../home/home';
import {CourseOverviewPage} from '../courseoverview/courseoverview';
import {DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
	username:string;
    password:string;
	constructor(private themeableBrowser: ThemeableBrowser, public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  		console.log('Login Constructor');
  	}  	
  	getToken() {
  		console.log("Login getToken. " + this.username + " ,password: "+this.password);
      this.restProvider.getUserToken(this.username , this.password )
    	.then(data => { 
	    	if (data['token'] !== undefined)  {
	    		console.log("TokenData 11: "+JSON.stringify(data));
          this.getUserDetails(data['token'],this.username);
	    		//this.getCat(data['token']);
	    		//this.navCtrl.push(HomePage,{}, {animate: true, direction: 'forward'});
	    	} else{
	    		console.log("TokenData 22: "+JSON.stringify(data));
	    	}
    	});
  	}    
    getUserDetails(token,user_name){
      this.restProvider.getUserDetails( token,user_name )
      .then(data => { 
        if (data !== undefined)  {
          console.log("getUserDetails 111: "+data[0]['id']);

          this.getUserEnrolledCourses(token,data[0]['id']);
          //console.log("getUserDetails 111: "+JSON.stringify(data));
          //this.navCtrl.push(HomePage,{data:this.creatValidCategoryObject(data)}, {animate: true, direction: 'forward'});
        } else{
          console.log("getUserDetails 22: "+JSON.stringify(data));
        }
      });

    }
    getUserEnrolledCourses(token,userid){
      this.restProvider.getUserEnrolledCourses( token, userid )
      .then(data => { 
        if (data !== undefined)  {
          //console.log("getUserDetails 111: "+data[0]['id']);
          //console.log("getUserEnrolledCourses 111: "+JSON.stringify(data));
          this.navCtrl.push(CourseOverviewPage,{data:data}, {animate: true, direction: 'forward'});
          //this.navCtrl.push(HomePage,{data:this.creatValidCategoryObject(data)}, {animate: true, direction: 'forward'});
        } else{
          console.log("getUserEnrolledCourses 22: "+JSON.stringify(data));
        }
      });
    }

    /*****/
  	getCat(token){
  		this.restProvider.get_course_categories( token )
    	.then(data => { 
	    	if (data !== undefined)  {
	    		//console.log("Category 111: "+JSON.stringify(this.creatValidCategoryObject(data)));
	    		this.navCtrl.push(HomePage,{data:this.creatValidCategoryObject(data)}, {animate: true, direction: 'forward'});
	    	} else{
	    		console.log("Category 22: "+JSON.stringify(data));
	    	}
    	});
  	}
  	creatValidCategoryObject(data){
  		var parentCategory:string[] = new Array();

  		//console.log("creatValidCategoryObject: "+data.length);
  		for (var i=0; i < data.length; i++) 
  		{
  			if( data[i]['parent'] == 0 ) 
  			{
  				
   				console.log("Outside id: "+data[i]["id"]+",Name: "+data[i]["name"]);

  				var childCategory:string[] = new Array();  	

  				for (var j=0; j < data.length; j++) 
  				{
  					if(data[j]['parent'] == 0) 
  					{
  						continue;
  					}
  					else if(data[j]['parent'] == data[i]["id"]) 
  					{
  						console.log("INSIDE: " + data[j]['name']);
  						childCategory.push(data[j]);
  					}
  				}
  				console.log("parentCategory: ", parentCategory.length+" ,CLength: "+childCategory.length );
  				console.log(">>>> ", parentCategory[i]); 

  				data[i]["descriptionformat"]= childCategory;
  				parentCategory.push(data[i]);
  				
  				//console.log(data[i]['parent'] +" ,IF Name: "+data[i]['name']);
  			}else
  			{
  				//console.log(data[i]['parent'] +" ,ELSE Name: "+data[i]['name']);
  				continue;
  			}  			
  		}
  		return parentCategory;
  	}
  	 openPage(page) {
      console.log('courses -> ', page);
      this.navCtrl.push(RegisterPage,{}, {animate: true, direction: 'forward'});
  }
}
