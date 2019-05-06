import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageComponent } from './page.component';
import { PageService } from './page.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PageComponent],
  exports: [PageComponent],
  providers: [PageService],
})
export class PageModule {}
