import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CssRoutingModule } from './css-routing.module';
import { CssComponent } from './css.component';
import { PageModule } from '../../common/page';


@NgModule({
  imports: [
    CommonModule,
    CssRoutingModule,
    PageModule,
  ],
  declarations: [CssComponent],
})
export class CssModule {}
