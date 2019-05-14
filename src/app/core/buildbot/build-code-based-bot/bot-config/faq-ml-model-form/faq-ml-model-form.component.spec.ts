import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqMlModelFormComponent } from './faq-ml-model-form.component';

describe('FaqMlModelFormComponent', () => {
  let component: FaqMlModelFormComponent;
  let fixture: ComponentFixture<FaqMlModelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqMlModelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqMlModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
