import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/AuthService";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private snackbar: MatSnackBar) { }
  hide = true;
  error: string | undefined;
  ngOnInit(): void {
  }
  RegisterForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
  })

  onFormSubmit() {
    const RegisterInfo = {
      login: this.RegisterForm.controls['login'].value ?? '',
      password: this.RegisterForm.controls['password'].value ?? '',
    }
    console.log(RegisterInfo);
    this.authService.register(RegisterInfo).subscribe(
      (response) => {
        if(response.status === 201){
          this.snackbar.open('Vous avez crée un compte :)', 'Fermer', {
            duration: 3000,
            verticalPosition: 'bottom',
          });
          // Faire quelque chose si la requête renvoie une réponse 201
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        if(error.status === 409){
          // Faire quelque chose si la requête renvoie une réponse 201
           this.error = "Login déjà utilisé";
        }
      }
    );
   }
}
