import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGentemplateUiWrapperComponent } from './code-gentemplate-ui-wrapper.component';

describe('CodeGentemplateUiWrapperComponent', () => {
  let component: CodeGentemplateUiWrapperComponent;
  let fixture: ComponentFixture<CodeGentemplateUiWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeGentemplateUiWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeGentemplateUiWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
