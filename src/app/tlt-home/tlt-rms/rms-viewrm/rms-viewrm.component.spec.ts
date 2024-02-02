import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsViewrmComponent } from './rms-viewrm.component';

describe('RmsViewrmComponent', () => {
  let component: RmsViewrmComponent;
  let fixture: ComponentFixture<RmsViewrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmsViewrmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RmsViewrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
