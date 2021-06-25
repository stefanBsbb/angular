import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatedFoodReportComponent } from './certificated-food-report.component';

describe('CertificatedFoodReportComponent', () => {
  let component: CertificatedFoodReportComponent;
  let fixture: ComponentFixture<CertificatedFoodReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatedFoodReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatedFoodReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
