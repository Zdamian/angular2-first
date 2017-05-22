
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesComponent } from './notes/notes/notes.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';


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
];


@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}