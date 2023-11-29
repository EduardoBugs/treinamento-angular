import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'adicionar',
    component: ProductAddComponent
  },  
  {
    path: ':idProduto',
    component: ProductDetailsComponent
  },  
  {
    path: ':idProduto/editar',
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [ 
      RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class ProdutosRoutingModule { }