import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  localItem: string;
  constructor() { 
    this.localItem = localStorage.getItem("todos");
    if(this.localItem != null) {
      this.todos = JSON.parse(this.localItem);
    } else {
      this.todos = [];
    }
  }

  ngOnInit(): void {
  }

  deleteTodo (todo: Todo) {
    console.log("Deleting todo...", todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log("Adding todo to List", todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
