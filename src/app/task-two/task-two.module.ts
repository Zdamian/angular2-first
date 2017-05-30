import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTwoComponent } from './task-two/task-two.component';
import { FormsModule } from '@angular/forms';

import { TaskTwoService } from './shared/task-two.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TaskTwoComponent],
  exports: [ TaskTwoComponent ],
  providers: [ TaskTwoService ]
})
export class TaskTwoModule { }
