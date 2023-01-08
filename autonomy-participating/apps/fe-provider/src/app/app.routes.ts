import { Route } from '@angular/router';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


export const appRoutes: Route[] = [
  { path: '', redirectTo: '/signup', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'register', component: AccountRegisterComponent},
];
