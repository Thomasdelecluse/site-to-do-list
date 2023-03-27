import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ToDoListFormService} from "../../service/ToDoListFormService";
import {HttpClient} from "@angular/common/http";
import {ToDoListDAO} from "../../dao/ToDoListDAO";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {


  constructor(public todoListController: ToDoListDAO, private router: Router) {
  }

  todoListForm = new FormGroup({
    title: new FormControl(''),
    type: new FormControl(''),
    description: new FormControl(''),
  })

  ngOnInit(): void {
  }

  onFormSubmit() {
    const todo = {
      title: this.todoListForm.controls['title'].value ?? '',
      type: this.todoListForm.controls['type'].value ?? '',
      description: this.todoListForm.controls['description'].value ?? ''
    }

    this.todoListController.createToDo(todo).subscribe(() => {
      // Rediriger vers la page d'accueil après avoir créé le todo
      this.router.navigate(['/home']);
    })

  }
}
