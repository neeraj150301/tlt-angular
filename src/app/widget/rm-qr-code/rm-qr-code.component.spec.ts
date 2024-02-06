import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmQrCodeComponent } from './rm-qr-code.component';

describe('RmQrCodeComponent', () => {
  let component: RmQrCodeComponent;
  let fixture: ComponentFixture<RmQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmQrCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RmQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
