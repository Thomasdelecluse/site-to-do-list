import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import SuccessfulLoginDTO from "../dto/successful-login.dto";


@Injectable({
  providedIn: 'root'
})
export class AuthDAO {

  constructor(private httpClient: HttpClient) {
  }

  login(loginInfo: { username: string, password: string }) {
    const url = `http://localhost:8088/login`;
    return this.httpClient.post<SuccessfulLoginDTO>(url, loginInfo)
  }
}
