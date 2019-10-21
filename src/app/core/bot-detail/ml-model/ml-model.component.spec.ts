import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MLModelComponent } from './ml-model.component';

describe('MLModelComponent', () => {
  let component: MLModelComponent;
  let fixture: ComponentFixture<MLModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MLModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MLModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
