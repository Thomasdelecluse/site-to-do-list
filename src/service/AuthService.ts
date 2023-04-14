import {Injectable} from "@angular/core";
import {AuthDAO} from "../dao/AuthDAO";
import {Router} from "@angular/router";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authController: AuthDAO, private router: Router) {  }
  error: string | undefined;

  public login(loginInfo: { username: string, password: string }): Observable<string> {
    return this.authController.login(loginInfo).pipe(
      map((response) => {
        localStorage.setItem('token', response.token);
        return "utilisateur connecté";
      }),
      catchError((error) => {
        console.log(error);
        return throwError("Username or password is incorrect");
      })
    );
  }

}
