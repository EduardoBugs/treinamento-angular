import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { SearchBarModule } from './search-bar/search-bar.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchBarModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}