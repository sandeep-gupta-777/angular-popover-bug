import { TestBed, async, inject } from '@angular/core/testing';

import { IsDevModeGuard } from './is-dev-mode.guard';

describe('IsDevModeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsDevModeGuard]
    });
  });

  it('should ...', inject([IsDevModeGuard], (guard: IsDevModeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
