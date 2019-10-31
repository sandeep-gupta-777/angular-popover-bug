import {Pipe, PipeTransform} from '@angular/core';
import {EBotMessageMediaType} from '../../../../../../../../interfaces/chat-session-state';

@Pipe({
  name: 'mediaDetecion'
})
export class MediaDetecionPipe implements PipeTransform {

  transform(outputItem: any, args?: any): any {
    if(!outputItem || !outputItem.media || !outputItem.media[0]){
      return null;
    }
    if (outputItem.media[0].video_url != null) {
      return EBotMessageMediaType.video;
    }
    if (outputItem.media[0].audio_url != null) {
      return EBotMessageMediaType.audio;
    }
    if (outputItem.media[0].image_url != null) {
      return EBotMessageMediaType.image;
    }
    if (outputItem.media[0].file_url != null) {
      return EBotMessageMediaType.file;
    }
  }

}
