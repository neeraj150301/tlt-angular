import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileSmallComponent } from './user-profile-small.component';

describe('UserProfileSmallComponent', () => {
  let component: UserProfileSmallComponent;
  let fixture: ComponentFixture<UserProfileSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
