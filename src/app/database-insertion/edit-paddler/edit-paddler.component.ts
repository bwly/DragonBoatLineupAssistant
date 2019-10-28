import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { Paddler } from '../../models/paddler';
import { PaddlerService } from '../../services/paddler.service';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-paddler',
  templateUrl: './edit-paddler.component.html',
  styleUrls: ['./edit-paddler.component.css']
})
export class EditPaddlerComponent implements OnInit {
  teams: Team[];
  model: Paddler;
  sides = ['Right', 'Left', 'Both'];
  id: string;

  constructor(private paddlerService: PaddlerService,
              private teamService: TeamService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTeams();
    this.getPaddler();
  }

  getPaddler(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.paddlerService.getPaddler(this.id).subscribe(paddler => this.model = paddler);
  }

  onSubmit() {
    this.paddlerService.updatePaddler(this.id, this.model);
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe(teams => this.teams = teams.sort(this.sortTeamsByName));
  }

  sortTeamsByName(teamOne: Team, teamTwo: Team): number {
    let returnValue;
    const teamOneName = teamOne.name.toLowerCase();
    const teamTwoName = teamTwo.name.toLowerCase();

    if (teamOneName < teamTwoName) {
      returnValue = -1;
    } else if (teamOneName > teamTwoName) {
      returnValue = 1;
    } else {
      returnValue = 0;
    }
    return returnValue;
  }
}
