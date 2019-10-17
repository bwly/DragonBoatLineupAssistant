import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Paddler } from '../models/paddler';

@Injectable({
  providedIn: 'root'
})
export class PaddlerService {
  paddlers: Observable<Paddler[]>;
  paddler: Observable<Paddler>;
  databaseName = 'Paddlers';

  constructor(private database: AngularFireDatabase) { }

  getPaddlers(): Observable<any[]> {
    this.paddlers = <Observable<Paddler[]>>this.database.list(this.databaseName).valueChanges();
    return this.paddlers;
  }

  getPaddler(id: string): Observable<Paddler> {
    this.paddler = <Observable<Paddler>>this.database.object(this.databaseName + '/' + id).valueChanges();
    return this.paddler;
  }

  addPaddler(paddler: object): void {
    this.database.list(this.databaseName).push(paddler).then(value => {
      this.database.list(this.databaseName).update(value.key, {id: value.key});
    });
  }
}
