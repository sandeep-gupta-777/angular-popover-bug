import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmV2Component } from './modal-confirm-v2.component';

describe('ModalConfirmV2Component', () => {
  let component: ModalConfirmV2Component;
  let fixture: ComponentFixture<ModalConfirmV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConfirmV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
