import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingUnavailableComponent } from './testing-unavailable.component';

describe('TestingUnavailableComponent', () => {
  let component: TestingUnavailableComponent;
  let fixture: ComponentFixture<TestingUnavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingUnavailableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestingUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
