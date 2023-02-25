import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedReviewComponent } from './seed-review.component';

describe('SeedReviewComponent', () => {
  let component: SeedReviewComponent;
  let fixture: ComponentFixture<SeedReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
