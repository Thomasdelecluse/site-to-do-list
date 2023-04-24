import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthDAO} from "../../dao/AuthDAO";
import {HttpResponse} from "@angular/common/http";
import {AuthService} from "../../service/AuthService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {

  }

  LoginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
  })
  hide = true;
  error: string | undefined;

  ngOnInit(): void {
  }

  onFormSubmit() {
    const loginInfo = {
      username: this.LoginForm.controls['username'].value ?? '',
      password: this.LoginForm.controls['password'].value ?? '',
    }
    this.authService.login(loginInfo).subscribe(
      (response) => {
        this.router.navigate(['/home']);
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
