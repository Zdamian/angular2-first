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
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit, AfterViewInit, OnDestroy {

  task: string;

  @Output() taskAdded: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('input') input: ElementRef;

  constructor() {
    this.task = '';
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
    this.taskAdded.emit(this.task);
    this.task = '';
    this.input.nativeElement.focus();
  }

  onKeydown(e: KeyboardEvent) {

    if (e.keyCode === 13) {
      this.taskAdded.emit(this.task);
      this.task = '';
      this.input.nativeElement.focus();
    }
  }
}
