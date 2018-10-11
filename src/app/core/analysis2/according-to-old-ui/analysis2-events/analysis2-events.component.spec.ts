import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2EventsComponent } from './analysis2-events.component';

describe('Analysis2EventsComponent', () => {
  let component: Analysis2EventsComponent;
  let fixture: ComponentFixture<Analysis2EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analysis2EventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analysis2EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
