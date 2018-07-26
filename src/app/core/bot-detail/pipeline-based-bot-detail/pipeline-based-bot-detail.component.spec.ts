import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineBasedBotDetailComponent } from './pipeline-based-bot-detail.component';

describe('PipelineBasedBotDetailComponent', () => {
  let component: PipelineBasedBotDetailComponent;
  let fixture: ComponentFixture<PipelineBasedBotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineBasedBotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineBasedBotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
