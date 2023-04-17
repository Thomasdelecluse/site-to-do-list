import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public getTokenForHeaders() {
      const token = localStorage.getItem('token');
      return { Authorization: `Bearer ${token}` };
  }

}
