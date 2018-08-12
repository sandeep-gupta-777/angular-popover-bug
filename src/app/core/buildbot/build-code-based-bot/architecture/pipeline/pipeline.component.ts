import {Component, EventEmitter, Input, IterableDiffers, OnInit, Output} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {IBot} from '../../../../interfaces/IBot';
import {IAIModule} from '../../../../../../interfaces/ai-module';
import {AimService} from '../../../../../aim.service';
import {ObjectArrayCrudService} from '../../../../../object-array-crud.service';
import {SaveBasicInfo, SavePipeLineInfo} from '../../../ngxs/buildbot.action';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {IBotCreationState} from '../../../ngxs/buildbot.state';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {

  @Input() bot: IBot;
  @Select() botcreationstate$:Observable<IBotCreationState>;
  iterableDiffer;
  pipeLine: any[] = [];
  aiModules: IAIModule[] = [];
  searchKeyword: string;
  purpose:any;
  @Output() datachanged$ = new EventEmitter();

  constructor(
    private aimService: AimService,
    private objectArrayCrudService: ObjectArrayCrudService,
    private _iterableDiffers: IterableDiffers,
    private activatedRoute:ActivatedRoute,
    private store: Store) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
    this.purpose = this.activatedRoute.snapshot.data;
    this.pipeLine = this.bot && this.bot.pipelines || [];

    this.aimService.getModules()
      .subscribe((value: IAIModule[]) => {
        this.aiModules = value;
      });
    if(this.purpose['buildBot']){
      this.botcreationstate$.subscribe((botcreationstate)=>{
        this.pipeLine = botcreationstate.codeBased.pipelines
      })
    }
  };

  ngDoCheck() {
    if (!this.pipeLine || this.pipeLine.length === 0) return;
    let changes = this.iterableDiffer.diff(this.pipeLine);
    if (changes) {
      if(this.purpose['buildBot']){
        this.store.dispatch([
          new SaveBasicInfo({data: {pipelines: this.pipeLine}})
        ]);
        return;
      }
      this.datachanged$.emit({data: {pipeline: this.pipeLine, unselectedPipeline: this.aiModules}});
      // this.store.dispatch([
      //   new SavePipeLineInfo({data: {pipeline: this.pipeLine, unselectedPipeline: this.aiModules}})
      // ]);
    }
  }
}
