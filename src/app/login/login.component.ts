import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/AuthService";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router , private snackbar: MatSnackBar) { }


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
        this.snackbar.open('Connexion réussie', 'Fermer', {
          duration: 2000,
          verticalPosition: 'bottom',
        });
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
