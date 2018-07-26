
export class NavigateAction {
  static readonly type = '[router] navigate';
  constructor(public payload:{route:string}){}
}
