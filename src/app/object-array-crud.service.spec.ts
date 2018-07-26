import { TestBed, inject } from '@angular/core/testing';

import { ObjectArrayCrudService } from './object-array-crud.service';

describe('ObjectArrayCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectArrayCrudService]
    });
  });

  it('should be created', inject([ObjectArrayCrudService], (service: ObjectArrayCrudService) => {
    expect(service).toBeTruthy();
  }));
});
