import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPipelineBasedBotsComponent } from './view-pipeline-based-bots.component';

describe('ViewPipelineBasedBotsComponent', () => {
  let component: ViewPipelineBasedBotsComponent;
  let fixture: ComponentFixture<ViewPipelineBasedBotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPipelineBasedBotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPipelineBasedBotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
