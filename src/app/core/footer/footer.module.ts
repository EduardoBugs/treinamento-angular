import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent,
    FooterLinksComponent,
    FaleConoscoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  exports: [FooterComponent]
})
export class FooterModule {}