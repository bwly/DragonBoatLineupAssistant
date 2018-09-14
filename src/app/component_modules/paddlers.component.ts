import { Component, OnInit } from '@angular/core';
import { Paddler } from '../objects/paddler';
import { PaddlerService } from '../services/paddler.service';

@Component({
    selector: 'app-paddlers',
    templateUrl: '../component_html/paddlers.component.html',
    styleUrls: ['../component_css/paddlers.component.css']
})
export class PaddlersComponent implements OnInit {
    paddlers: Paddler[];
    selectedPaddler: Paddler;

    constructor(private paddlerService: PaddlerService) { }

    ngOnInit() {
        this.getPaddlers();
    }

    onSelect(paddler: Paddler): void {
        this.selectedPaddler = paddler;
    }

    getPaddlers(): void {
        this.paddlerService.getPaddlers().subscribe(paddlers => this.paddlers = paddlers);
    }
}
