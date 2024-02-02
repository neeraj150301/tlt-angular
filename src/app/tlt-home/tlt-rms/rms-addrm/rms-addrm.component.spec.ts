import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsAddrmComponent } from './rms-addrm.component';

describe('RmsAddrmComponent', () => {
  let component: RmsAddrmComponent;
  let fixture: ComponentFixture<RmsAddrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmsAddrmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RmsAddrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
