import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamsComponent } from './add-teams.component';
import { FormsModule } from '@angular/forms';
import { TeamService } from '../../services/team.service';
const teamServiceSpy = jasmine.createSpyObj('TeamService', ['getTeams']);

describe('AddTeamsComponent', () => {
  let component: AddTeamsComponent;
  let fixture: ComponentFixture<AddTeamsComponent>;

  beforeEach(async(() => {
    teamServiceSpy.getTeams.and.returnValue({
      subscribe() {}
    });
    TestBed.configureTestingModule({
      declarations: [ AddTeamsComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: TeamService, useValue: teamServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
