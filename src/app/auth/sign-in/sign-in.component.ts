import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AUTH_PATH, REGEX } from '../../constants';

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
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(REGEX.EMAIL)])],
      password: ['', Validators.compose([Validators.required])]
    })
  }

 async submit() {
    if (this.signInForm.valid) {

    } else {
      Object.keys(this.signInForm.controls).forEach((item) => {
        this.signInForm.controls[item].markAsTouched({ onlySelf: true });
      });
    }
    console.log(this.signInForm.value);
  }

  showPassword() {
    this.password = !this.password;
  }
}
