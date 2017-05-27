import { Component, OnInit } from '@angular/core';

import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

 contacts: string[];

  constructor(private contactService: ContactService) {
    console.log('contacts component constructor');
    this.contacts = this.contactService.getContacts();
  }

  ngOnInit() {
  }

  onContactAdded(contact: string): void {
    this.contacts.push(contact);
  }
}
