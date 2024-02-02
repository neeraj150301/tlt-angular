import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsViewItemsComponent } from './rms-view-items.component';

describe('RmsViewItemsComponent', () => {
  let component: RmsViewItemsComponent;
  let fixture: ComponentFixture<RmsViewItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmsViewItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RmsViewItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
