import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component_modules/app.component';
import { PaddlersComponent } from './component_modules/paddlers.component';
import { PaddlerDetailComponent } from './component_modules/paddler-detail.component';
import { MessagesComponent } from './component_modules/messages.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AddPaddlerComponent } from './component_modules/add-paddler.component';
import { AddTeamsComponent } from './component_modules/add-teams.component';

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
