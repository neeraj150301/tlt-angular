import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TltAdminComponent } from './tlt-admin.component';

describe('TltAdminComponent', () => {
  let component: TltAdminComponent;
  let fixture: ComponentFixture<TltAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TltAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TltAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
