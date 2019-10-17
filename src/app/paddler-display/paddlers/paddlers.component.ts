import { Component, OnInit } from '@angular/core';
import { Paddler } from '../../models/paddler';
import { PaddlerService } from '../../services/paddler.service';

@Component({
    selector: 'app-paddlers',
    templateUrl: './paddlers.component.html',
    styleUrls: ['./paddlers.component.css']
})
export class PaddlersComponent implements OnInit {
    paddlers: Paddler[];

    constructor(private paddlerService: PaddlerService) { }

    ngOnInit() {
        this.getPaddlers();
    }

    getPaddlers(): void {
        this.paddlerService.getPaddlers().subscribe(paddlers => this.paddlers = paddlers.sort(this.sortPaddlersByName));
    }

    sortPaddlersByName(PaddlerOne: Paddler, PaddlerTwo: Paddler): number {
        let returnValue;
        const paddlerOneName = [PaddlerOne.firstName.toLowerCase(), PaddlerOne.lastName.toLowerCase()];
        const paddlerTwoName = [PaddlerTwo.firstName.toLowerCase(), PaddlerTwo.lastName.toLowerCase()];

        if (paddlerOneName[0] < paddlerTwoName[0]) {
          returnValue = -1;
        } else if (paddlerOneName[0] > paddlerTwoName[0]) {
          returnValue = 1;
        } else {
            if (paddlerOneName[1] < paddlerTwoName[1]) {
                returnValue = -1;
            } else if (paddlerOneName[1] < paddlerTwoName[1]) {
                returnValue = 1;
            } else {
                returnValue = 0;
            }
        }
        return returnValue;
      }
}
