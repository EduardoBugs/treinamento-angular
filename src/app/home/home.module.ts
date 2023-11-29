import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriaModule } from '../shared/categoria/categoria.module';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    CategoriaModule,
    ToastrModule.forRoot()
  ],
  exports: [HomeComponent]
})
export class HomeModule {}