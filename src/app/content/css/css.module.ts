import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CssRoutingModule } from './css-routing.module';
import { PageModule } from '../../common/page';

import { CssComponent } from './css.component';
import {CssDescriptionComponent} from './css-description/css-description.component';
import {CssExampleComponent} from './css-example/css-example.component';


@NgModule({
  imports: [
    CommonModule,
    CssRoutingModule,
    PageModule,
  ],
  declarations: [
    CssComponent,
    CssDescriptionComponent,
    CssExampleComponent,
  ],
})
export class CssModule {}
