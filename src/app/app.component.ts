import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {LandingPage} from '../pages/landing/landing';
import {AboutPage} from '../pages/about/about';


import {ProfileDetailPage} from '../pages/profile-detail/profile-detail';
export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = LandingPage;

    appMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();        
        this.accountMenuItems = [
            {title: 'My Account', component: ProfileDetailPage, icon: 'ios-contact'},
            {title: 'Logout', component: HomePage, icon: 'log-out'},
        ];

        this.helpMenuItems = [
            {title: 'Home', component: LandingPage, icon: 'home'},
            {title: 'Courses', component: HomePage, icon: 'person'},
            {title: 'About', component: AboutPage, icon: 'information-circle'},
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            console.log('Initialization of App ');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log('page-> ', page.component);
        this.nav.setRoot(page.component);
    }
}
