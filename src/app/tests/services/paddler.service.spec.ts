import { TestBed, inject } from '@angular/core/testing';

import { PaddlerService } from '../../services/paddler.service';

describe('PaddlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaddlerService]
    });
  });

  it('should be created', inject([PaddlerService], (service: PaddlerService) => {
    expect(service).toBeTruthy();
  }));
});
