import { TestBed } from '@angular/core/testing';

import { ComportementaleService } from './comportementale.service';

describe('ComportementaleService', () => {
  let service: ComportementaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComportementaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
