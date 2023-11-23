import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FaleConoscoForm } from './fale-conosco.interface';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrl: './fale-conosco.component.scss'
})
export class FaleConoscoComponent implements OnInit {
  formFaleConosco!: FormGroup<FaleConoscoForm>;

  constructor(private formBuild: FormBuilder,  private toastr: ToastrService) {}

  get formControls() {
    return this.formFaleConosco.controls;
  }

  enviarMensagem() {
    if (this.formFaleConosco.valid) {
      this.toastr.success('Mensagem Enviada');
      this.formFaleConosco.reset();
    }
  }

  ngOnInit(): void {
    this.formFaleConosco = this.formBuild.group({
      name: ['', [Validators.required, Validators.maxLength(40), Validators.minLength(5)]],
      mensagem: ['', [Validators.required,  Validators.maxLength(120)]]
    });
  }
}
