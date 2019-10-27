import {Injectable} from '@angular/core';
import {ServerService} from '../../../server.service';
import {ConstantsService} from '../../../constants.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {IBot} from '../../interfaces/IBot';
import {IMLResponse, IMlTemplate} from '../../../typings/reply';

@Injectable()
export class MlReplyService {

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService
  ) {
  }

  makeResponseLive(bot: IBot, body: { 'comment': string }) {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(bot.id)
    };
    const url = this.constantsService.makeResponseLive();
    return this.serverService.makePostReq({url, headerData, body});
  }

  loadFromLive(bot: IBot) {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(bot.id)
    };
    const url = this.constantsService.loadFromLive();
    return this.serverService.makePostReq({
      url,
      headerData,
      body: {fork_from: 'live'}
    })
      ;
  }

  getResponseTemplates(bot: IBot) {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(bot.id)
    };
    const url = this.constantsService.getResponseTemplates();
    return this.serverService.makeGetReq({url, headerData});
  }

  updateResponseTemplates(bot: IBot, response: IMLResponse, id) {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(bot.id)
    };
    const url = this.constantsService.getResponseTemplates() + `${id}/`;
    return this.serverService.makePutReq({url, headerData, body: response});
  }
}
