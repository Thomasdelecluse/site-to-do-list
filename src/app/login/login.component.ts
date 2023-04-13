import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginDAO} from "../../dao/LoginDAO";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(loginController: LoginDAO, private router: Router) {

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

    this.loginController.connection(loginInfo).subscribe(() => {
      // Rediriger vers la page d'accueil après avoir créé le todo
      this.router.navigate(['/home']);
    })

  }

}
