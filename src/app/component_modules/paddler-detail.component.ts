import { Component, OnInit, Input } from '@angular/core';
import { Paddler } from '../objects/paddler';

@Component({
  selector: 'app-paddler-detail',
  templateUrl: '../component_html/paddler-detail.component.html',
  styleUrls: ['../component_css/paddler-detail.component.css']
})
export class PaddlerDetailComponent implements OnInit {

  @Input() paddler: Paddler;

  constructor() { }

  ngOnInit() {
  }

}
