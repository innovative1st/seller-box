import { TestBed } from '@angular/core/testing';

import { OrderProcessingService } from './order-processing.service';

describe('OrderProcessingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderProcessingService = TestBed.get(OrderProcessingService);
    expect(service).toBeTruthy();
  });
});
