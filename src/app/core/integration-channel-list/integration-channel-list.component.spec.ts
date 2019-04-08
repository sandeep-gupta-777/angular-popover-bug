import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationChannelListComponent } from './integration-channel-list.component';

describe('IntegrationChannelListComponent', () => {
  let component: IntegrationChannelListComponent;
  let fixture: ComponentFixture<IntegrationChannelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegrationChannelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationChannelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
