import { Component } from '@angular/core';
import { NavController,NavParams,Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {MiscPage} from '../courses/miscellaneous';
import {GrmPage} from '../courses/grammer';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

import 'rxjs/add/operator/map'
 
@Component({
  selector: 'page-courseoverview-new',
  templateUrl: 'courseoverview.html'
})
export class CourseOverviewPage {
  information:any[];
 
  constructor(private document: DocumentViewer, public inAppBrowser: InAppBrowser, public navCtrl: NavController,public navParams: NavParams, private http: HttpClient) {
    var data_obj = navParams.get("data");    
    this.information = data_obj;    
  }

  toggleSection(i) {        
      this.openPDF();
      //commented for testing purpose
      /*if(this.information[i]["descriptionformat"].length <= 0 ){
          this.openPage(this.information[i]["name"]);
      }else{
          this.information[i].open = !this.information[i].open;
      }*/
  }
  openPDF(){
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    this.document.viewDocument('assets/myPDF.pdf', 'application/pdf', options)
  }   
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  openPage(page) {
    console.log('courses -> ', page);
    if(page == "Miscellaneous" ){
        this.navCtrl.push(MiscPage,{}, {animate: true, direction: 'forward'});
    }else if(page == "English-Grammar"){
        this.navCtrl.push(GrmPage,{}, {animate: true, direction: 'forward'});
    }  
  }
}