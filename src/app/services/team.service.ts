import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teams: Observable<any[]>;

  constructor(private messageService: MessageService, private database: AngularFireDatabase) { }

  getTeams(): Observable<any[]> {
    this.messageService.add('TeamService: fetched team');
    this.teams = this.database.list('Teams').valueChanges();
    return this.teams;
  }

  addTeam(team: object): void {
    this.database.list('Teams').push(team).then(_ => {
      this.messageService.add('TeamService: team has been added');
    });
  }
}
