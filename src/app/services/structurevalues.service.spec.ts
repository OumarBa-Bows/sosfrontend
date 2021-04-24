import { TestBed } from '@angular/core/testing';

import { StructurevaluesService } from './structurevalues.service';

describe('StructurevaluesService', () => {
  let service: StructurevaluesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StructurevaluesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
