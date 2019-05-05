import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CssAnimationComponent } from './css-animation.component';
import { CssAnimationRoutingModule } from './css-animation-routing.module';

@NgModule({
  imports: [CommonModule, CssAnimationRoutingModule],
  declarations: [CssAnimationComponent],
})
export class CssAnimationModule {}
