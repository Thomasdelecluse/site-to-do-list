import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginDAO {

  constructor(private httpClient: HttpClient) {
  }

  connection(loginInfo: { login: string, password: string }) {
    const url = `http://localhost:8088/login?username=${loginInfo.login}&password=${loginInfo.password}`;

    return this.httpClient.post(url, {}, { observe: 'response' }) // observe : 'response' pour récupérer la réponse entière
      .subscribe((response: HttpResponse<any>) => {
        // Récupérer les en-têtes de la réponse
        const headers: HttpHeaders = response.headers;
        console.log(headers);
      });
  }
}
