import { CommonModule, CurrencyPipe } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardProdutoComponent } from '../card-produto/card-produto.component';

@NgModule({
    declarations: [
        CardProdutoComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        CurrencyPipe
    ],
    providers: [
      { provide: LOCALE_ID, useValue: 'pt-BR' },
      { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    ],    
    exports: [CardProdutoComponent]
})
export class CardProdutoModule { }
