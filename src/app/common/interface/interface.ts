export interface IRouterLink {
  path: string[];
  name: string;
  isShowChildren?: boolean;
  children?: IRouterLink[];
}
