import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieModalInputComponent } from './categorie-modal-input.component';

describe('CategorieModalInputComponent', () => {
  let component: CategorieModalInputComponent;
  let fixture: ComponentFixture<CategorieModalInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieModalInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieModalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
