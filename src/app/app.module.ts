import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaddlersComponent } from './paddlers/paddlers.component';
import { PaddlerDetailComponent } from './paddler-detail/paddler-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { AddPaddlerComponent } from './add-paddler/add-paddler.component';

@NgModule({
    declarations: [
        AppComponent,
        PaddlersComponent,
        PaddlerDetailComponent,
        MessagesComponent,
        AddPaddlerComponent
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
