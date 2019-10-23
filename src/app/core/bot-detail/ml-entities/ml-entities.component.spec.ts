import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlEntitiesComponent } from './ml-entities.component';

describe('MlEntitiesComponent', () => {
  let component: MlEntitiesComponent;
  let fixture: ComponentFixture<MlEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlEntitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
