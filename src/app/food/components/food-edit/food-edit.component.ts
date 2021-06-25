import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Category } from '../../../categories/models/category.model';
import { CategoriesService } from '../../../categories/services/categories.service';
import { Food } from '../../models/food.model';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'lq-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  id: number;
  food: Food;

  categories: Category[];

  formGroup: FormGroup;

  constructor(private foodService: FoodService,
              private categoriesService: CategoriesService,
              private toastrService: ToastrService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.id) {
      this.foodService.getById$(this.id).pipe(
        take(1)
      ).subscribe((response) => {
        this.food = response;
        this.buildForm(response);
      });
    } else {
      this.buildForm();
    }

    this.categoriesService.getAll$().pipe(
      take(1)
    ).subscribe((response) => {
      this.categories = response;
    });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();

      return;
    }

    const body: Food = {
      ...this.food,
      ...this.formGroup.value
    };

    delete body.category;

    this.foodService.save$(body).pipe(
      take(1)
    ).subscribe(() => {
      this.toastrService.success('Food was successfully saved.', 'Success');
      this.router.navigate(['food']);
    });
  }

  private buildForm(food?: Food): void {
    if (!food) {
      food = new Food();
    }

    let expiredDate;
    if (food.expiredDate) {
      expiredDate = new Date(food.expiredDate);
    } else {
      expiredDate = new Date();
    }

    this.formGroup = this.fb.group({
      name: [food.name, [Validators.required, Validators.minLength(3)]],
      description: [food.description, [Validators.minLength(3), Validators.maxLength(1000)]],
      categoryId: [food.categoryId, Validators.required],
      type: [food.type, Validators.required],
      price: [food.price, [Validators.required, Validators.min(0)]],
      discount: [food.discount, [Validators.min(0), Validators.max(100)]],
      posterImgUrl: food.posterImgUrl,
      isCertificateIncluded: food.isCertificateIncluded,
      expiredDate: [food.expiredDate, Validators.required]
    });
  }

}
