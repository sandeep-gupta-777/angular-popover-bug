import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBotsComponent } from './view-bots.component';

describe('ViewBotsComponent', () => {
  let component: ViewBotsComponent;
  let fixture: ComponentFixture<ViewBotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
