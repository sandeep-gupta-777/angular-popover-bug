import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlEditEntityComponent } from './ml-edit-entity.component';

describe('MlEditEntityComponent', () => {
  let component: MlEditEntityComponent;
  let fixture: ComponentFixture<MlEditEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlEditEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlEditEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
