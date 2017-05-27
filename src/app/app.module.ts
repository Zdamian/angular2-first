import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { MenuModule } from './menu/menu.module';
import { NotesModule } from './notes/notes.module';
import { ContactsModule } from './contacts/contacts.module';
import { TodoModule } from './todo/todo.module';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,

    AppRoutingModule,

    MenuModule,
    NotesModule,
    ContactsModule,
    TodoModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
