import { TestBed, inject } from '@angular/core/testing';

import { ConsoleServiceService } from './console-service.service';

describe('ConsoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsoleServiceService]
    });
  });

  it('should be created', inject([ConsoleServiceService], (service: ConsoleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
