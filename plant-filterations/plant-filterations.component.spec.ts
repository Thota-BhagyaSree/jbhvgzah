import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantFilterationsComponent } from './plant-filterations.component';

describe('PlantFilterationsComponent', () => {
  let component: PlantFilterationsComponent;
  let fixture: ComponentFixture<PlantFilterationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantFilterationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantFilterationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
