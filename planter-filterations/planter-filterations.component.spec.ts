import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanterFilterationsComponent } from './planter-filterations.component';

describe('PlanterFilterationsComponent', () => {
  let component: PlanterFilterationsComponent;
  let fixture: ComponentFixture<PlanterFilterationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanterFilterationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanterFilterationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
