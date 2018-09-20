import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddlersComponent } from './paddlers.component';
import { PaddlerDetailComponent } from '../paddler-detail/paddler-detail.component';
import { PaddlerService } from '../../services/paddler.service';
const paddlerServiceSpy = jasmine.createSpyObj('PaddlerService', ['getPaddlers']);

describe('PaddlersComponent', () => {
  let component: PaddlersComponent;
  let fixture: ComponentFixture<PaddlersComponent>;

  beforeEach(async(() => {
    paddlerServiceSpy.getPaddlers.and.returnValue({
      subscribe() {}
    });
    TestBed.configureTestingModule({
      declarations: [
        PaddlersComponent,
        PaddlerDetailComponent
      ],
      providers: [
        { provide: PaddlerService, useValue: paddlerServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
