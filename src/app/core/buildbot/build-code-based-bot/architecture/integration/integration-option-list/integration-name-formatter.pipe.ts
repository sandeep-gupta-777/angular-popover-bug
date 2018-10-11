import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'integrationNameFormatter'
})
export class IntegrationNameFormatterPipe implements PipeTransform {

  transform(string: any, args?: any): any {
    return string.split("_").join(" ");
  }

}
