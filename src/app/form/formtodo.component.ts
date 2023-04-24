import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToDoListDAO} from "../../dao/ToDoListDAO";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './formtodo.component.html',
  styleUrls: ['./formtodo.component.css']
})
export class FormtodoComponent implements OnInit {


  constructor(public todoListController: ToDoListDAO, private router: Router) {
  }

  todoListForm = new FormGroup({
    title: new FormControl('', Validators.required),
    type: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
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
