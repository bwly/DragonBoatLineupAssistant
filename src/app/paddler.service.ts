import { Injectable } from '@angular/core';
import { Paddler } from './paddler';
import { PADDLERS } from './mock-paddlers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaddlerService {

  constructor() { }

  getPaddlers(): Observable<Paddler[]> {
    return of(PADDLERS);
  }
}
