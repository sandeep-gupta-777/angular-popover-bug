import { Pipe, PipeTransform } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAppState} from '../../../../../ngxs/app.state';
import {IPipelineItemV2} from './pipeline.component';
import {take} from 'rxjs/internal/operators';
import {IPipelineItem} from "../../../../../../interfaces/ai-module";

@Pipe({
  name: 'pipeineKeywordToPipelineModuleMatched'
})
export class PipeineKeywordToPipelineModuleMatchedPipe implements PipeTransform {

  @Select() app$: Observable<IAppState>;
  pipelineModulesV2List: IPipelineItemV2[];
  pipeline_modules = [];
  constructor(){
    this.app$.pipe(take(1)).subscribe((appState)=>{
      this.pipelineModulesV2List = appState.pipelineModulesV2List;
    })
  }

  transform(modules:IPipelineItem[], keyword: string): any {
    debugger;
    if(!keyword || !keyword.trim()){
      return modules;
    }
    keyword = keyword.trim();
    let matchedModules =  modules.filter(item=> item.library.toLowerCase().includes(keyword.toLowerCase()));
    if(matchedModules.length===0){
      return modules;
    }
    return matchedModules;

  }
}
