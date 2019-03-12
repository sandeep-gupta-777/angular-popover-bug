import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ListIfNotInThisList' //listIfNotInThisList
})
export class ListIfNotInThisListPipe implements PipeTransform {

  transform(givenList: number[], toRemoveList: number[]): any {

    let ans = givenList.filter((num1)=>{
        return !toRemoveList.find((num2)=>{
           return num1 == num2;
        })
    })
    return ans;
  }

}
