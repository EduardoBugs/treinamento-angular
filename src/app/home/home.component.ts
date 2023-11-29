import { ToastrService } from 'ngx-toastr';
import { map, Subscription, tap } from 'rxjs';

import { Component, inject } from '@angular/core';

import { Categoria } from '../core/categoria/categoria.interface';
import { CategoriaService } from '../core/categoria/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  categoriaService = inject(CategoriaService);
  toastrService = inject(ToastrService);

  categorias$ = this.categoriaService.list();

  get bannerTitle() {
    return 'Dezembro Promocional';
  }

  get bannerDescription() {
    return 'Produtos selecionados com 33% de desconto';
  }

  get buttonText() {
    return 'Ver consoles';
  }
}
