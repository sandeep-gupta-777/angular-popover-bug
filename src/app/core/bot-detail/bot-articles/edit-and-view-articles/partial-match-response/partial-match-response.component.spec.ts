import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialMatchResponseComponent } from './partial-match-response.component';

describe('PartialMatchResponseComponent', () => {
  let component: PartialMatchResponseComponent;
  let fixture: ComponentFixture<PartialMatchResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialMatchResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialMatchResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
