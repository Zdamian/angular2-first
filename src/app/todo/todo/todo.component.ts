import { Component, OnInit } from '@angular/core';

import { TodoService } from '../shared/todo.service';

interface Task {
  done: boolean;
  task: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo: string[];

  constructor(private todoService: TodoService) {
    console.log('task component constructor');
    this.todo = this.todoService.getTodo();
  }

  ngOnInit() {
  }

  onTaskAdded(task: string): void {
    this.todo.push(task);
  }
}
