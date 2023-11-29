import { first, take } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environments.prod';
import { Produto } from './produto.interface';

const API = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Produto[]>(API + '/produtos').pipe(take(1));
  }

  listByCategory(categoria: string) {
    const params = new HttpParams().append('limit', '6');
    return this.http.get<Produto[]>(API + '/categorias/' + categoria, {
      params,
    });
  }

  findById(idProduto: number) {
    return this.http.get<Produto>(API + '/produtos/' + idProduto);
  }

  addProduct(
    name: string,
    category: string,
    price: string,
    description: string,
    file: File
  ) {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);

    formData.append('imageFile', file);

    return this.http.post(API + '/produtos/upload', formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  updateProduct(
    idProduto: number,
    name: string,
    category: string,
    price: number,
    description: string
  ) {
    return this.http.post(API + '/produtos/' + idProduto, {
      name,
      category,
      price,
      description,
    });
  }

  excluirProduto(idProduto: number) {
    return this.http.delete<any>(API + '/produtos/' + idProduto).pipe(first());
  }
}
