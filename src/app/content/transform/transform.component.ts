import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageService } from '../../common/page/page.service';
import { TransformService } from './transform.service';

@Component({
  selector: 'ad-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./scss/transform/_ad-transform.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PageService,
      useClass: TransformService,
    },
  ],
})
export class TransformComponent {

}
