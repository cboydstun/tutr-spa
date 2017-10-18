import { TestBed, inject } from '@angular/core/testing';

import { WebrtcSignalingService } from './webrtc-signaling.service';

describe('WebrtcSignalingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebrtcSignalingService]
    });
  });

  it('should be created', inject([WebrtcSignalingService], (service: WebrtcSignalingService) => {
    expect(service).toBeTruthy();
  }));
});
