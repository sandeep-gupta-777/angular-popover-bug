import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPipelineBasedBotComponent } from './build-pipeline-based-bot.component';

describe('BuildPipelineBasedBotComponent', () => {
  let component: BuildPipelineBasedBotComponent;
  let fixture: ComponentFixture<BuildPipelineBasedBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildPipelineBasedBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildPipelineBasedBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
