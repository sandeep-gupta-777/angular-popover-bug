import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomnerComponent } from './view-customner.component';

describe('ViewCustomnerComponent', () => {
  let component: ViewCustomnerComponent;
  let fixture: ComponentFixture<ViewCustomnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
