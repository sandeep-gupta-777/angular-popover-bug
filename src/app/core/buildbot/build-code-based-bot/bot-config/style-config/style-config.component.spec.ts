import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleConfigComponent } from './style-config.component';

describe('StyleConfigComponent', () => {
  let component: StyleConfigComponent;
  let fixture: ComponentFixture<StyleConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
