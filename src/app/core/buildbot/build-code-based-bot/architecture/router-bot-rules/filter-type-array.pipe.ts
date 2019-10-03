import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTypeArray'
})
export class FilterTypeArrayPipe implements PipeTransform {

  transform(value: any, operation: string): any {
    // 1. Equals to or Not equals to  - All data types should be present
    // 2. In - Variable and string as of now
    // 3. Exists - No value 2 configuration - compile to {“==”:[{“var”:”value1.input”},True]}
    // 4. Does not exist - No value 2 configuration - compile to {“==”:[{“var”:”value1.input”},False]}
    // 5. Greater than and less than - for variable, int, float for now

    // 'string',
    //   'variable',
    //   'integer',
    //   'boolean',
    //   'float',
    //   'array',
    //   'dictionary',

    // 'equal',
    //   'not_equal',
    //   'in',
    //   'not_exist',
    //   'exist',
    //   'greater',
    //   'less',
    if(operation === 'equal' || operation === 'not_equal'){
        return ['string', 'variable', 'integer', 'boolean', 'float', 'array']
    }else if(operation === 'in'){
        return ['variable','string']
    }else if(operation === 'greater' || operation === 'less' ){
        return ['integer','float']
    }else if(operation === 'exist' || operation === 'not_exist'){
        return ['boolean']
    }
    return value;
  }

}
