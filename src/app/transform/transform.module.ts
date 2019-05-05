import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TransformRoutingModule } from './transform-routing.module';
import { TransformComponent } from './transform.component';
import { PageModule } from '../common/page';

@NgModule({
  imports: [
    CommonModule,
    TransformRoutingModule,
    PageModule,
  ],
  declarations: [TransformComponent],
})
export class TransformModule {}
