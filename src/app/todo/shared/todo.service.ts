import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  private todo: object[];

  constructor() {
    this.todo = [];
  }

  pushTask(Task: object): void {
    this.todo.push(Task);
  }

  getTodo(): object[] {
    return this.todo;
  }

}
