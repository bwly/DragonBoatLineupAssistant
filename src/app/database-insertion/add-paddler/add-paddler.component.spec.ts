import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaddlerComponent } from './add-paddler.component';
import { FormsModule } from '@angular/forms';
import { PaddlerService } from '../../services/paddler.service';
import { TeamService } from '../../services/team.service';
const paddlerServiceSpy = jasmine.createSpyObj('PaddlerService', ['addPaddler']);
const teamServiceSpy = jasmine.createSpyObj('TeamService', ['getTeams']);

describe('AddPaddlerComponent', () => {
  let component: AddPaddlerComponent;
  let fixture: ComponentFixture<AddPaddlerComponent>;

  beforeEach(async(() => {
    teamServiceSpy.getTeams.and.returnValue({
      subscribe() {}
    });
    TestBed.configureTestingModule({
      declarations: [ AddPaddlerComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: PaddlerService, useValue: paddlerServiceSpy },
        { provide: TeamService, useValue: teamServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaddlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
