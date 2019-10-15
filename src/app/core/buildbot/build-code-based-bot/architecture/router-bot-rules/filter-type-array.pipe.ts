import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTypeArray'
})
export class FilterTypeArrayPipe implements PipeTransform {

  transform(value: any, operation: string): any {

    if(operation === 'equal' || operation === 'not_equal'){
        return ['string', 'variable', 'integer', 'boolean', 'float', 'array']
    }else if(operation === 'in'){
        return ['variable','string','array']
    }else if(operation === 'greater' || operation === 'less' ){
        return ['integer','float']
    }else if(operation === 'exist' || operation === 'not_exist'){
        return ['boolean']
    }
    return value;
  }

}
