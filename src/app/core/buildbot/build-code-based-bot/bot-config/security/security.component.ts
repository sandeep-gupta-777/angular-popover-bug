import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {PermissionService} from '../../../../../permission.service';
import {EAllActions} from '../../../../../typings/enum';


@Component({
  selector: 'app-security',
  template: `
      <form [formGroup]="formGroup" class="bot-creation-form bot-creation-form-grid">
          <mat-form-field class="w-100">
              <input matInput formControlName="data_persistence_period" type="number" class=""
                     required
                     onkeydown="return event.keyCode !== 69"
                     placeholder="Data retention period((in days)">
          </mat-form-field>
          
          <mat-form-field class="w-100">
              <input matInput formControlName="consent_message"
                     placeholder="Consent disclaimer message">
          </mat-form-field>

          <!--<app-bot-config-input-->
                  <!--style="margin-bottom: 20px"-->
                  <!--displayName="Consent disclaimer message"-->
                  <!--placeholder="Consent disclaimer message"-->
                  <!--[isDisabled]="!formGroup.get('advanced_data_protection').value"-->
                  <!--formControlName="consent_message"></app-bot-config-input>-->

          <div class="switch-wrapper" style="margin-bottom: 20px">
              <div class="form-control d-flex flex-column">
                  <label class="pr-2">Allow anonymization
                      <app-info-icon [text]="'Post data retention period should sessions data be anonymised'"></app-info-icon>
                  </label>
                  <app-ui-switch
                          formControlName="allow_anonymization"
                          [disabled]="permissionService.isTabAccessDenied(myEAllActions['Update Bots'])"
                  ></app-ui-switch>
              </div>
          </div>
        

        <div class="switch-wrapper" style="margin-bottom: 20px">
          <div class="form-control d-flex flex-column">
            <label class="pr-2">Advanced Data Protection
              <app-info-icon [text]="'Encrypt sessions and consumer data and allow consent management'"></app-info-icon>
            </label>
            <app-ui-switch
              formControlName="advanced_data_protection"
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
      </form>
  `,
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']
})
export class SecurityComponent implements OnInit {
  myEAllActions = EAllActions;
  @Input() formGroup: FormGroup;

  constructor(public permissionService: PermissionService) {
  }

  ngOnInit() {
  }
}
