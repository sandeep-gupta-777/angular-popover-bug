import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UtilityService} from '../utility.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {FormsService} from '../forms.service';

@Component({
  selector: 'app-chat-consumer-form',
  templateUrl: './chat-consumer-form.component.html',
  styleUrls: ['./chat-consumer-form.component.scss']
})
export class ChatConsumerFormComponent implements OnInit {

  @Input() customConsumerDetails;
  @Input() readonly = false;
  @Input() title = 'Create room with consumer';
  @Input() buttonText: string;
  @Output() saveConsumerDetails$ = new EventEmitter();
  @Output() hideOverlay$ = new EventEmitter();
  isEditMode = false;
  test = true;
  uuid = UtilityService.generateUUid();
  form: FormGroup;
  errorMessage = '';

  constructor(private utilityService: UtilityService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['asdasdadsa', [FormsService.lengthValidator({max: 64}), FormsService.startWithAlphanumericValidator()]],
      phone: ['', [FormsService.numberValidator({max: 20000000000})]],
      email: ['', [FormsService.lengthValidator({max: 64}),
        FormsService.startWithAlphanumericValidator(), FormsService.emailValidators()]],
      facebook_id: ['', [FormsService.lengthValidator({max: 64}), FormsService.startWithAlphanumericValidator()]],
      uid: ['', [FormsService.lengthValidator({max: 64}), FormsService.startWithAlphanumericValidator()]],
    });
    this.form.patchValue(this.customConsumerDetails);
  }

  validateAndSubmit(form: FormGroup) {
    const customConsumerDetails = form.getRawValue();
    // let customConsumerDetails = form.form.getRawValues();
    this.errorMessage = '';
    const doesConsumerFomContainSomeDetail = this.utilityService.isAtleastOneValueIsDefined(customConsumerDetails);
    if (doesConsumerFomContainSomeDetail) {
      this.saveConsumerDetails$.emit(customConsumerDetails);
    } else {
      this.errorMessage = 'Please fill atleast one field';
    }
  }

}
