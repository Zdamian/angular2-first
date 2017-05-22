import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-contacts-input',
  templateUrl: './contacts-input.component.html',
  styleUrls: ['./contacts-input.component.scss']
})
export class ContactsInputComponent implements OnInit, AfterViewInit {

  contact: string;

  @Output() contactAdded: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('input') input: ElementRef;

  constructor() {
    this.contact = '';
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }

  onClick() {
    this.contactAdded.emit(this.contact);
    this.contact = '';
    this.input.nativeElement.focus();
  }
}
