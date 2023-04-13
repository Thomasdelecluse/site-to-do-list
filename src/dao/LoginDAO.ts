import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginDAO {

  constructor(private httpClient: HttpClient) {
  }

  connection(loginInfo: { login: string, password: string}) {
    return this.httpClient.post('http://localhost:8088/login', loginInfo)
  }

}
