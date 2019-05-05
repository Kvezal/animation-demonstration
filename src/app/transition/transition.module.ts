import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TransitionComponent } from './transition.component';
import { TransitionRoutingModule } from './transition-routing.module';


@NgModule({
  imports: [CommonModule, TransitionRoutingModule],
  declarations: [TransitionComponent],
})
export class TransitionModule {}
