import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css',
})
export class TodoItemsComponent {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() checkTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}
  //
  onClick(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
  //
  onCheckBoxClick(todo: Todo) {
    this.checkTodo.emit(todo);
  }
}
