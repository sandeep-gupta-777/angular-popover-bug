import {AfterViewInit, Component, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {BotConfigComponent} from '../../buildbot/build-code-based-bot/bot-config/bot-config.component';
import {IBot} from '../../interfaces/IBot';
import {ViewBotStateModel} from '../../view-bots/ngxs/view-bot.state';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ConstantsService} from '../../../constants.service';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {Store} from '@ngxs/store';
import {SetOverViewInfo2} from '../ngxs/analysis.action';

@Component({
  selector: 'app-analysis2-header',
  templateUrl: './analysis2-header.component.html',
  styleUrls: ['./analysis2-header.component.scss']
})
export class Analysis2HeaderComponent implements OnInit, AfterViewInit {

  @Input() allbotList:IBot[];
  @ViewChild("form") f : NgForm;
  start_date = new Date();
  end_date = new Date();
  datePickerConfig: Partial<BsDatepickerConfig> = this.constantsService.DATE_PICKER_CONFIG;
  channelList = this.constantsService.CHANNEL_LIST;
  constructor(private store:Store, private constantsService:ConstantsService) { }

  ngOnInit() {
    this.f.form.valueChanges
      .debounceTime(1000)
      .subscribe((formData)=>{
        if(!this.f.valid) return;
        this.store.dispatch([
          new SetOverViewInfo2({overviewInfo:formData})
        ]);
      });
  }

  onAddonClicked( event ){

  }
  ngAfterViewInit(){
    setTimeout(()=>{
      this.f.form.patchValue({botId:this.allbotList[0].id, platform:this.channelList[0].displayName});
    },0);
  }
  click(){
    console.log(this.f.value);
  }

}
