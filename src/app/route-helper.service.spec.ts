import { TestBed, inject } from '@angular/core/testing';

import { RouteHelperService } from './route-helper.service';

describe('RouteHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteHelperService]
    });
  });

  it('should be created', inject([RouteHelperService], (service: RouteHelperService) => {
    expect(service).toBeTruthy();
  }));
});
