import { Pipe, PipeTransform } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAppState} from '../../../../../ngxs/app.state';
import {IPipelineItemV2} from './pipeline.component';
import {take} from 'rxjs/internal/operators';

@Pipe({
  name: 'pipeineIdToPipelineModuleWrapper'
})
export class PipeineIdToPipelineModuleWrapperPipe implements PipeTransform {

  @Select() app$: Observable<IAppState>;
  pipelineModulesV2List: IPipelineItemV2[];
  pipeline_modules = [];
  constructor(){
    this.app$.pipe(take(1)).subscribe((appState)=>{
      this.pipelineModulesV2List = appState.pipelineModulesV2List;
    })
  }

  transform(id: any): any {
    return this.pipelineModulesV2List.find((wrapper)=>{
      return !!wrapper.pipeline_modules.find((module)=>{
        return module.id === id;
      })
    })
  }
}
