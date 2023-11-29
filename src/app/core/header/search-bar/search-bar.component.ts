import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  filtroPesquisa: string | undefined;

  constructor(private searchBarService: SearchBarService, private router: Router) { }

  onSearch() {
    this.searchBarService.setFiltro(this.filtroPesquisa);
    //this.router.navigate(['produto']);
  }
}
