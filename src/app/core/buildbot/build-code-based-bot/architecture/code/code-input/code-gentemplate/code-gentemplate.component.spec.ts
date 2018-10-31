import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGentemplateComponent } from './code-gentemplate.component';

describe('CodeGentemplateComponent', () => {
  let component: CodeGentemplateComponent;
  let fixture: ComponentFixture<CodeGentemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeGentemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeGentemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
