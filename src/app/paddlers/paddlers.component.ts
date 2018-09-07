import { Component, OnInit } from '@angular/core';
import { Paddler } from '../paddler';
import { LIFECYCLE_HOOKS_VALUES } from '../../../node_modules/@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-paddlers',
  templateUrl: './paddlers.component.html',
  styleUrls: ['./paddlers.component.css']
})
export class PaddlersComponent implements OnInit {
  paddler: Paddler = {
    name: 'Benson Ly',
    weight: 195,
    side: 'both'
  };

  constructor() { }

  ngOnInit() {
  }

}
