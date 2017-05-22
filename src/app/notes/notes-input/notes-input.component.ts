import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-notes-input',
  templateUrl: './notes-input.component.html',
  styleUrls: ['./notes-input.component.scss']
})
export class NotesInputComponent implements OnInit, AfterViewInit, OnDestroy {

  note: string;

  @Output() noteAdded: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('input') input: ElementRef;

  constructor() {
    this.note = '';
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }

  ngOnDestroy() {
    console.log('destroyed')
  }

  onClick() {
    this.noteAdded.emit(this.note);
    this.note = '';
    this.input.nativeElement.focus();
  }

  onKeydown(e: KeyboardEvent) {

    if (e.keyCode === 13) {
      this.noteAdded.emit(this.note);
      this.note = '';
      this.input.nativeElement.focus();
    }
  }
}
