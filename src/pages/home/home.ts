import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
//import { HttpClient } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {MiscPage} from '../courses/miscellaneous';
import {GrmPage} from '../courses/grammer';
import 'rxjs/add/operator/map'
 
@Component({
  selector: 'page-home-new',
  templateUrl: 'home.html'
})
export class HomePage {
  information:any[];
 
    constructor(public navCtrl: NavController,public navParams: NavParams, private http: HttpClient) {
      var data_obj = navParams.get("data");    
      this.information = data_obj;    
    }
  
    toggleSection(i) {
        if(this.information[i]["descriptionformat"].length <= 0 ){
            this.openPage(this.information[i]["name"]);
        }else{
            this.information[i].open = !this.information[i].open;
        }
    }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  openPage(page) {
    if(page == "Miscellaneous" ){
        this.navCtrl.push(MiscPage,{}, {animate: true, direction: 'forward'});
    }else if(page == "English-Grammar"){
        this.navCtrl.push(GrmPage,{}, {animate: true, direction: 'forward'});
    }  
  }
}