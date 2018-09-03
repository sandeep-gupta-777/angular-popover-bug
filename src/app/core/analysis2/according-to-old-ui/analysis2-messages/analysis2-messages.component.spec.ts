import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2MessagesComponent } from './analysis2-messages.component';

describe('Analysis2MessagesComponent', () => {
  let component: Analysis2MessagesComponent;
  let fixture: ComponentFixture<Analysis2MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analysis2MessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analysis2MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
