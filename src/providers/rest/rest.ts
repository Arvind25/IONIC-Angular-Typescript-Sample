import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestProvider {
	user = { 
			name: '', 
			username: '', 
			email: '', 
			phone: '', 
			website: ''
		};
	apiUrl = 'http://dev.web-hike.com/moodle30/';
  	constructor(public http: HttpClient) {
    	console.log('Hello RestProvider Provider: '+ this.apiUrl);
  	}
  	/** Get Token to acces courses **/
  	getUserToken(user_name, password) {
  		
  		return new Promise(resolve => {
  			var qr_str = this.apiUrl+"login/token.php?username="+user_name+"&password="+password+"&service=tec_service";
  			this.http.get(qr_str).subscribe(data => {
		  		resolve(data);
			}, err => {
				resolve(err);
			});
  		});
  	}
  	/** Get course categories **/
  	get_course_categories (token){
  		var str = "webservice/rest/server.php?moodlewsrestformat=json&wsfunction=core_course_get_categories&wstoken="+token;
  		return new Promise(resolve => {
  			this.http.get(this.apiUrl+str).subscribe(data => {
		  		resolve(data);
  			},err =>{
		  		resolve(err);
  			});
  		});
  	}
  	/* User Information */
  	getUserDetails(token, user_name) {
  		var str = "webservice/rest/server.php?moodlewsrestformat=json&wsfunction=core_user_get_users_by_field&wstoken="+token+"&moodlewsrestformat=json&field=username&values[0]="+user_name;
		return new Promise(resolve => {
			this.http.get(this.apiUrl+str).subscribe(data => {
				resolve(data);
			}, err => {
				console.log("Result getUserDetails err: "+ err);
			});
		});
	}
	/* List of Enrolled courses*/
	getUserEnrolledCourses(token, userid) {
  		var str = "webservice/rest/server.php?moodlewsrestformat=json&wsfunction=core_enrol_get_users_courses&wstoken="+token+"&moodlewsrestformat=json&userid="+userid;
		return new Promise(resolve => {
			this.http.get(this.apiUrl+str).subscribe(data => {
		  		resolve(data);
			}, err => {
				console.log("Result getUserEnrolledCourses err: "+ err);
			});
		});
	}
	/**** Register user*/
	addUser(tkn,qr_string) {
		return new Promise((resolve, reject) => {
			var str = "webservice/rest/server.php?moodlewsrestformat=json&wsfunction=auth_email_signup_user&wstoken="+tkn
			this.http.post(this.apiUrl+str+"&"+qr_string,JSON.stringify(this.user))
		  	.subscribe(res => {
		    		resolve(res);
		  	}, (err) => {
		    	reject(err);
		  	});
		});
	}
}
