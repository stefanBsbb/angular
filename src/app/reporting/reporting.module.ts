import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportingRoutingModule } from './reporting-routing.module';
import { CertificatedFoodReportComponent } from './components/certificated-food-report/certificated-food-report.component';
import { FoodByCategoriesReportComponent } from './components/food-by-categories-report/food-by-categories-report.component';

@NgModule({
  declarations: [ReportsComponent, CertificatedFoodReportComponent, FoodByCategoriesReportComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    ReportingRoutingModule
  ]
})
export class ReportingModule {
}
