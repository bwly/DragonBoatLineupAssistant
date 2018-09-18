import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.css']
})
export class AddTeamsComponent {

  constructor(private teamService: TeamService) { }

  model = {name: null};

  onSubmit() {
    this.teamService.addTeam(this.model);
  }
}
