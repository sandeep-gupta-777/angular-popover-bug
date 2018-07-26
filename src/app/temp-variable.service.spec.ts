import { TestBed, inject } from '@angular/core/testing';

import { TempVariableService } from './temp-variable.service';

describe('TempVariableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempVariableService]
    });
  });

  it('should be created', inject([TempVariableService], (service: TempVariableService) => {
    expect(service).toBeTruthy();
  }));
});
