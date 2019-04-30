
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {IPipelineItem} from '../interfaces/ai-module';
import {ServerService} from './server.service';
import {ConstantsService} from './constants.service';
import {Observable} from 'rxjs';

@Injectable()
export class AimService {

  public aiModules$: Observable<IPipelineItem[]>;
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService
  ) {
    const url = this.constantsService.getAllPipelineModuleUrl();
    this.aiModules$ = this.serverService.makeGetReq<{objects: IPipelineItem[]}>({url}).pipe(
      map(value => value.objects));
    this.aiModules$
      .subscribe((value) => {
      });
  }

  getModules(): Observable<IPipelineItem[]> {
    return this.aiModules$;
  }

  // getModuleById(roomId:string):IAIModule{
  //   for(let i=0; i< this.aiModules.length; ++i){
  //     if(this.aiModules[i].roomId===roomId){
  //       return this.aiModules[i];
  //     }
  //   }
  // }

}
