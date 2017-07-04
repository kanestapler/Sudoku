import { TestBed, inject } from '@angular/core/testing';

import { BoardValidatorService } from './board-validator.service';

describe('BoardValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardValidatorService]
    });
  });

  it('should be created', inject([BoardValidatorService], (service: BoardValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
