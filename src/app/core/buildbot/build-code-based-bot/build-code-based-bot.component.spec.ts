import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCodeBasedBotComponent } from './build-code-based-bot.component';

describe('BuildCodeBasedBotComponent', () => {
  let component: BuildCodeBasedBotComponent;
  let fixture: ComponentFixture<BuildCodeBasedBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildCodeBasedBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildCodeBasedBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
