import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GentemplateEditKeyComponent } from './gentemplate-edit-key.component';

describe('GentemplateEditKeyComponent', () => {
  let component: GentemplateEditKeyComponent;
  let fixture: ComponentFixture<GentemplateEditKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GentemplateEditKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GentemplateEditKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
