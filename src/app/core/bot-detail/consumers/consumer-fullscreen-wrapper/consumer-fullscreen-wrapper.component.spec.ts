import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerFullscreenWrapperComponent } from './consumer-fullscreen-wrapper.component';

describe('ConsumerFullscreenWrapperComponent', () => {
  let component: ConsumerFullscreenWrapperComponent;
  let fixture: ComponentFixture<ConsumerFullscreenWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerFullscreenWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerFullscreenWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
