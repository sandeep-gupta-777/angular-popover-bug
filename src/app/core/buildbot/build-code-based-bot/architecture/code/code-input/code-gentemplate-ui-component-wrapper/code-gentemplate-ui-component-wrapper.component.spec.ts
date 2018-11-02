import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGentemplateUiComponentWrapperComponent } from './code-gentemplate-ui-component-wrapper.component';

describe('CodeGentemplateUiComponentWrapperComponent', () => {
  let component: CodeGentemplateUiComponentWrapperComponent;
  let fixture: ComponentFixture<CodeGentemplateUiComponentWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeGentemplateUiComponentWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeGentemplateUiComponentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
