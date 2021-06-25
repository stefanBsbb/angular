import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodByCategoriesReportComponent } from './food-by-categories-report.component';

describe('FoodByCategoriesReportComponent', () => {
  let component: FoodByCategoriesReportComponent;
  let fixture: ComponentFixture<FoodByCategoriesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodByCategoriesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodByCategoriesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
