import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsQrComponent } from './rms-qr.component';

describe('RmsQrComponent', () => {
  let component: RmsQrComponent;
  let fixture: ComponentFixture<RmsQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmsQrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RmsQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
