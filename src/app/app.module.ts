import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaddlersComponent } from './paddler-display/paddlers/paddlers.component';
import { PaddlerDetailComponent } from './paddler-display/paddler-detail/paddler-detail.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { AddPaddlerComponent } from './database-insertion/add-paddler/add-paddler.component';
import { AddTeamsComponent } from './database-insertion/add-teams/add-teams.component';
import { PaddlerService } from './services/paddler.service';
import { TeamService } from './services/team.service';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
    declarations: [
        AppComponent,
        PaddlersComponent,
        PaddlerDetailComponent,
        AddPaddlerComponent,
        AddTeamsComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule
    ],
    providers: [
        PaddlerService,
        TeamService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
