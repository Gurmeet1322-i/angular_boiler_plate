import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SignInComponent } from './auth/sign-in/sign-in.component'
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AUTH_PATH } from './constants';

const routes: Routes = [
  { path: '', redirectTo: AUTH_PATH.SIGN_IN, pathMatch: 'full' },
  { path: AUTH_PATH.SIGN_IN, component: SignInComponent },
  { path: AUTH_PATH.SIGN_UP, component: SignUpComponent },
  { path: AUTH_PATH.FORGOT_PASSWORD, component: ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
