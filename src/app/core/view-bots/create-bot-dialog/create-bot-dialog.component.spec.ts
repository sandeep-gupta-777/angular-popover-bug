import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBotDialogComponent } from './create-bot-dialog.component';

describe('CreateBotDialogComponent', () => {
  let component: CreateBotDialogComponent;
  let fixture: ComponentFixture<CreateBotDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
