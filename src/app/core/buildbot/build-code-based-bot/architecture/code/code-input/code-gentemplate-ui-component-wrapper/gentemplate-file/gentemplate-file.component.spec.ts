import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GentemplateFileComponent } from './gentemplate-file.component';

describe('GentemplateFileComponent', () => {
  let component: GentemplateFileComponent;
  let fixture: ComponentFixture<GentemplateFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GentemplateFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GentemplateFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
