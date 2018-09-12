import { Component, OnInit } from '@angular/core';
import { Paddler } from '../paddler';
import { PaddlerService } from '../paddler.service';

@Component({
  selector: 'app-add-paddler',
  templateUrl: './add-paddler.component.html',
  styleUrls: ['./add-paddler.component.css']
})
export class AddPaddlerComponent {

  TEAMS = ['Cal Dragon Boat', 'Lowell Dragon Boat', 'George Washington HS Dragon Boat',
    'UCSD Dragon Boat', 'UCLA Dragon Boat', 'UCR Surging Dragons', 'Davis Racing Dragons', 'Dragon Warriors', 'Lincoln High School',
    'JAWS', 'Lightwave', 'Dieselfish Youth', 'DieselFish', 'SF Blazing Dragons', 'San Jose Dragon Boat',
    'Santa Cruz Dragon Boat', 'San Diego Dragon Boat Team'];

  constructor(private paddlerService: PaddlerService) { }

  model = new Paddler(null, null, null, null, null);

  onSubmit() {
    this.paddlerService.addPaddler(this.model.firstName, this.model.lastName, this.model.weight, this.model.side, this.model.team);
  }
}
