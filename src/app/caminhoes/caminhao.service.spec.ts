import { TestBed, inject } from '@angular/core/testing';

import { CaminhaoService } from './caminhao.service';

describe('CaminhaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaminhaoService]
    });
  });

  it('should be created', inject([CaminhaoService], (service: CaminhaoService) => {
    expect(service).toBeTruthy();
  }));
});
