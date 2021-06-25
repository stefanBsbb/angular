import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CategoriesService } from '../../../categories/services/categories.service';

@Component({
  selector: 'lq-food-by-categories-report',
  templateUrl: './food-by-categories-report.component.html',
  styleUrls: ['./food-by-categories-report.component.scss']
})
export class FoodByCategoriesReportComponent implements OnInit {

  data = [];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#112A32']
  };

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categoriesService.getAll$().pipe(
      take(1)
    ).subscribe((categories) => {
      const result = [];
      for (const category of categories) {
        result.push({
          name: category.name,
          value: category.foods.length
        })
      }

      this.data = result;
    })
  }

}
