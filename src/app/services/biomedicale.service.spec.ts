import { TestBed } from '@angular/core/testing';

import { BiomedicaleService } from './biomedicale.service';

describe('BiomedicaleService', () => {
  let service: BiomedicaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiomedicaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
