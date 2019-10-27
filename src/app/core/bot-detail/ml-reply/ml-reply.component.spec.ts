import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlReplyComponent } from './ml-reply.component';

describe('MlReplyComponent', () => {
  let component: MlReplyComponent;
  let fixture: ComponentFixture<MlReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
