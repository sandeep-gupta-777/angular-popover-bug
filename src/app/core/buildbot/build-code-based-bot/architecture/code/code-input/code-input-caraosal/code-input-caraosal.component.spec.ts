import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeInputCaraosalComponent } from './code-input-caraosal.component';

describe('CodeInputCaraosalComponent', () => {
  let component: CodeInputCaraosalComponent;
  let fixture: ComponentFixture<CodeInputCaraosalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeInputCaraosalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeInputCaraosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
