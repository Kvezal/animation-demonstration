import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './page.component';
import { PageAsideComponent } from './page-aside/page-aside.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PageComponent,
    PageAsideComponent,
    PageTitleComponent,
    PageContentComponent,
  ],
  exports: [
    PageComponent,
    PageAsideComponent,
    PageTitleComponent,
    PageContentComponent,
  ],
})
export class PageModule {}
