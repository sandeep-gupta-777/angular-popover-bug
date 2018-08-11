import {Component, Input, IterableDiffers, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {IBot} from '../../../../interfaces/IBot';
import {IAIModule} from '../../../../../../interfaces/ai-module';
import {AimService} from '../../../../../aim.service';
import {ObjectArrayCrudService} from '../../../../../object-array-crud.service';
import {SavePipeLineInfo} from '../../../ngxs/buildbot.action';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {

  @Input() bot: IBot;
  iterableDiffer;
  pipeLine: IAIModule[] = [];
  aiModules: IAIModule[] = [];
  searchKeyword:string;

  constructor(
    private aimService: AimService,
    private objectArrayCrudService: ObjectArrayCrudService,
    private _iterableDiffers: IterableDiffers,
    private store: Store) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
    /*comperror: */
    // let isBotNew = ((this.bot.unselected_pipeline.length===<number>0) && (this.bot.pipeline.length ===<number>0));
    this.pipeLine = this.bot.pipelines || [];
    // debugger;
      this.aimService.getModules()
      .subscribe((value:IAIModule[])=>{
          this.aiModules = value;
      })
  };

  ngDoCheck() {
    if (!this.pipeLine || this.pipeLine.length === 0) return;
    console.log('ngdocheck here', this.aiModules);
    let changes = this.iterableDiffer.diff(this.pipeLine);
    if (changes) {
      this.store.dispatch([
        new SavePipeLineInfo({data: {pipeline: this.pipeLine, unselectedPipeline: this.aiModules}})
      ]);
    }
  }
}
