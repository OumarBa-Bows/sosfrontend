import { TestBed } from '@angular/core/testing';

import { BiomedicalevaluesService } from './biomedicalevalues.service';

describe('BiomedicalevaluesService', () => {
  let service: BiomedicalevaluesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiomedicalevaluesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
