import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotesComponent } from './notes/notes.component';
import { NoteService } from './shared/note.service';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesInputComponent } from './notes-input/notes-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    NotesComponent,
    NotesListComponent,
    NotesInputComponent
  ],
  exports: [ NotesComponent ],
  providers: [ NoteService ]
})
export class NotesModule { }
