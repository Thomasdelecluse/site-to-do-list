import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
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
