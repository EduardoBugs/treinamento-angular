import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxMaskDirective, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';

import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardProdutoModule } from '../shared/card-produto/card-produto.module';
import { CategoriaModule } from '../shared/categoria/categoria.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProdutosComponent } from './produtos.component';
import { ProdutosRoutingModule } from './produtos.routing.module';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyPipe,
    CategoriaModule,
    NgxDropzoneModule,
    FontAwesomeModule,
    NgxMaskDirective,
    CardProdutoModule
  ],
  exports: [
    ProdutosComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductListComponent,
  ]
})
export class ProdutoModule {}
