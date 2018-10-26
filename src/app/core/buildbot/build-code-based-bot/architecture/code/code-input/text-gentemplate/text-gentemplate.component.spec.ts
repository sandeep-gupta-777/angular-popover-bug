import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGentemplateComponent } from './text-gentemplate.component';

describe('TextGentemplateComponent', () => {
  let component: TextGentemplateComponent;
  let fixture: ComponentFixture<TextGentemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextGentemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextGentemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
