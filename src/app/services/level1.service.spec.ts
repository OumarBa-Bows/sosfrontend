import { TestBed } from '@angular/core/testing';

import { Level1Service } from './level1.service';

describe('Level1Service', () => {
  let service: Level1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Level1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
