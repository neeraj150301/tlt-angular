import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TltHomeComponent } from './tlt-home.component';

describe('TltHomeComponent', () => {
  let component: TltHomeComponent;
  let fixture: ComponentFixture<TltHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TltHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TltHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
