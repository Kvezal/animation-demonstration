import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SvgAnimationComponent } from './svg-animation.component';

const routes: Routes = [
  {
    path: '',
    component: SvgAnimationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SvgAnimationRoutingModule {}
