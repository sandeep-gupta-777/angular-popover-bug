import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlIntentResponseComponent } from './ml-intent-response.component';

describe('MlIntentResponseComponent', () => {
  let component: MlIntentResponseComponent;
  let fixture: ComponentFixture<MlIntentResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlIntentResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlIntentResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
