import { TestBed } from '@angular/core/testing';

import { ImageapiService } from './imageapi.service';

describe('ImageapiService', () => {
  let service: ImageapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
