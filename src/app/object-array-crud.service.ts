import { Injectable } from '@angular/core';
import {IAIModule} from '../interfaces/ai-module';

@Injectable({
  providedIn: 'root'
})
export class ObjectArrayCrudService {

  constructor() { }


  removeItemById(array:IAIModule[], id:string):IAIModule[]{
    if(!array || !id ) return;
    for(let i=0;i<array.length;++i){
      if(array[i].id === id ){
        array.splice(i,1);
      }
    }
  }

  pushUniqueById(array:IAIModule[], obj:IAIModule):IAIModule[]{
    if(!array || !obj || !obj.id ) return;

    let objId = obj.id;
    for(let i=0;i<array.length;++i){
      if(array[i].id === obj ){
        return;
      }
    }
    array.push(obj);
    return array;
  }
  getObjectItemByKeyValuePair(array:any[], obj:object){
    let key = Object.keys(obj)[0];
    let value =  obj[key];
    return array.find(item => {
      return item[key] === value;
    })
  }
}
