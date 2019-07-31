import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSearchBoxComponent } from './faq-search-box.component';

describe('FaqSearchBoxComponent', () => {
  let component: FaqSearchBoxComponent;
  let fixture: ComponentFixture<FaqSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
