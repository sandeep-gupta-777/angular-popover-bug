import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAndViewArticlesComponent } from './edit-and-view-articles.component';

describe('EditAndViewArticlesComponent', () => {
  let component: EditAndViewArticlesComponent;
  let fixture: ComponentFixture<EditAndViewArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAndViewArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAndViewArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
