import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  private contacts: string[];

  constructor() {
    this.contacts = [];
    console.log('contacts service constructor');
  }

  pushContact(contact: string): void {
    this.contacts.push(contact);
  }

  getContacts(): string[] {
    return this.contacts;
  }

}
