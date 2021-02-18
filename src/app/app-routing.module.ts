import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SignInComponent } from './auth/sign-in/sign-in.component'
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AUTH_PATH, MAIN_PATHS } from './constants';

const routes: Routes = [
  { path: '', redirectTo: AUTH_PATH.SIGN_IN, pathMatch: 'full' },
  { path: AUTH_PATH.SIGN_IN, component: SignInComponent },
  { path: AUTH_PATH.SIGN_UP, component: SignUpComponent },
  { path: AUTH_PATH.FORGOT_PASSWORD, component: ForgotPasswordComponent },
  { path: MAIN_PATHS.MAIN, loadChildren: () => import('./main/main.module').then((m) => m.MainModule) },
  { path: '**', pathMatch: 'full', redirectTo: AUTH_PATH.SIGN_IN }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
