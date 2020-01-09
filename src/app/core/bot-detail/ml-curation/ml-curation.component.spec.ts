import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlCurationComponent } from './ml-curation.component';

describe('MlCurationComponent', () => {
  let component: MlCurationComponent;
  let fixture: ComponentFixture<MlCurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlCurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlCurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
