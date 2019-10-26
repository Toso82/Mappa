import { TestBed } from '@angular/core/testing';

import { WMCapabilitiesService } from './wmcapabilities.service';

describe('WMCapabilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WMCapabilitiesService = TestBed.get(WMCapabilitiesService);
    expect(service).toBeTruthy();
  });
});
