import { TestBed } from '@angular/core/testing';

import { ServeService } from './serve.service';

describe('ServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServeService = TestBed.get(ServeService);
    expect(service).toBeTruthy();
  });
});
