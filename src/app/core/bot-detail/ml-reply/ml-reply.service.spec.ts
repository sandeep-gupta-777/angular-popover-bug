import { TestBed, inject } from '@angular/core/testing';

import { MlReplyService } from './ml-reply.service';

describe('MlReplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MlReplyService]
    });
  });

  it('should be created', inject([MlReplyService], (service: MlReplyService) => {
    expect(service).toBeTruthy();
  }));
});
