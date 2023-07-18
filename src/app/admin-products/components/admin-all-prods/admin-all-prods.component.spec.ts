import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllProdsComponent } from './admin-all-prods.component';

describe('AdminAllProdsComponent', () => {
  let component: AdminAllProdsComponent;
  let fixture: ComponentFixture<AdminAllProdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAllProdsComponent]
    });
    fixture = TestBed.createComponent(AdminAllProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
