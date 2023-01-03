import { Component } from '@angular/core';
import { AuthProvider, Theme } from 'ngx-auth-firebaseui';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'autonomy-participating-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fe-provider';
  themes = Theme;
  providers: AuthProvider[] =[AuthProvider.Google, AuthProvider.Github];
  constructor(private auth: AngularFireAuth){}
  loginRequest(){
  }
  registerSuccess(event:{}){
  }
  
}
