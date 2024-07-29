import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItemsComponent } from '../todo-items/todo-items.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoItemsComponent, AddTodoComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'], // corrected 'styleUrl' to 'styleUrls'
})
export class TodoComponent implements OnInit {
  title = 'todo_app';
  getTodo: string = '';
  todos: Todo[] = [];

  ngOnInit() {
    // Check if localStorage is available and load todos
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this.getTodo = localStorage.getItem('todos') || '';
      if (this.getTodo) {
        this.todos = JSON.parse(this.getTodo);
      }
    }
  }

  todoDelete(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      this.saveTodos();
    }
  }

  todoAdd(todo: Todo) {
    this.todos.push(todo);
    this.saveTodos();
  }

  todoCheck(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].isActive = !this.todos[index].isActive;
    this.saveTodos();
  }

  saveTodos() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }
}
