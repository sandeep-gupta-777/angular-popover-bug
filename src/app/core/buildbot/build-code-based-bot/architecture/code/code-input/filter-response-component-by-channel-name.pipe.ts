import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterResponseComponentByChannelName'
})
export class FilterResponseComponentByChannelNamePipe implements PipeTransform {

  transform(responseTemplateComponentOutput: [{include:string[], text:string}], channelName: string): any {

    if(!channelName || channelName==='all') return responseTemplateComponentOutput;
    return responseTemplateComponentOutput.filter((item)=>item.include.find((channel_name)=>channel_name === channelName));
  }

}
