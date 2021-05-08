import { TestBed } from '@angular/core/testing';

import { InfInterventionService } from './inf-intervention.service';

describe('InfInterventionService', () => {
  let service: InfInterventionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfInterventionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
