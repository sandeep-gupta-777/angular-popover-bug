import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IBot } from 'src/app/core/interfaces/IBot';
import { EBotType } from 'src/app/utility.service';
import {EAllActions} from "../../../../../typings/enum";

@Component({
  selector: 'app-faq-bot-basic-info-form',
  templateUrl: './faq-bot-basic-info-form.component.html',
  styleUrls: ['./faq-bot-basic-info-form.component.scss']
})
export class FaqBotBasicInfoFormComponent implements OnInit {

  constructor() { }
  _bot: Partial<IBot> = {};
  bot_type;
  formData: Partial<IBot>;
  @Input() botId:number;
  myEAllActions = EAllActions;
  myEBotType = EBotType;
  @Input() formGroup: FormGroup;
  isDisabled: boolean;
  ngOnInit() {
    if(!this.botId){/*only for new bots*/
      this.formGroup.get('name').valueChanges.subscribe((value) => {
        if(value){
          const uniqueName = value.replace(/\s/g, "");
          this.formGroup.get('bot_unique_name').patchValue(uniqueName);
        }
      });
    }
  }

}
