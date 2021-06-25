import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDetailsComponent } from './components/food-details/food-details.component';
import { FoodEditComponent } from './components/food-edit/food-edit.component';
import { FoodListComponent } from './components/food-list/food-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: FoodListComponent
  },
  {
    path: 'details/:id',
    component: FoodDetailsComponent
  },
  {
    path: 'create',
    component: FoodEditComponent
  },
  {
    path: 'edit/:id',
    component: FoodEditComponent
  },
  {
    path: '',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule {
}
