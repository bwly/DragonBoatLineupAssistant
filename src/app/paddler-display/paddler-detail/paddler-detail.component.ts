import { Component, OnInit } from '@angular/core';
import { Paddler } from '../../models/paddler';
import { PaddlerService } from 'src/app/services/paddler.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paddler-detail',
  templateUrl: './paddler-detail.component.html',
  styleUrls: ['./paddler-detail.component.css']
})
export class PaddlerDetailComponent implements OnInit {
  paddler: Paddler;
  id: string;

  constructor(
    private paddlerService: PaddlerService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPaddler(this.id);
  }

  getPaddler(id: string): void {
    this.paddlerService.getPaddler(id).subscribe(paddler => this.paddler = paddler);
  }

}
