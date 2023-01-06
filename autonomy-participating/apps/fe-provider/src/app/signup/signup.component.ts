import { Component } from '@angular/core';
import { AuthProvider, Theme } from 'ngx-auth-firebaseui';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'autonomy-participating-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  themes = Theme;
  providers: AuthProvider[] =[AuthProvider.Google, AuthProvider.Github];
  constructor(private auth: AngularFireAuth, private router: Router){}
  loginRequest(){
    this.router.navigate(['/login']);
  }
  registerSuccess(event:{}){
  }
}
