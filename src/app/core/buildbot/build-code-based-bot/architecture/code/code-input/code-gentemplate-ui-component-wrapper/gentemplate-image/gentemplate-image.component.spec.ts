import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GentemplateImageComponent } from './gentemplate-image.component';

describe('GentemplateImageComponent', () => {
  let component: GentemplateImageComponent;
  let fixture: ComponentFixture<GentemplateImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GentemplateImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GentemplateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
