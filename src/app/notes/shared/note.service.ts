import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {

  private notes: string[];

  constructor() {
    this.notes = [];
    console.log('notes service constructor');
  }

  pushNote(note: string): void {
    this.notes.push(note);
  }

  getNotes(): string[] {
    return this.notes;
  }

}
