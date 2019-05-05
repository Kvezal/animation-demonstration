import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JsAnimationComponent } from './js-animation.component';

const routes: Routes = [
  {
    path: '',
    component: JsAnimationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsAnimationRoutingModule {}
