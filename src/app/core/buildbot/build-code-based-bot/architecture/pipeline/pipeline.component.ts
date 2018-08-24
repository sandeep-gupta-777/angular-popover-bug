import {Component, EventEmitter, Input, IterableDiffers, OnInit, Output} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {IBot} from '../../../../interfaces/IBot';
import {IAIModule} from '../../../../../../interfaces/ai-module';
import {AimService} from '../../../../../aim.service';
import {ObjectArrayCrudService} from '../../../../../object-array-crud.service';
import {SaveNewBotInfo_CodeBased, SavePipeLineInfo} from '../../../ngxs/buildbot.action';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {IBotCreationState} from '../../../ngxs/buildbot.state';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {

  // @Input() bot: IBot;
  _bot: IBot;
  @Input() set bot(botData: IBot) {
    // ;
    this._bot = botData;
    this.pipeLine = this._bot && this._bot.pipelines || [];
  }

  @Select() botcreationstate$: Observable<IBotCreationState>;
  iterableDiffer;
  pipeLine: any[] = [];
  aiModules: IAIModule[] = [];
  searchKeyword: string;
  buildBotType: any;
  @Output() datachanged$ = new EventEmitter();

  constructor(
    private aimService: AimService,
    private objectArrayCrudService: ObjectArrayCrudService,
    private _iterableDiffers: IterableDiffers,
    private activatedRoute: ActivatedRoute,
    private store: Store) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
    this.buildBotType = this.activatedRoute.snapshot.data['buildBot'];
    this.pipeLine = this._bot && this._bot.pipelines || [];


    this.aimService.getModules()
      .subscribe((value: IAIModule[]) => {
        this.aiModules = value;
      });
    if (this.buildBotType) {
      this.botcreationstate$.subscribe((botcreationstate) => {
        this.pipeLine = botcreationstate &&
          botcreationstate[this.buildBotType] &&
          botcreationstate[this.buildBotType].pipelines || [];
      });
    }
  };

  ngDoCheck() {
    // if (!this.pipeLine || this.pipeLine.length === 0) return;
    let changes = this.iterableDiffer.diff(this.pipeLine);
    if (changes) {
      // if(this.buildBotType){
      //   this.store.dispatch([
      //     new SaveNewBotInfo_CodeBased({data: {pipelines: this.pipeLine}})
      //   ]);
      //   return;
      // }
      this.datachanged$.emit({pipelines: this.pipeLine});
      // this.store.dispatch([
      //   new SavePipeLineInfo({data: {pipeline: this.pipeLine, unselectedPipeline: this.aiModules}})
      // ]);
    }
  }
}
