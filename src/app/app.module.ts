import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaddlersComponent } from './paddler-display/paddlers/paddlers.component';
import { PaddlerDetailComponent } from './paddler-display/paddler-detail/paddler-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { AddPaddlerComponent } from './database-insertion/add-paddler/add-paddler.component';
import { AddTeamsComponent } from './database-insertion/add-teams/add-teams.component';

@NgModule({
    declarations: [
        AppComponent,
        PaddlersComponent,
        PaddlerDetailComponent,
        MessagesComponent,
        AddPaddlerComponent,
        AddTeamsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
