import { TestBed } from '@angular/core/testing';

import { RestapidogService } from './restapidog.service';

describe('RestapidogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestapidogService = TestBed.get(RestapidogService);
    expect(service).toBeTruthy();
  });
});
