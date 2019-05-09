import { Injectable } from '@angular/core';
import { IRouterLink } from '../../common/interface/interface';

import {CssRouteLinkList} from './css.metadata';

@Injectable()
export class CssService {
  public title = 'Transform title';

  public navigationList: IRouterLink[] = CssRouteLinkList;
}
