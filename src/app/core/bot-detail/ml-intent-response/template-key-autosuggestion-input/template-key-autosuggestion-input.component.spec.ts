import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateKeyAutosuggestionInputComponent } from './template-key-autosuggestion-input.component';

describe('TemplateKeyAutosuggestionInputComponent', () => {
  let component: TemplateKeyAutosuggestionInputComponent;
  let fixture: ComponentFixture<TemplateKeyAutosuggestionInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateKeyAutosuggestionInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateKeyAutosuggestionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
