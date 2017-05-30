
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesComponent } from './notes/notes/notes.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { TodoComponent } from './todo/todo/todo.component';
import { TaskComponent } from './task/task/task.component';
import { TaskTwoComponent } from './task-two/task-two/task-two.component';
import { TaskThreeComponent } from './task-three/task-three/task-three.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/notes',
        pathMatch: 'full'
    },
    {
        path: 'notes',
        component: NotesComponent,
    },
    {
        path: 'contacts',
        component: ContactsComponent,
    },
    {
        path: 'todo',
        component: TodoComponent,
    },
    {
        path: 'task',
        component: TaskComponent,
    },
    {
        path: 'task-two',
        component: TaskTwoComponent,
    },
    {
        path: 'task-three',
        component: TaskThreeComponent,
    },
];


@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}