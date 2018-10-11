import { TestBed, inject } from '@angular/core/testing';

import { StoreVariableService } from './store--variable.service';

describe('StoreVariableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreVariableService]
    });
  });

  it('should be created', inject([StoreVariableService], (service: StoreVariableService) => {
    expect(service).toBeTruthy();
  }));
});
