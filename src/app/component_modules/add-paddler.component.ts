import { Component, OnInit } from '@angular/core';
import { Paddler } from '../objects/paddler';
import { Team } from '../objects/team';
import { PaddlerService } from '../services/paddler.service';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-add-paddler',
  templateUrl: '../component_html/add-paddler.component.html',
  styleUrls: ['../component_css/add-paddler.component.css']
})
export class AddPaddlerComponent implements OnInit {
  teams: Team[];
  model = new Paddler(null, null, null, null, null);

  constructor(private paddlerService: PaddlerService,
              private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  onSubmit() {
    this.paddlerService.addPaddler(this.model.firstName, this.model.lastName, this.model.weight, this.model.side, this.model.team);
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe(teams => this.teams = teams.sort(this.sortTeamsByName));
  }

  sortTeamsByName(teamOne: Team, teamTwo: Team): number {
    let returnValue;

    if (teamOne.name < teamTwo.name) {
      returnValue = -1;
    } else if (teamOne.name > teamTwo.name) {
      returnValue = 1;
    } else {
      returnValue = 0;
    }
    return returnValue;
  }
}
