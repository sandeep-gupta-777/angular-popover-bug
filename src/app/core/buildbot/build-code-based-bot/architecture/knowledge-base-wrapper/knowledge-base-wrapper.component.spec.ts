import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBaseWrapperComponent } from './knowledge-base-wrapper.component';

describe('KnowledgeBaseWrapperComponent', () => {
  let component: KnowledgeBaseWrapperComponent;
  let fixture: ComponentFixture<KnowledgeBaseWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeBaseWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeBaseWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
