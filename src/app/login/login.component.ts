import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginDAO} from "../../dao/LoginDAO";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginController: LoginDAO, private router: Router) {

  }

  LoginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
  })

  ngOnInit(): void {
  }

  onFormSubmit() {
    const loginInfo = {
      login: this.LoginForm.controls['login'].value ?? '',
      password: this.LoginForm.controls['password'].value ?? '',
    }
    console.log(loginInfo)

    this.loginController.connection(loginInfo)

  }

}
