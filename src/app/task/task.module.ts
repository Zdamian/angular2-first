import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';

import { TaskService } from './shared/task.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TaskComponent],
  exports: [ TaskComponent ],
  providers: [ TaskService ]
})
export class TaskModule { }
