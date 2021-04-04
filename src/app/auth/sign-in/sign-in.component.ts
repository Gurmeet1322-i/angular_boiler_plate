import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth-service';
import { AUTH_APIS, AUTH_PATH, MAIN_PATHS, REGEX } from '../../constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  password: boolean = true;
  links = {
    FORGOT_PASSWORD:`/${AUTH_PATH.FORGOT_PASSWORD}`,
    SIGN_UP:`/${AUTH_PATH.SIGN_UP}`
  }
  
  signInForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
  }

 async submit() {
    if (this.signInForm.valid) {
      (await this.authService.login(AUTH_APIS.LOGIN,this.signInForm.value)).subscribe(res=>{
        console.log(res);
        localStorage.setItem('res',JSON.stringify(res));
        this.signInForm.reset();
        this.router.navigate([MAIN_PATHS.MAIN])
      })
      
    } else {
      Object.keys(this.signInForm.controls).forEach((item) => {
        this.signInForm.controls[item].markAsTouched({ onlySelf: true });
      });
    }
  }

  showPassword() {
    this.password = !this.password;
  }
}
