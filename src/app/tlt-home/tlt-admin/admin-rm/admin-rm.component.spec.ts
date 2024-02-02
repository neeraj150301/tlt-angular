import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRmComponent } from './admin-rm.component';

describe('AdminRmComponent', () => {
  let component: AdminRmComponent;
  let fixture: ComponentFixture<AdminRmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
