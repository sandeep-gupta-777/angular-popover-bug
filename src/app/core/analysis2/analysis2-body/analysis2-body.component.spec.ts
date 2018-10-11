import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2BodyComponent } from './analysis2-body.component';

describe('Analysis2BodyComponent', () => {
  let component: Analysis2BodyComponent;
  let fixture: ComponentFixture<Analysis2BodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analysis2BodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analysis2BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
