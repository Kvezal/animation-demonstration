import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransitionComponent } from './transition.component';
import {TransitionRouteList} from '../css.metadata';

import {TransitionPropertyComponent} from './transition-property/transition-property.component';
import {TransitionDurationComponent} from './transition-duration/transition-duration.component';
import {TransitionTimingFunctionComponent} from './transition-timing-function/transition-timing-function.component';
import {TransitionDelayComponent} from './transition-delay/transition-delay.component';

const routes: Routes = [
  {
    path: '',
    component: TransitionComponent,
    children: [
      {
        path: TransitionRouteList.PROPERTY,
        component: TransitionPropertyComponent,
      },
      {
        path: TransitionRouteList.DURATION,
        component: TransitionDurationComponent,
      },
      {
        path: TransitionRouteList.TIMING_FUNCTION,
        component: TransitionTimingFunctionComponent,
      },
      {
        path: TransitionRouteList.DELAY,
        component: TransitionDelayComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransitionRoutingModule {}
