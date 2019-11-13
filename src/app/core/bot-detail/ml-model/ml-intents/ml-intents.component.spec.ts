import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlIntentsComponent } from './ml-intents.component';

describe('MlIntentsComponent', () => {
  let component: MlIntentsComponent;
  let fixture: ComponentFixture<MlIntentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlIntentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlIntentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
