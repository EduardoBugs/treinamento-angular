import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
