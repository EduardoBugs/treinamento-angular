import { map, Observable, Subscription } from 'rxjs';

import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchBarService } from '../../core/header/search-bar/search-bar.service';
import { Produto } from '../../core/produto/produto.interface';
import { ProdutoService } from '../../core/produto/produto.service';
import { UserService } from '../../core/user/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, AfterViewInit, OnDestroy {
  produtos$: Observable<Produto[]> | undefined;

  private filtro$: Subscription | undefined;

  constructor(
    private produtoService: ProdutoService,
    private searchBarService: SearchBarService,
    private router: Router,
    private userService: UserService
  ) {}

  get isLogged() {
    return this.userService.isLogged();
  }

  ngOnInit(): void {
    this.produtos$ = this.produtoService.list();
  }

  ngAfterViewInit(): void {
    this.filtro$ = this.searchBarService.getFiltro().subscribe((searchBar) => {
      console.log('filtro: '+ searchBar.filtro)
      
      if (searchBar.filtro) {
        const filtro = searchBar.filtro;
        
        this.produtos$ = this.produtoService
          .list()
          .pipe(
            map((produtos) =>
              produtos.filter((x) =>
                x.name
                  ?.toUpperCase()
                  .includes(filtro.toUpperCase())
              )
            )
          );
      } else {
        this.produtos$ = this.produtoService.list();
      }
    });
  }

  adicionarProduto() {
    this.router.navigate(['products', 'add']);
  }

  ngOnDestroy(): void {
    this.filtro$?.unsubscribe();
  }
}
