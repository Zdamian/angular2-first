import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskThreeComponent } from './task-three/task-three.component';
import { FormsModule } from '@angular/forms';

import { TaskThreeService } from './shared/task-three.service';
import { SimpleFormComponent } from './task-three/simple-form/simple-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TaskThreeComponent, SimpleFormComponent],
  exports: [ TaskThreeComponent ],
  providers: [ TaskThreeService ]
})
export class TaskThreeModule { }
