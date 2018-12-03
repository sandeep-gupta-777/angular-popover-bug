import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasChannel'
})
export class HasChannelPipe implements PipeTransform {

  transform(channels: string[], channelToCheck: string): any {
     
    if(!channelToCheck || channelToCheck==='all' || !channels) return true;
    let x = channels.find((channel)=>channel===channelToCheck)
    return x;
  }

}
