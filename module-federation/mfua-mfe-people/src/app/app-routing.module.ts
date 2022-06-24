import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleListComponent} from "./features/people-list/people-list.component";
import {PersonDetailComponent} from "./features/person-detail/person-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PeopleListComponent,
  },
  {
    path: 'user/:id',
    component: PersonDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
