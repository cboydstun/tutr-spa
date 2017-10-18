import { TestBed, inject } from '@angular/core/testing';

import { IceService } from './ice.service';

describe('IceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IceService]
    });
  });

  it('should be created', inject([IceService], (service: IceService) => {
    expect(service).toBeTruthy();
  }));
});
