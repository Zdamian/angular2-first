import { Component, OnInit } from '@angular/core';

import { NoteService } from '../shared/note.service';

interface Task {
  done: boolean;
  task: string;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: string[];

  constructor(private noteService: NoteService) {
    console.log('notes component constructor');
    this.notes = this.noteService.getNotes();
  }

  ngOnInit() {
  }

  onNoteAdded(note: string): void {
    this.notes.push(note);
  }
}
