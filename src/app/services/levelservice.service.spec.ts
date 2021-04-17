import { TestBed } from '@angular/core/testing';

import { LevelserviceService } from './levelservice.service';

describe('LevelserviceService', () => {
  let service: LevelserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
