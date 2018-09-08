import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaddlersComponent } from './paddlers/paddlers.component';
import { AddPaddlerComponent } from './add-paddler/add-paddler.component';

const routes: Routes = [
  { path: 'paddlers', component: PaddlersComponent },
  { path: 'addPaddler', component: AddPaddlerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
