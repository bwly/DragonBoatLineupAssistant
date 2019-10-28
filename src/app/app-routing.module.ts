import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaddlersComponent } from './paddler-display/paddlers/paddlers.component';
import { AddPaddlerComponent } from './database-insertion/add-paddler/add-paddler.component';
import { AddTeamsComponent } from './database-insertion/add-teams/add-teams.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PaddlerDetailComponent } from './paddler-display/paddler-detail/paddler-detail.component';
import { LineupComponent } from './lineup/lineup.component';
import { EditPaddlerComponent } from './database-insertion/edit-paddler/edit-paddler.component';

const routes: Routes = [
  { path: 'paddlers', component: PaddlersComponent },
  { path: 'addPaddler', component: AddPaddlerComponent },
  { path: 'addTeam', component: AddTeamsComponent },
  { path: '', component: WelcomeComponent },
  { path: 'paddlerDetail/:id', component: PaddlerDetailComponent },
  { path: 'lineup', component: LineupComponent },
  { path: 'editPaddler/:id', component: EditPaddlerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
