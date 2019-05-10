import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TransitionComponent } from './transition.component';
import { TransitionRoutingModule } from './transition-routing.module';

import {TransitionPropertyComponent} from './transition-property/transition-property.component';
import {TransitionDurationComponent} from './transition-duration/transition-duration.component';
import {TransitionDelayComponent} from './transition-delay/transition-delay.component';
import {TransitionTimingFunctionComponent} from './transition-timing-function/transition-timing-function.component';


@NgModule({
  imports: [CommonModule, TransitionRoutingModule],
  declarations: [
    TransitionComponent,
    TransitionPropertyComponent,
    TransitionDurationComponent,
    TransitionTimingFunctionComponent,
    TransitionDelayComponent,
  ],
})
export class TransitionModule {}
