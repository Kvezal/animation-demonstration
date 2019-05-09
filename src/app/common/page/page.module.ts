import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageComponent } from './page.component';
import { PageService } from './page.service';
import {PageNavComponent} from './page-nav/page-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [PageComponent, PageNavComponent],
  exports: [PageComponent],
  providers: [PageService],
})
export class PageModule {}
