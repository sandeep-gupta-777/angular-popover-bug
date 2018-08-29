import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBasePresentationComponent } from './knowledge-base-presentation.component';

describe('KnowledgeBasePresentationComponent', () => {
  let component: KnowledgeBasePresentationComponent;
  let fixture: ComponentFixture<KnowledgeBasePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeBasePresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeBasePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
