import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantersComponent } from './add-planters.component';

describe('AddPlantersComponent', () => {
  let component: AddPlantersComponent;
  let fixture: ComponentFixture<AddPlantersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlantersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlantersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
