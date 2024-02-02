import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsAddItemsComponent } from './rms-add-items.component';

describe('RmsAddItemsComponent', () => {
  let component: RmsAddItemsComponent;
  let fixture: ComponentFixture<RmsAddItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmsAddItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RmsAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
