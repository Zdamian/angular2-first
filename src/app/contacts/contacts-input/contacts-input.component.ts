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

  ngOnDestroy() {
    console.log('destroyed')
  }

  onClick() {
    this.contactAdded.emit(this.contact);
    this.contact = '';
    this.input.nativeElement.focus();
  }

  onKeydown(e: KeyboardEvent) {

    if (e.keyCode === 13) {
      this.contactAdded.emit(this.contact);
      this.contact = '';
      this.input.nativeElement.focus();
    }
  }
}
