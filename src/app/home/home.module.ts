import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  exports: [HomeComponent]
})
export class HomeModule {}