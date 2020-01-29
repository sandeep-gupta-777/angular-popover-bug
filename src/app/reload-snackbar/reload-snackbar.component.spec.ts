import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadSnackbarComponent } from './reload-snackbar.component';

describe('ReloadSnackbarComponent', () => {
  let component: ReloadSnackbarComponent;
  let fixture: ComponentFixture<ReloadSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReloadSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloadSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
