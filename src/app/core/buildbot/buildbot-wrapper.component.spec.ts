import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildbotWrapperComponent } from './buildbot-wrapper.component';

describe('BuildbotWrapperComponent', () => {
  let component: BuildbotWrapperComponent;
  let fixture: ComponentFixture<BuildbotWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildbotWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildbotWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
