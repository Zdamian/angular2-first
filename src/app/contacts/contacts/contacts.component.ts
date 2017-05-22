import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

 contacts: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onContactAdded(contact: string) {
    this.contacts.push(contact);
  }
}
