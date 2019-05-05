export interface AdRoute {
  path: string,
  name: string,
  component: string,
  children?: AdRoute[],
}
