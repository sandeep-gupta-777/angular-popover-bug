import {IAvatarList, IBasicInfo, ICustomners, IIntegration, IPipeline, ISaveDataManagment} from '../../../../interfaces/bot-creation';
import {IAIModule} from '../../../../interfaces/ai-module';
import {ICodeData } from '../../interfaces/IBot';

export class SaveBasicInfo {
  static readonly type = '[build-bots] set basic info';
  constructor(public payload: { data: IBasicInfo }) {}
}
export class SaveDataManagment {
  static readonly type = '[build-bots] set data management info';
  constructor(public payload: { data: ISaveDataManagment }) {}
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
  constructor(public payload: { data: ICodeData }) {}
}
export class SaveIntegrationInfo {
  static readonly type = '[build-bots] set Integration info';
  constructor(public payload: { data: IIntegration }) {}
}
