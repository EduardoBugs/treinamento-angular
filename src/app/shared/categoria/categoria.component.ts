import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';

import { Component, inject, Input, OnInit } from '@angular/core';

import { Produto } from '../../core/produto/produto.interface';
import { ProdutoService } from '../../core/produto/produto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit {
  @Input() nomeCategoria: string | undefined;
  @Input() title: string = '';
  @Input() linkVerTudo: boolean = true;

  produtoService = inject(ProdutoService);
  toasterService = inject(ToastrService);
  
  produto$: Observable<Produto[]> | null = null;

  ngOnInit() {
    this.consultaProdutos();
  }

  consultaProdutos() {
    if (this.nomeCategoria) {
      this.produto$ = this.produtoService.listByCategory(this.nomeCategoria);
    }
  }

  onExcluir(produto: Produto) {
    this.produtoService.excluirProduto(produto.id!).subscribe({
      next: (() => {
        this.toasterService.success('Produto Excluido com Sucesso.');
        this.consultaProdutos();
      }),
      error: (() => {
        this.toasterService.error('Erro ao excluir produto.');
      })
    });
  }
  
}
