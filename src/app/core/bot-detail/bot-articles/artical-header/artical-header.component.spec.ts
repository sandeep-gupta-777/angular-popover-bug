import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalHeaderComponent } from './artical-header.component';

describe('ArticalHeaderComponent', () => {
  let component: ArticalHeaderComponent;
  let fixture: ComponentFixture<ArticalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
