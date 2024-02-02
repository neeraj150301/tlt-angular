import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminYardComponent } from './admin-yard.component';

describe('AdminYardComponent', () => {
  let component: AdminYardComponent;
  let fixture: ComponentFixture<AdminYardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminYardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminYardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
