import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2VolumeComponent } from './analysis2-volume.component';

describe('Analysis2VolumeComponent', () => {
  let component: Analysis2VolumeComponent;
  let fixture: ComponentFixture<Analysis2VolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analysis2VolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analysis2VolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
