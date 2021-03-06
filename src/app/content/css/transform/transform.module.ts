import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TransformRoutingModule } from './transform-routing.module';
import { TransformComponent } from './transform.component';
import { TranslateComponent } from './translate/translate.component';
import { ScaleComponent } from './scale/scale.component';
import { RotateComponent } from './rotate/rotate.component';
import { SkewComponent } from './skew/skew.component';

@NgModule({
  imports: [
    CommonModule,
    TransformRoutingModule,
  ],
  declarations: [
    TransformComponent,
    TranslateComponent,
    ScaleComponent,
    RotateComponent,
    SkewComponent,
  ],
})
export class TransformModule {}
