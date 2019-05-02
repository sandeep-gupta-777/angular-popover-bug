import { TestBed, inject } from '@angular/core/testing';

import { AuthGaurdService } from './auth-gaurd.service';

describe('ModuleGaurdLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGaurdService]
    });
  });

  it('should be created', inject([AuthGaurdService], (service: AuthGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
