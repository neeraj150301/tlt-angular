import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsItemsComponent } from './rms-items.component';

describe('RmsItemsComponent', () => {
  let component: RmsItemsComponent;
  let fixture: ComponentFixture<RmsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmsItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RmsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
