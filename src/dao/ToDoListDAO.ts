import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ToDoDTO} from "../dto/ToDoDTO";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ToDoListDAO {

  constructor(private httpClient: HttpClient) {
  }

  createToDo(todo: { title: string, type: string, description: string }) {
    return this.httpClient.post('http://localhost:8088/todos', todo)
  }

  getAllToDo() : Observable<ToDoDTO[]> {
    return this.httpClient.get<ToDoDTO[]>('http://localhost:8088/todos')
  }

  putUpdateStatus(id: number, todo: Omit<ToDoDTO, "id">) {
    return this.httpClient.put('http://localhost:8088/todos/' + id, todo)
  }

  deleteTodo(id: number) {
    return this.httpClient.delete('http://localhost:8088/todos/' + id)
  }
}
