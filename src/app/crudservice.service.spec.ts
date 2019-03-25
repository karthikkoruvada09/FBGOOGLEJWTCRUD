import { TestBed } from '@angular/core/testing';

import { CrudserviceService } from './crudservice.service';

describe('CrudserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudserviceService = TestBed.get(CrudserviceService);
    expect(service).toBeTruthy();
  });
});
