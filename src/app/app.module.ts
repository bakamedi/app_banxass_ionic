import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { SearchPage } from '../pages/search/search';

// Providers
import { UserProvider } from '../providers/user/user';
import { GlobalProvider } from '../providers/global/global';
import { SessionListPage } from '../pages/session-list/session-list';
import { SessionProvider } from '../providers/session/session';
import { WeighingProvider } from '../providers/weighing/weighing';
import { PdfStorageProvider } from '../providers/pdf-storage/pdf-storage';

// Externs Library
import { MomentModule } from 'angular2-moment';
import { File} from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { IonAffixModule} from 'ion-affix'
import { HideFabOnscrollModule } from 'ionic-hide-fab-onscroll';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SearchPage,
    SessionListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
    IonAffixModule,
    HideFabOnscrollModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SearchPage,
    SessionListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProvider,
    GlobalProvider,
    SessionProvider,
    WeighingProvider,
    File,
    FileOpener,
    ConnectivityProvider,
    PdfStorageProvider
  ]
})
export class AppModule {}
