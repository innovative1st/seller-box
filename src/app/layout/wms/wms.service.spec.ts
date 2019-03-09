import { TestBed } from '@angular/core/testing';

import { WmsService } from './wms.service';

describe('WmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WmsService = TestBed.get(WmsService);
    expect(service).toBeTruthy();
  });
});
