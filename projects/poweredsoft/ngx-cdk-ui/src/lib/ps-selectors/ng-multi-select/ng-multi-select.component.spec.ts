import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMultiSelectComponent } from './ng-multi-select.component';

describe('NgMultiSelectComponent', () => {
  let component: NgMultiSelectComponent;
  let fixture: ComponentFixture<NgMultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMultiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
