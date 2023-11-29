
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardProdutoModule } from '../card-produto/card-produto.module';
import { CategoriaComponent } from './categoria.component';

@NgModule({
    declarations: [
        CategoriaComponent
    ],
    imports: [
        CommonModule,
        CardProdutoModule
    ],
    exports: [CategoriaComponent]
})
export class CategoriaModule { }
