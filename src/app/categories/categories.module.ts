import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryEditDialogComponent } from './components/category-edit-dialog/category-edit-dialog.component';
import { CategoryDeleteDialogComponent } from './components/category-delete-dialog/category-delete-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forChild(),
    SharedModule,
    CategoriesRoutingModule
  ],
  declarations: [
    CategoriesListComponent,
    CategoryEditDialogComponent,
    CategoryDeleteDialogComponent
  ]
})
export class CategoriesModule {
}
