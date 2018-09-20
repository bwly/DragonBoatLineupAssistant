import { TestBed, inject } from '@angular/core/testing';

import { TeamService } from './team.service';
import { AngularFireDatabase } from 'angularfire2/database';
const AngularFireDatabaseSpy = jasmine.createSpyObj('AngularFireDatabase', ['list']);

describe('TeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TeamService,
        { provide: AngularFireDatabase, useValue: AngularFireDatabaseSpy }
      ]
    });
  });

  it('should be created', inject([TeamService], (service: TeamService) => {
    expect(service).toBeTruthy();
  }));
});
