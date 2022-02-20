import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() { 
    this.todos = [
      {
        sno: 1,
        title: "First todo",
        desc: "First todo description",
        active: true
      },
      {
        sno: 2,
        title: "Second todo",
        desc: "Second todo description",
        active: true
      },
      {
        sno: 3,
        title: "Third todo",
        desc: "Third todo description",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

}
