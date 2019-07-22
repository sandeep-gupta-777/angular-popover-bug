import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UtilityService} from '../utility.service';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-chat-consumer-form',
  templateUrl: './chat-consumer-form.component.html',
  styleUrls: ['./chat-consumer-form.component.scss']
})
export class ChatConsumerFormComponent implements OnInit {

  @Input() customConsumerDetails;
  @Input() readonly  = false;
  @Input() title  = 'Create room with consumer';
  @Input() buttonText:string;
  @Output() saveConsumerDetails$ = new EventEmitter();
  @Output() hideOverlay$ = new EventEmitter();
  isEditMode = false;
  test = true;
  uuid = UtilityService.generateUUid();

  errorMessage = "";
  constructor(private utilityService:UtilityService) { }

  ngOnInit() {
  }

  validateAndSubmit(form: NgForm){
    let customConsumerDetails = form.form.getRawValue();
    // let customConsumerDetails = form.form.getRawValues();
    this.errorMessage="";
    let doesConsumerFomContainSomeDetail =  this.utilityService.isAtleastOneValueIsDefined(customConsumerDetails);
    if(doesConsumerFomContainSomeDetail){
      this.saveConsumerDetails$.emit(customConsumerDetails);
    }else {
      this.errorMessage = "Please fill atleast one field"
    }
  }

}
