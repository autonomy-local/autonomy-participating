import { Component } from '@angular/core';
import { AuthProvider, Theme } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';

@Component({
  selector: 'autonomy-participating-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  providers: AuthProvider[] =[AuthProvider.Google, AuthProvider.Github];
  constructor(private router: Router){}
  signupRequest(){
    this.router.navigate(['/signup']);
  }
}
