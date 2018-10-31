import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2HeaderComponent } from './analysis2-header.component';

describe('Analysis2HeaderComponent', () => {
  let component: Analysis2HeaderComponent;
  let fixture: ComponentFixture<Analysis2HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analysis2HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analysis2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
