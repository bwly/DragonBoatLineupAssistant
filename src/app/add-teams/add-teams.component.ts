import { Component, OnInit } from '@angular/core';
import { Paddler } from '../paddler';
import { PaddlerService } from '../paddler.service';

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.css']
})
export class AddTeamsComponent {
  TEAMS = ['Cal Dragon Boat', 'Lowell Dragon Boat', 'George Washington HS Dragon Boat',
    'UCSD Dragon Boat', 'UCLA Dragon Boat', 'UCR Surging Dragons', 'Davis Racing Dragons', 'Dragon Warriors', 'Lincoln High School',
    'JAWS', 'Lightwave', 'Dieselfish Youth', 'DieselFish', 'SF Blazing Dragons', 'San Jose Dragon Boat',
    'Santa Cruz Dragon Boat', 'San Diego Dragon Boat Team'];

  constructor(private paddlerService: PaddlerService) { }

  model = {name: null};

  onSubmit() {
    this.paddlerService.addTeam(this.model);
  }
}
