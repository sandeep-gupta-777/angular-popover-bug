export enum EBotVersionTabs {
  df_template = 'df_template',
  df_rules = 'df_rules',
  generation_rules = 'generation_rules',
  generation_templates = 'generation_templates',
  workflow = 'workflow'
}

export interface IVersionDiff {
  df_template?: boolean,
  df_rules?: boolean,
  generation_rules?: boolean,
  generation_templates?: boolean,
  workflow?: boolean,
}

export interface IVersionDiffMap {
  [index: string]: IVersionDiff
}
export interface IVersionErrorsMap {
  [index: string]: any/*TODO: complete this interface*/
}