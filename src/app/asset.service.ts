import {Injectable} from '@angular/core';

export const CODE_BASED_DEFAULT_ICON = 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png';
export const PIPELINE_DEFAULT_ICON  = 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/pipeline-bot-icon.png';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() {
  }
}
