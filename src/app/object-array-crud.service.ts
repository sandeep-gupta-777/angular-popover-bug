import { Injectable } from '@angular/core';
import {IPipelineItem} from '../interfaces/ai-module';

@Injectable({
  providedIn: 'root'
})
export class ObjectArrayCrudService {

  constructor() { }

  static getObjectIndexByKeyValuePairInObjectArray(array: any[], obj: object) {
    if(Array.isArray(array) && obj){
      const key = Object.keys(obj)[0];
      const value =  obj[key];
      const x = array.findIndex(item => {
        return item[key] === value;
      });
      return x;
    }
    else {
      console.error("getObjectIndexByKeyValuePairInObjectArray: invalid values");
      return null;
    }
  }


  // removeItemById(array:IAIModule[], id:string):IAIModule[]{
  //   if(!array || !id ) return;
  //   for(let i=0;i<array.length;++i){
  //     if(array[i].id == id ){
  //       array.splice(i,1);
  //     }
  //   }
  // }

  // pushUniqueById(array:IAIModule[], obj:IAIModule):IAIModule[]{
  //   if(!array || !obj || !obj.id ) return;
  //
  //   let objId = obj.id;
  //   for(let i=0;i<array.length;++i){
  //     if(array[i].id === obj ){
  //       return;
  //     }
  //   }
  //   array.push(obj);
  //   return array;
  // }
  getObjectItemByKeyValuePair(array: any[], obj: object) {
    const key = Object.keys(obj)[0];
    const value =  obj[key];
    const x = array.find(item => {
      return item[key] === value;
    });
    return x;
  }
}
