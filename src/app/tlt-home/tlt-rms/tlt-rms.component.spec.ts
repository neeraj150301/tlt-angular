import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TltRmsComponent } from './tlt-rms.component';

describe('TltRmsComponent', () => {
  let component: TltRmsComponent;
  let fixture: ComponentFixture<TltRmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TltRmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TltRmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
