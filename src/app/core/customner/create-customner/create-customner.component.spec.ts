import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomnerComponent } from './create-customner.component';

describe('CreateCustomnerComponent', () => {
  let component: CreateCustomnerComponent;
  let fixture: ComponentFixture<CreateCustomnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
