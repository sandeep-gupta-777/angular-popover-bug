import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatorFormComponent } from './avator-form.component';

describe('AvatorFormComponent', () => {
  let component: AvatorFormComponent;
  let fixture: ComponentFixture<AvatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
