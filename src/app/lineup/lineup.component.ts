import { Component, OnInit } from '@angular/core';
import { Paddler } from '../models/paddler';
import { PaddlerService } from '../services/paddler.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent implements OnInit {
  paddlers: Paddler[];
  weightLeft: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  weightRight: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  leftPaddlers: Paddler[] = [null, null, null, null, null, null, null, null, null, null];
  rightPaddlers: Paddler[] = [null, null, null, null, null, null, null, null, null, null];
  leftTotal = 0;
  rightTotal = 0;

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

  setPaddler(side: string, row: number): void {
    let paddler;
    let weight;
    if (side === 'L') {
      paddler = this.leftPaddlers[row - 1];
    } else {
      paddler = this.rightPaddlers[row - 1];
    }

    if (paddler) {
      weight = paddler.weight;
    } else {
      weight = 0;
    }

    if (side === 'L') {
      this.leftTotal -= this.weightLeft[row - 1];
      this.weightLeft[row - 1] = +weight;
      this.leftTotal += +weight;
    } else {
      this.rightTotal -= this.weightRight[row - 1];
      this.weightRight[row - 1] = +weight;
      this.rightTotal += +weight;
    }
  }

}
