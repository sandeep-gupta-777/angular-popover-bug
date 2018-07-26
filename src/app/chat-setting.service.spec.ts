import { TestBed, inject } from '@angular/core/testing';

import { ChartSettingService } from './chart-setting.service';

describe('ChartSettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartSettingService]
    });
  });

  it('should be created', inject([ChartSettingService], (service: ChartSettingService) => {
    expect(service).toBeTruthy();
  }));
});
