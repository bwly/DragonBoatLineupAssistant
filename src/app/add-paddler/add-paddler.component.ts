import { Component, OnInit } from '@angular/core';
import { Paddler } from '../paddler';
import { PaddlerService } from '../paddler.service';

@Component({
  selector: 'app-add-paddler',
  templateUrl: './add-paddler.component.html',
  styleUrls: ['./add-paddler.component.css']
})
export class AddPaddlerComponent {

  constructor(private paddlerService: PaddlerService) { }

  model = new Paddler(null, null, null);

  onSubmit() {
    this.paddlerService.addPaddler(this.model.name, this.model.weight, this.model.side);
  }
}
