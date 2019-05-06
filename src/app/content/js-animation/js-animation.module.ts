import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JsAnimationComponent } from './js-animation.component';
import { JsAnimationRoutingModule } from './js-animation-routing.module';

@NgModule({
  imports: [CommonModule, JsAnimationRoutingModule],
  declarations: [JsAnimationComponent],
})
export class JsAnimationModule {}
