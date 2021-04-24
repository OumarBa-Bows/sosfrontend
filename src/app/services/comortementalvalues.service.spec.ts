import { TestBed } from '@angular/core/testing';

import { ComortementalvaluesService } from './comortementalvalues.service';

describe('ComortementalvaluesService', () => {
  let service: ComortementalvaluesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComortementalvaluesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
