import { TestBed } from '@angular/core/testing';

import { VirtualInventoryService } from './virtual-inventory.service';

describe('VirtualInventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VirtualInventoryService = TestBed.get(VirtualInventoryService);
    expect(service).toBeTruthy();
  });
});
