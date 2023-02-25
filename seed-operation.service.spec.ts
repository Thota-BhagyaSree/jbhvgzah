import { TestBed } from '@angular/core/testing';

import { SeedOperationService } from './seed-operation.service';

describe('SeedOperationService', () => {
  let service: SeedOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeedOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
