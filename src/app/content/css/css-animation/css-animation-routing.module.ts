import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CssAnimationComponent } from './css-animation.component';

const routes: Routes = [
  {
    path: '',
    component: CssAnimationComponent,
    children: [

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssAnimationRoutingModule {}
