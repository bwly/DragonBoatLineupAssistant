import { Injectable } from '@angular/core';
import { Paddler } from './paddler';
import { PADDLERS } from './mock-paddlers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PaddlerService {

  constructor(private messageService: MessageService) { }

  getPaddlers(): Observable<Paddler[]> {
    this.messageService.add('PaddlerService: fetched paddler');
    return of(PADDLERS);
  }
}
