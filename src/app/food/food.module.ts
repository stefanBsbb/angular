import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { FoodEditComponent } from './components/food-edit/food-edit.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodRoutingModule } from './food-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    ButtonsModule.forRoot(),
    ModalModule.forChild(),
    SharedModule,
    FoodRoutingModule
  ],
  declarations: [
    FoodListComponent,
    FoodDetailsComponent,
    FoodEditComponent
  ],
  exports: [
    FoodListComponent
  ]
})
export class FoodModule {
}
