import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teams: Observable<any[]>;

  constructor(private database: AngularFireDatabase) { }

  getTeams(): Observable<any[]> {
    this.teams = this.database.list('Teams').valueChanges();
    return this.teams;
  }

  addTeam(team: object): void {
    this.database.list('Teams').push(team).then(_ => {
    });
  }
}
