import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlantsComponent } from './all-plants.component';

describe('AllPlantsComponent', () => {
  let component: AllPlantsComponent;
  let fixture: ComponentFixture<AllPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
