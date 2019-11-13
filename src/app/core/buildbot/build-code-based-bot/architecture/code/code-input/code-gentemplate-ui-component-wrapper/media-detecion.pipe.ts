import {Pipe, PipeTransform} from '@angular/core';
import {EBotMessageMediaType} from '../../../../../../../../interfaces/chat-session-state';

@Pipe({
  name: 'mediaDetecion'
})
export class MediaDetecionPipe implements PipeTransform {

  transform(outputItem: any, args?: any): any {


    if (outputItem && (outputItem.audio || outputItem.image || outputItem.video || outputItem.file)) {
      if (outputItem.audio) {
        return EBotMessageMediaType.audio;
      }
      if (outputItem.image) {
        return EBotMessageMediaType.image;
      }
      if (outputItem.video) {
        return EBotMessageMediaType.video;
      }
      if (outputItem.file) {
        return EBotMessageMediaType.file;
      }
    }

  }

}
