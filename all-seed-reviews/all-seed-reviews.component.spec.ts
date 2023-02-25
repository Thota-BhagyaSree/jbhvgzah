import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSeedReviewsComponent } from './all-seed-reviews.component';

describe('AllSeedReviewsComponent', () => {
  let component: AllSeedReviewsComponent;
  let fixture: ComponentFixture<AllSeedReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSeedReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSeedReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
