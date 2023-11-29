import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Produto } from '../../core/produto/produto.interface';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.scss'
})
export class CardProdutoComponent {
  @Input() produto!: Produto;
  @Output() excluir: EventEmitter<Produto> = new EventEmitter();

  constructor(private router: Router) {}

  faPen = faPen;
  faTrash = faTrash;

  get precoProduto() {
    if (!Number.isNaN(this.produto.price)) {
      return this.produto.price ? this.produto.price / 100 : 0;
    } else {
      return 0;
    }
  }

  editarProduto() {

  }

  excluirProduto() {
    this.excluir.emit(this.produto);
  }

  detalhesProduto() {
    this.router.navigate(['produto', this.produto.id]);
  }

}
