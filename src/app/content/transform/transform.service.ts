import { Injectable } from '@angular/core';
import { IRouterLink } from '../../common/interface/interface';
import { TransformRouteLinkList } from './tarnsform.metadata';

@Injectable()
export class TransformService {
  public title = 'Transform title';

  public navigationList: IRouterLink[] = TransformRouteLinkList;
}
