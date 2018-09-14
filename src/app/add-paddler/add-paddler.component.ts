import { Component, OnInit } from '@angular/core';
import { Paddler } from '../paddler';
import { PaddlerService } from '../paddler.service';

@Component({
  selector: 'app-add-paddler',
  templateUrl: './add-paddler.component.html',
  styleUrls: ['./add-paddler.component.css']
})
export class AddPaddlerComponent implements OnInit {
  teams: {name: string}[];
  model = new Paddler(null, null, null, null, null);

  constructor(private paddlerService: PaddlerService) { }

  ngOnInit() {
    this.getTeams();
  }

  onSubmit() {
    this.paddlerService.addPaddler(this.model.firstName, this.model.lastName, this.model.weight, this.model.side, this.model.team);
  }

  getTeams(): void {
    this.paddlerService.getTeams().subscribe(teams => this.teams = teams);
  }
}
