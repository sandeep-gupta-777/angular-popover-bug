import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlIntentsDetailComponent } from './ml-intents-detail.component';

describe('MlIntentsDetailComponent', () => {
  let component: MlIntentsDetailComponent;
  let fixture: ComponentFixture<MlIntentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlIntentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlIntentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
