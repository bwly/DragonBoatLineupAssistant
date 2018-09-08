import { Injectable } from '@angular/core';
import { Paddler } from './paddler';
import { PADDLERS } from './mock-paddlers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PaddlerService {

  constructor(private messageService: MessageService, private database: AngularFireDatabase) { }

  getPaddlers(): Observable<Paddler[]> {
    this.messageService.add('PaddlerService: fetched paddler');
    return of(PADDLERS);
  }

  addPaddler(firstName: string, lastName: string, weight: number, side: string): void {
    const paddler = { firstName: firstName, lastName: lastName, weight: weight, side: side };
    this.database.list('Paddlers').push(paddler).then(_ => {
      this.messageService.add('PaddlerService: paddler has been added');
    });
  }
}
