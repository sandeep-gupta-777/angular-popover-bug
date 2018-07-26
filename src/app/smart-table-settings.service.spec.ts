import { TestBed, inject } from '@angular/core/testing';

import { SmartTableSettingsService } from './smart-table-settings.service';

describe('SmartTableSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmartTableSettingsService]
    });
  });

  it('should be created', inject([SmartTableSettingsService], (service: SmartTableSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
