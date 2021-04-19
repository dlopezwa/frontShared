import { TestBed } from '@angular/core/testing';

import { SharedLibExampleService } from './shared-lib-example.service';

describe('SharedLibExampleService', () => {
  let service: SharedLibExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedLibExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
