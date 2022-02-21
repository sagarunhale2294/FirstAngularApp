import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todos/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string
  desc: string
  active: boolean
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      sno: Math.floor((Math.random() * 10) + 1),
      title: this.title,
      desc: this.desc,
      active: this.active ? this.active : false
    }
    console.log("Submitted", todo);
    this.todoAdd.emit(todo);
  }

}
