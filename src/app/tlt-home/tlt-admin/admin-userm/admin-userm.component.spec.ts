import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsermComponent } from './admin-userm.component';

describe('AdminUsermComponent', () => {
  let component: AdminUsermComponent;
  let fixture: ComponentFixture<AdminUsermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUsermComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUsermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
