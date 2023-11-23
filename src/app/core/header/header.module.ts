import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuModule } from '../../shared/menu/menu.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}