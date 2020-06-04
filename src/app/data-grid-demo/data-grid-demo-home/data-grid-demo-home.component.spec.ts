import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridDemoHomeComponent } from './data-grid-demo-home.component';

describe('DataGridDemoHomeComponent', () => {
  let component: DataGridDemoHomeComponent;
  let fixture: ComponentFixture<DataGridDemoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridDemoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridDemoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
