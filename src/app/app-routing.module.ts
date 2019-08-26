import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { BracketsBalanceComponent } from './components/brackets-balance/brackets-balance.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-contact' },
  { path: 'create-contact', component: ContactCreateComponent },
  { path: 'edit-contact/:id', component: ContactEditComponent },
  { path: 'contacts-list', component: ContactListComponent },
  { path: 'brackets', component: BracketsBalanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }