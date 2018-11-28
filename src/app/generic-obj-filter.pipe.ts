import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genericObjFilter'
})
export class GenericObjFilterPipe implements PipeTransform {

  transform(value: any[], searchByKey: string, searchWord: string ): any[] {
    let searchByKeyTree = searchByKey.split(".");

    if(!value) return [];
    if(!searchWord) return value;
    searchWord = searchWord.toLowerCase();

    return value.filter( it => {

      let real_key:any =  it;
      for (let key of searchByKeyTree) {
        real_key = real_key[key];
      }
      real_key = real_key.toString();
      return real_key.toLowerCase().includes(searchWord);
    });

  }

}
