import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsIssuesComponent } from './rms-issues.component';

describe('RmsIssuesComponent', () => {
  let component: RmsIssuesComponent;
  let fixture: ComponentFixture<RmsIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmsIssuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RmsIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
