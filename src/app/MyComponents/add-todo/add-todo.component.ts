import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  title!: string;
  desc!: string;

  onSubmit() {
    const sno: number = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const todo = {
      sn: sno,
      title: this.title,
      description: this.desc, // corrected 'desc' to 'description'
      isActive: true,
    };
    this.addTodo.emit(todo);
  }
}
