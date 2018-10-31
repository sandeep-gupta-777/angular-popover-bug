import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Analysis2PlatformComponent } from './analysis2-platform.component';

describe('Analysis2PlatformComponent', () => {
  let component: Analysis2PlatformComponent;
  let fixture: ComponentFixture<Analysis2PlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Analysis2PlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Analysis2PlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
