import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaddlersComponent } from './component_modules/paddlers.component';
import { AddPaddlerComponent } from './component_modules/add-paddler.component';
import { AddTeamsComponent } from './component_modules/add-teams.component';

const routes: Routes = [
  { path: 'paddlers', component: PaddlersComponent },
  { path: 'addPaddler', component: AddPaddlerComponent },
  { path: 'addTeam', component: AddTeamsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
