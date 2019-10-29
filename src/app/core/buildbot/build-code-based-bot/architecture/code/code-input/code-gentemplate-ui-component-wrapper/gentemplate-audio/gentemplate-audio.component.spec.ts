import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GentemplateAudioComponent } from './gentemplate-audio.component';

describe('GentemplateAudioComponent', () => {
  let component: GentemplateAudioComponent;
  let fixture: ComponentFixture<GentemplateAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GentemplateAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GentemplateAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
