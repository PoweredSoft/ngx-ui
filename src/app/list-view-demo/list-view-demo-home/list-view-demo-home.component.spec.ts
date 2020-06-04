import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewDemoHomeComponent } from './list-view-demo-home.component';

describe('ListViewDemoHomeComponent', () => {
  let component: ListViewDemoHomeComponent;
  let fixture: ComponentFixture<ListViewDemoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewDemoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewDemoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
