import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GentemplateVideoComponent } from './gentemplate-video.component';

describe('GentemplateVideoComponent', () => {
  let component: GentemplateVideoComponent;
  let fixture: ComponentFixture<GentemplateVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GentemplateVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GentemplateVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
