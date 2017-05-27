import { Component, OnInit } from '@angular/core';

import { TaskService } from '../shared/task.service';

interface Todo {
  title: string;
  complete: boolean;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  newTodoTitle: string;

  todos: Array<Todo> = [{
    title: 'kupić chleb',
    complete: true
  }, {
    title: 'zrobić kanapkę',
    complete: false
  }];

addTodo() {
  if (!this.newTodoTitle) {
    return;
  }

  const newTodo: Todo = {
    title: this.newTodoTitle,
    complete: false
  };
  this.todos.push(newTodo);

  this.newTodoTitle = '';
}
}
