import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmanFormComponent } from './postman-form.component';

describe('PostmanFormComponent', () => {
  let component: PostmanFormComponent;
  let fixture: ComponentFixture<PostmanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostmanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostmanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
