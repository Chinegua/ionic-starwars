import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { BarraPage } from '../pages/pages';
import { InicioPage } from '../pages/inicio/inicio';
import { ChatPage } from '../pages/chat/chat';
import { PersonajePage } from '../pages/personaje/personaje';
import { AjustesPage } from '../pages/ajustes/ajustes';

@NgModule({
  declarations: [
    MyApp,
    BarraPage,
    InicioPage,
    ChatPage,
    PersonajePage,
    AjustesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Volver',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BarraPage,
    InicioPage,
    ChatPage,
    PersonajePage,
    AjustesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
