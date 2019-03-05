import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EAllActions} from '../../../../../constants.service';
import {FormGroup} from '@angular/forms';
import {PermissionService} from '../../../../../permission.service';


@Component({
  selector: 'app-security',
  template: `
      <form [formGroup]="formGroup" class="bot-creation-form ">
          <div class="row m-0">

              <fieldset class="col-5" [readonlyselectedroles]="myEAllActions['Update Bots']">

                  <mat-form-field class="w-100">
                      <input matInput formControlName="data_persistence_period" type="number" class=""
                             required
                             placeholder="Data retention period((in days)">
                  </mat-form-field>

                  <div class="switch-wrapper" style="margin-bottom: 20px">
                      <div class="form-control d-flex flex-column">
                          <label class="pr-2">Advanced Data Protection <app-info-icon></app-info-icon></label>
                          <app-ui-switch
                                  formControlName="advanced_data_protection"
                                  [disabled]="permissionService.isTabAccessDenied(myEAllActions['Update Bots'])"
                          ></app-ui-switch>
                      </div>
                  </div>

                  <app-bot-config-input
                          style="margin-bottom: 20px"
                          displayName="Consent disclaimer message"
                          placeholder="Consent disclaimer message"
                          [isDisabled]="!formGroup.get('advanced_data_protection').value"
                          formControlName="consent_message"></app-bot-config-input>

              </fieldset>
              <div class="col-1"></div>
              <fieldset class="col-5" [readonlyselectedroles]="myEAllActions['Update Bots']">
                  <div class="switch-wrapper" style="margin-bottom: 20px">
                      <div class="form-control d-flex flex-column">
                          <label class="pr-2">Allow anonymization <app-info-icon></app-info-icon></label>
                          <app-ui-switch
                                  formControlName="allow_anonymization"
                                  [disabled]="permissionService.isTabAccessDenied(myEAllActions['Update Bots'])"
                          ></app-ui-switch>
                      </div>
                  </div>

                  <div class="switch-wrapper" *ngIf="formGroup.get('advanced_data_protection').value">
                      <div class="form-control d-flex flex-column">
                          <label class="pr-2">Blanket consent for all consumers</label>
                          <app-ui-switch
                                  formControlName="blanket_consent"
                                  [disabled]="permissionService.isTabAccessDenied(myEAllActions['Update Bots'])"
                          ></app-ui-switch>
                      </div>
                  </div>

              </fieldset>
          </div>

      </form>
  `,
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']
})
export class SecurityComponent implements OnInit {
  myEAllActions = EAllActions;
  @Input() formGroup: FormGroup;
  constructor(public permissionService: PermissionService) {}

  ngOnInit() {}
}
