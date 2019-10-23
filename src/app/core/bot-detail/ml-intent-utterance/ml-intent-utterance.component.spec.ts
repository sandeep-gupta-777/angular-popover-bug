import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlIntentUtteranceComponent } from './ml-intent-utterance.component';

describe('MlIntentUtteranceComponent', () => {
  let component: MlIntentUtteranceComponent;
  let fixture: ComponentFixture<MlIntentUtteranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlIntentUtteranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlIntentUtteranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
