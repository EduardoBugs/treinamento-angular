import { filter, map, Observable, switchMap } from 'rxjs';

import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Produto } from '../../core/produto/produto.interface';
import { ProdutoService } from '../../core/produto/produto.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  produto$: Observable<Produto> | undefined;

  produtoService = inject(ProdutoService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.produto$ = this.route.params.pipe(
      map((params) => Number(params['idProduto'])),
      filter((idProduto) => !Number.isNaN(idProduto)),
      switchMap((idProduto) => this.produtoService.findById(idProduto))
    );
  }

  precoProduto(price: number | undefined): number {
    if (price) {
      if (!Number.isNaN(price)) {
        return Number(price) / 100;
      }
    }

    return 0;
  }
}
