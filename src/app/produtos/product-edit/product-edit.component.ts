import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable, switchMap, tap } from 'rxjs';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Produto } from '../../core/produto/produto.interface';
import { ProdutoService } from '../../core/produto/produto.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent {
  productForm!: FormGroup;
  product$: Observable<Produto> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  get formControls() {
    return this.productForm.controls;
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      categoria: [null, [Validators.required, Validators.maxLength(20)]],
      name: [null, [Validators.required, Validators.maxLength(20)]],
      description: [null, [Validators.required, Validators.maxLength(150)]],
      price: [null, Validators.required],
    });

    this.product$ = this.route.params.pipe(
      map((params) => Number(params['idProduto'])),
      filter((idProduto) => !Number.isNaN(idProduto)),
      switchMap((idProduto: number) => {
        return this.produtoService.findById(idProduto).pipe(
          tap((produto) => {
            const price: number = produto.price ? produto.price / 100 : 0;
            this.formControls['id'].setValue(produto.id);
            this.formControls['name'].setValue(produto.name);
            this.formControls['categoria'].setValue(produto.category);
            this.formControls['description'].setValue(produto.description);
            this.formControls['price'].setValue(price);
          })
        );
      })
    );
  }

  atualizarProduto() {
    if (this.productForm.valid) {
      const price = Number(this.formControls['price'].value) * 100;
      
      this.produtoService
        .updateProduct(
          this.formControls['id'].value,
          this.formControls['name'].value,
          this.formControls['categoria'].value,
          price,
          this.formControls['description'].value
        )
        .subscribe({
          error: (e) => {
            console.error(e);
            this.toastr.error('Erro ao atualizar o produto');
          },
          complete: () => {
            this.toastr.success('Produto atualizado com sucesso');
          },
        });
      
    } else {
      this.productForm.markAllAsTouched();
    }
  }

}
