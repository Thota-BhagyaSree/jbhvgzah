import { TestBed } from '@angular/core/testing';

import { PlanterOperationService } from './planter-operation.service';

describe('PlanterOperationService', () => {
  let service: PlanterOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanterOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
