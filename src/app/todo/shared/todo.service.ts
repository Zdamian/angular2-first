import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  private todo: string[];

  constructor() {
    this.todo = [];
    console.log('notes service constructor');
  }

  pushTask(task: string): void {
    this.todo.push(task);
  }

  getTodo(): string[] {
    return this.todo;
  }

}
