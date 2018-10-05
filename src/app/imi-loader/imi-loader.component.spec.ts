import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImiLoaderComponent } from './imi-loader.component';

describe('ImiLoaderComponent', () => {
  let component: ImiLoaderComponent;
  let fixture: ComponentFixture<ImiLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImiLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImiLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
