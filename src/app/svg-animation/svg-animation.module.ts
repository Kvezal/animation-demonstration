import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SvgAnimationComponent } from './svg-animation.component';
import { SvgAnimationRoutingModule } from './svg-animation-routing.module';

@NgModule({
  imports: [CommonModule, SvgAnimationRoutingModule],
  declarations: [SvgAnimationComponent],
})
export class SvgAnimationModule {}
