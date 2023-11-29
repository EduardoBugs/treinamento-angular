import { FormControl } from '@angular/forms';

export interface Produto {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  img?: string;
  category?: string;
  userId?: number;
}

export interface ProdutoForm {
  id?: FormControl<number>;
  name: FormControl<string>;
  description: FormControl<string>;
  price: FormControl<number>;
  img?: FormControl<string>;
  categoria: FormControl<string>;
  userId?: FormControl<number>;
}