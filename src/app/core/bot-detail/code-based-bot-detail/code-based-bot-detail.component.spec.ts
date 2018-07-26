import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBasedBotDetailComponent } from './code-based-bot-detail.component';

describe('CodeBasedBotDetailComponent', () => {
  let component: CodeBasedBotDetailComponent;
  let fixture: ComponentFixture<CodeBasedBotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeBasedBotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBasedBotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
