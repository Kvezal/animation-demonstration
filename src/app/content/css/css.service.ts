import { Injectable } from '@angular/core';
import { IRouterLink } from '../../common/interface/interface';

import { TransformRouteLinkList } from './transform/tarnsform.metadata';

@Injectable()
export class CssService {
  public title = 'Transform title';

  public navigationList: IRouterLink[] = TransformRouteLinkList;
}
