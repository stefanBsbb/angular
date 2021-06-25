import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Food } from '../../models/food.model';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'lq-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  id: number;
  food: Food;

  constructor(private foodService: FoodService,
              private toastrService: ToastrService,
              private router: Router,
              private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.foodService.getById$(this.id).pipe(
      take(1)
    ).subscribe((food) => {
      this.food = food;
    }, (response: HttpErrorResponse) => {
      this.toastrService.error(response.message, 'Error');
      this.router.navigate(['food']);
    });
  }

  getCurrentPrice(): number {
    const regularPrice = this.food.price;
    const discount = this.food.discount; // percent

    return (regularPrice * (100 - discount)) / 100;
  }

}
