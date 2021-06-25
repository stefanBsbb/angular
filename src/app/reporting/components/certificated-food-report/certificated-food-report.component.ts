import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { FoodService } from '../../../food/services/food.service';

@Component({
  selector: 'lq-certificated-food-report',
  templateUrl: './certificated-food-report.component.html',
  styleUrls: ['./certificated-food-report.component.scss']
})
export class CertificatedFoodReportComponent implements OnInit {

  data = [];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  gradient = false;
  isDoughnut = true;

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.foodService.getAll$().pipe(
      take(1)
    ).subscribe((foods) => {
      let certified = 0;
      let notCertified = 0;

      for (const food of foods) {
        if (food.isCertificateIncluded) {
          certified++;
        } else {
          notCertified++;
        }
      }

      this.data = [
        {
          name: 'Certified',
          value: certified
        },
        {
          name: 'Not certified',
          value: notCertified
        }
      ];
    });
  }
}
