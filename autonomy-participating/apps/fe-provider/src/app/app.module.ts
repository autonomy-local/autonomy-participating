import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  connectAuthEmulator,
  initializeAuth,
  provideAuth,
  browserPopupRedirectResolver,
  browserSessionPersistence,
} from '@angular/fire/auth';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const isDev = !environment.production;

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent],
  imports: [
    BrowserModule,
    // Firebase App
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // Firebase Auth - in Dev mode with Emulator
    provideAuth(() => {
      const auth = initializeAuth(getApp(), {
        popupRedirectResolver: browserPopupRedirectResolver,
        persistence: browserSessionPersistence,
      });

      if (isDev) connectAuthEmulator(auth, 'http://localhost:9099');

      return auth;
    }),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
