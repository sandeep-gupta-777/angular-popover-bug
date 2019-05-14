import { Component, OnInit, Input } from '@angular/core';
import { IBot } from 'src/app/core/interfaces/IBot';
import { EAllActions } from 'src/app/typings/enum';
import { EBotType } from 'src/app/utility.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faq-agent-handover-form',
  templateUrl: './faq-agent-handover-form.component.html',
  styleUrls: ['./faq-agent-handover-form.component.scss']
})
export class FaqAgentHandoverFormComponent implements OnInit {

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
  }

}
