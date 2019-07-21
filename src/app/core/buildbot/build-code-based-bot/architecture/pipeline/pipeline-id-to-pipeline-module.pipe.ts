import { Pipe, PipeTransform } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAppState} from '../../../../../ngxs/app.state';
import {IPipelineItemV2} from './pipeline.component';
import {take} from 'rxjs/internal/operators';

@Pipe({
  name: 'pipelineIdToPipelineModule'
})
export class PipelineIdToPipelineModulePipe implements PipeTransform {

  @Select() app$: Observable<IAppState>;
  pipelineModulesV2List: IPipelineItemV2[];
  pipeline_modules = [];
  constructor() {
    this.app$.pipe(take(1)).subscribe((appState) => {
      this.pipelineModulesV2List = appState.pipelineModulesV2List;
      this.pipelineModulesV2List.forEach((e) => {
        this.pipeline_modules.push(...e.pipeline_modules);
      });
    });
  }

  transform(id: any): any {
    const x =  this.pipeline_modules.find((e) => e.id === id);
    if (!x) {
      console.error(id);
    } else {
      return x;
    }
  }

}
