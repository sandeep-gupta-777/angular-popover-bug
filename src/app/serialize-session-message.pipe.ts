import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serializeSessionMessage'
})
export class SerializeSessionMessagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
