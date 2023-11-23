import { take } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environments.prod';
import { Categoria } from './categoria.interface';

const API = environment.apiUrl;

@Injectable({ providedIn: 'root'})
export class CategoriaService {
 constructor(private http: HttpClient) {}

 list() {
  return this.http.get<Categoria[]>(API + '/categorias').pipe(take(1));
 }
}