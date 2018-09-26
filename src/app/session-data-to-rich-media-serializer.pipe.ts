import { Pipe, PipeTransform } from '@angular/core';
import {ISessionItem, ISessionMessageItem} from '../interfaces/sessions';
import {IMessageData} from '../interfaces/chat-session-state';

@Pipe({
  name: 'sessionDataToRichMediaSerializer'
})
export class SessionDataToRichMediaSerializerPipe implements PipeTransform {

  transform(sessionData: any,  args?: any): any/*IMessageData */{
    return sessionData.media;
    // return sessionData;
  }

}
