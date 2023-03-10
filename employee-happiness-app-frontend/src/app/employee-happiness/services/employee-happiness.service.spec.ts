import { TestBed } from '@angular/core/testing';

import { EmployeeHappinessService } from './employee-happiness.service';

describe('EmployeeHappinessService', () => {
  let service: EmployeeHappinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeHappinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
