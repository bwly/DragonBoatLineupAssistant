import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class PaddlerService {
  paddlers: Observable<any[]>;

  constructor(private messageService: MessageService, private database: AngularFireDatabase) { }

  getPaddlers(): Observable<any[]> {
    this.messageService.add('PaddlerService: fetched paddler');
    this.paddlers = this.database.list('Paddlers').valueChanges();
    return this.paddlers;
  }

  addPaddler(paddler: object): void {
    this.database.list('Paddlers').push(paddler).then(_ => {
      this.messageService.add('PaddlerService: paddler has been added');
    });
  }
}
