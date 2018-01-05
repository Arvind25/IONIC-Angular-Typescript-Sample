import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import {HomePage} from '../pages/home/home';
import {CareerPage} from "../pages/career/career";
import {AboutPage} from '../pages/about/about';
import {LandingPage} from '../pages/landing/landing';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {CoursesPage} from '../pages/courses/courses';
import {CourseOverviewPage} from '../pages/courseoverview/courseoverview';
import {PtePage} from '../pages/courses/pte';
import {IeltsPage} from '../pages/courses/ielts';
import {MiscPage} from '../pages/courses/miscellaneous';
import {GrmPage} from '../pages/courses/grammer';
import {ProfileDetailPage} from '../pages/profile-detail/profile-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    LoginPage,
    RegisterPage,
    CoursesPage,
    CourseOverviewPage,
    PtePage,
    IeltsPage,
    MiscPage,
    GrmPage,
    AboutPage,
    ProfileDetailPage,
    CareerPage
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    LoginPage,
    RegisterPage,
    CoursesPage,
    CourseOverviewPage,
    PtePage,
    IeltsPage,
    MiscPage,
    GrmPage,
    AboutPage,
    ProfileDetailPage,
    CareerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    DocumentViewer,
    ThemeableBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, RestProvider
  ]
})
export class AppModule {}
