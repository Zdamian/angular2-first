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
import { TaskTwoModule } from './task-two/task-two.module';
import { TaskThreeModule } from './task-three/task-three.module';

import { TaskTwoService } from './task-two/shared/task-two.service';
import { TaskThreeService } from './task-three/shared/task-three.service';

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
    TaskModule,
    TaskTwoModule,
    TaskThreeModule
  ],
  providers: [
    {provide: 'mail', useClass: TaskTwoService},
    {provide: 'sms', useClass: TaskThreeService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
