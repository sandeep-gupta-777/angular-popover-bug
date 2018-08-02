import {IAvatarList, IBasicInfo, ICode, ICustomners, IIntegration, IPipeline} from '../../../../interfaces/bot-creation';
import {IAIModule} from '../../../../interfaces/ai-module';
import { IBotVersionData } from '../../interfaces/IBot';

export class SaveBasicInfo {
  static readonly type = '[build-bots] set basic info';
  constructor(public payload: { data: IBasicInfo }) {}
}
export class SaveAvatorInfo {
  static readonly type = '[build-bots] set Avator info';
  constructor(public payload: { data: IAvatarList }) {}
}
export class SavePipeLineInfo {
  static readonly type = '[build-bots] set PipeLine info';
  constructor(public payload: { data: {pipeline:IAIModule[], unselectedPipeline:IAIModule[]} }) {}
}
export class SaveCustomnersInfo {
  static readonly type = '[build-bots] set Customners info';
  constructor(public payload: { data: ICustomners }) {}
}
export class SaveCodeInfo {
  static readonly type = '[build-bots] set Code info';
  constructor(public payload: { data: ICode }) {}
}
export class SaveIntegrationInfo {
  static readonly type = '[build-bots] set Integration info';
  constructor(public payload: { data: IIntegration }) {}
}

