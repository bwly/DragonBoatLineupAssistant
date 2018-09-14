import { Component, OnInit } from '@angular/core';
import { Paddler } from '../paddler';
import { PaddlerService } from '../paddler.service';

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.css']
})
export class AddTeamsComponent {

  constructor(private paddlerService: PaddlerService) { }

  model = {name: null};

  onSubmit() {
    this.paddlerService.addTeam(this.model);
  }
}
