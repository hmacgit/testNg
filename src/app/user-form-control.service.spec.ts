import { TestBed } from '@angular/core/testing';

import { UserFormControlService } from './user-form-control.service';

describe('UserFormControlService', () => {
  let service: UserFormControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFormControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
