import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVersionListComponent } from './code-version-list.component';

describe('CodeVersionListComponent', () => {
  let component: CodeVersionListComponent;
  let fixture: ComponentFixture<CodeVersionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeVersionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeVersionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
