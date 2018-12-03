import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayWithMenuComponent } from './overlay-with-menu.component';

describe('OverlayWithMenuComponent', () => {
  let component: OverlayWithMenuComponent;
  let fixture: ComponentFixture<OverlayWithMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayWithMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayWithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
