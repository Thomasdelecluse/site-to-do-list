import { Component, OnInit } from '@angular/core';
import {ToDoListFormService} from "../../service/ToDoListFormService";
import {ToDoDTO} from "../../dto/toDoDTO";
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";


const ELEMENT_DATA: ToDoDTO[] = [];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'description', 'type', 'status', 'delete'];
  dataSource: MatTableDataSource<ToDoDTO> = new MatTableDataSource<ToDoDTO>();

  constructor(private todolistformService: ToDoListFormService) { }

  ngOnInit(): void {
    this.updateTable();

  }

  updateStatus(todo: ToDoDTO) {
    this.todolistformService.updateStatus(todo.id, {
      title: todo.title,
      description: todo.description,
      type: todo.type,
      status: !todo.status,
    }).subscribe(
      () => {
        this.updateTable();
      }
    );
  }

  deleteTodo(id : number) {
    this.todolistformService.deleteTodo(id).subscribe(
      () => {
        this.updateTable();
      }
    );
  }

  updateTable() {
    this.todolistformService.updateTableWithDatas().subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
    })
  }
}
