import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendDevComponent } from './backend-dev.component';

describe('BackendDevComponent', () => {
  let component: BackendDevComponent;
  let fixture: ComponentFixture<BackendDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
