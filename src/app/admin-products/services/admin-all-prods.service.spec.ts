import { TestBed } from '@angular/core/testing';

import { AdminAllProdsService } from './admin-all-prods.service';

describe('AdminAllProdsService', () => {
  let service: AdminAllProdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAllProdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
