import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaddlerComponent } from '../../component_modules/add-paddler.component';

describe('AddPaddlerComponent', () => {
  let component: AddPaddlerComponent;
  let fixture: ComponentFixture<AddPaddlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPaddlerComponent ]
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
