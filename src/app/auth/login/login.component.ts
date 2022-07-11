import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

export enum LoginFormFieldName {
  username = 'username',
  email = 'email',
  password = 'password'
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  //@ViewChild('loginNgForm') loginNgForm: NgForm;
  loginForm: FormGroup;

  readonly formFieldName = LoginFormFieldName;

  constructor(
    private _formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    // Create the form
    this.loginForm = this._formBuilder.group({
      [this.formFieldName.username]: ['', [Validators.required]],
      [this.formFieldName.email]: ['', [Validators.required, Validators.email]],
      [this.formFieldName.password]: ['', [Validators.required]] // Add validate password later if you want
    })
  }

  login(): void {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }
}
