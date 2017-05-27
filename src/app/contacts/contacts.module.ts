import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactService } from './shared/contact.service';
import { ContactsInputComponent } from './contacts-input/contacts-input.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ContactsComponent,
    ContactsInputComponent,
    ContactsListComponent
  ],
  exports: [ ContactsComponent ],
  providers: [ ContactService ]
})
export class ContactsModule { }
