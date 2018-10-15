import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPanelDivComponent } from './main-panel-div.component';

describe('MainPanelDivComponent', () => {
  let component: MainPanelDivComponent;
  let fixture: ComponentFixture<MainPanelDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPanelDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPanelDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
