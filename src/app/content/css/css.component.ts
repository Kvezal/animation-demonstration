import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageService } from '../../common/page/page.service';
import { CssService } from './css.service';


@Component({
  selector: 'ad-transition',
  templateUrl: './css.component.html',
  styleUrls: ['./scss/css/_ad-css.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PageService,
      useClass: CssService,
    },
  ],
})
export class CssComponent {

}
