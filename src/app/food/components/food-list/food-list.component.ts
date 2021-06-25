import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Food } from '../../models/food.model';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'lq-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  food: Food[];

  selectedFood: Food;
  modalRef: BsModalRef;

  listType = 'table';

  constructor(private foodService: FoodService,
              private toastrService: ToastrService,
              private bsModalService: BsModalService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  openDeleteDialog(template: TemplateRef<any>, food: Food): void {
    this.selectedFood = food;
    this.modalRef = this.bsModalService.show(template);
  }

  deleteFood(): void {
    this.foodService.delete$(this.selectedFood.id).pipe(
      take(1)
    ).subscribe(() => {
      this.getAll();
      this.toastrService.success('Food was successfully deleted.', 'Success');
      this.modalRef.hide();
    }, (response: HttpErrorResponse) => {
      this.toastrService.error(response.message, 'Error', {
        disableTimeOut: true,
        closeButton: true
      });
    });
  }

  private getAll(): void {
    this.foodService.getAll$().pipe(
      take(1)
    ).subscribe((response) => {
      this.food = response;
    });
  }
}
