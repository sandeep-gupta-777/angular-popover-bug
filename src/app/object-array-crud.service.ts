import { Injectable } from '@angular/core';
import {IPipelineItem} from '../interfaces/ai-module';

@Injectable()
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


  // removeItemById(array:IAIModule[], roomId:string):IAIModule[]{
  //   if(!array || !roomId ) return;
  //   for(let i=0;i<array.length;++i){
  //     if(array[i].roomId == roomId ){
  //       array.splice(i,1);
  //     }
  //   }
  // }

  // pushUniqueById(array:IAIModule[], obj:IAIModule):IAIModule[]{
  //   if(!array || !obj || !obj.roomId ) return;
  //
  //   let objId = obj.roomId;
  //   for(let i=0;i<array.length;++i){
  //     if(array[i].roomId === obj ){
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
