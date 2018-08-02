import {Component, Input, IterableDiffers, OnInit} from '@angular/core';
import {IAIModule} from '../../../../../interfaces/ai-module';
import {AimService} from '../../../../aim.service';
import {ObjectArrayCrudService} from '../../../../object-array-crud.service';
import {IBot} from '../../../interfaces/IBot';
import {Store} from '@ngxs/store';
import {SavePipeLineInfo} from '../../ngxs/buildbot.action';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {

  @Input() bot:IBot;
  iterableDiffer;
  pipeLine:IAIModule[] = [];
  aiModules: IAIModule[]=[];
  constructor(private aimService:AimService, private objectArrayCrudService:ObjectArrayCrudService, private _iterableDiffers: IterableDiffers, private store:Store){
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
    /*comperror: */
    // let isBotNew = ((this.bot.unselected_pipeline.length===<number>0) && (this.bot.pipeline.length ===<number>0));
    // this.aiModules = this.bot.unselected_pipeline ||this.aimService.getModules();
    //// this.aiModules = this.bot.unselected_pipeline;
    // this.pipeLine = this.bot.pipeline ||[];
    console.log(this.pipeLine);
  };

  ngDoCheck() {
    if(!this.pipeLine || this.pipeLine.length===0) return;
    console.log("ngdocheck here", this.aiModules);
    let changes = this.iterableDiffer.diff(this.pipeLine);
    if (changes) {
      this.store.dispatch([
        new SavePipeLineInfo({data:{pipeline:this.pipeLine, unselectedPipeline: this.aiModules}})
      ])
    }
  }
}
