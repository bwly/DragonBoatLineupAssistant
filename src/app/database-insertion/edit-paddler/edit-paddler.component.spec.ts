import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaddlerComponent } from './edit-paddler.component';

describe('EditPaddlerComponent', () => {
  let component: EditPaddlerComponent;
  let fixture: ComponentFixture<EditPaddlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPaddlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaddlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
