import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GentemplateSidebarComponent } from './gentemplate-sidebar.component';

describe('GentemplateSidebarComponent', () => {
  let component: GentemplateSidebarComponent;
  let fixture: ComponentFixture<GentemplateSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GentemplateSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GentemplateSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
