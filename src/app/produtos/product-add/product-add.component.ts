import { ToastrService } from 'ngx-toastr';

import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import { ProdutoForm } from '../../core/produto/produto.interface';
import { ProdutoService } from '../../core/produto/produto.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.scss',
})
export class ProductAddComponent {

  private formBuilder = inject(FormBuilder);
  private produtoService = inject(ProdutoService);
  private toastrService = inject(ToastrService);

  isMissingFile: boolean = true;
  faImage = faImage;

  files: File[] = [];

  productForm: FormGroup<ProdutoForm> = this.formBuilder.nonNullable.group({
    categoria: ['', [Validators.required, Validators.maxLength(20)]],
    name: ['', [Validators.required, Validators.maxLength(20)]],
    description: ['', [Validators.required, Validators.maxLength(150)]],
    price: [0, Validators.required],
  });

  get formControls() {
    return this.productForm.controls;
  }

  adicionarProduto() {
    if (this.productForm.valid && !this.isMissingFile ) {
      const price = Number(this.formControls['price'].value) * 100;

      const newProduto = this.productForm.value;

      this.produtoService
      .addProduct(
        newProduto.name!,
        newProduto.categoria!,
        price.toString(),
        newProduto.description!,
        this.files[0]
      )
      .subscribe({
        error: (e) => {
          console.error(e);
          this.toastrService.error('Erro ao cadastrar o produto');
        },
        complete: () => {
          this.toastrService.success('Produto cadastrado com sucesso');
          this.productForm.reset();
          this.files = [];
        },
      });
    }
  }

  onSelect(event: { addedFiles: any }) {
    if (this.files && this.files.length >= 2) {
      this.onRemove(this.files[0]);
    }
    this.files.push(...event.addedFiles);
    this.isMissingFile = false;    
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
