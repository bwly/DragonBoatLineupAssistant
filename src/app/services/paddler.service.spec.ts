import { TestBed, inject } from '@angular/core/testing';

import { PaddlerService } from './paddler.service';
import { AngularFireDatabase } from 'angularfire2/database';
const AngularFireDatabaseSpy = jasmine.createSpyObj('AngularFireDatabase', ['list']);

describe('PaddlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PaddlerService,
        { provide: AngularFireDatabase, useValue: AngularFireDatabaseSpy }
      ]
    });
  });

  it('should be created', inject([PaddlerService], (service: PaddlerService) => {
    expect(service).toBeTruthy();
  }));
});
