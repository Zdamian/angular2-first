import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo/todo.component';
import { TodoService } from './shared/todo.service';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TodoComponent,
    TodoInputComponent,
    TodoListComponent
  ],
  exports: [ TodoComponent ],
  providers: [ TodoService ]
})
export class TodoModule { }
