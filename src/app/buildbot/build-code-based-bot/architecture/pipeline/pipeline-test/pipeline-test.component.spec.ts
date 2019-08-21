import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineTestComponent } from './pipeline-test.component';

describe('PipelineTestComponent', () => {
  let component: PipelineTestComponent;
  let fixture: ComponentFixture<PipelineTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
