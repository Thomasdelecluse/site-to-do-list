import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ToDoDTO} from "../dto/ToDoDTO";
import {Observable} from "rxjs";
import {TokenService} from "../service/TokenService";


@Injectable({
  providedIn: 'root'
})
export class ToDoListDAO {

  tokenService: TokenService;

  constructor(private httpClient: HttpClient, private TokenService: TokenService) {
    this.tokenService = TokenService;
  }

// provisoire argument name
  createToDo(todo: {name: string, title: string, type: string, description: string }) {
    const headers = this.tokenService.getTokenForHeaders();
    return this.httpClient.post('http://localhost:8088/todos', todo, {headers})
  }

  getAllToDo() : Observable<ToDoDTO[]> {
    const headers = this.tokenService.getTokenForHeaders();
    return this.httpClient.get<ToDoDTO[]>('http://localhost:8088/todos', {headers})
  }

  putUpdateStatus(id: number, todo: Omit<ToDoDTO, "id">) {
    const headers = this.tokenService.getTokenForHeaders();
    return this.httpClient.put('http://localhost:8088/todos/' + id, todo, {headers})
  }

  deleteTodo(id: number) {
    const headers = this.tokenService.getTokenForHeaders();
    return this.httpClient.delete('http://localhost:8088/todos/' + id, {headers})
  }
}
