import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../../interfaces/IBot';
import {ConstantsService} from '../../../../constants.service';
import {IHeaderData} from '../../../../../interfaces/header-data';
import {ServerService} from '../../../../server.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-curation-settings',
  templateUrl: './curation-settings.component.html',
  styleUrls: ['./curation-settings.component.scss']
})
export class CurationSettingsComponent implements OnInit {

  constructor(
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private formBuilder: FormBuilder,
  ) {
  }

  @Input() bot: IBot;
  @Input() curationSettingsForm: FormGroup;

  ngOnInit() {

    if (!this.curationSettingsForm.get('allow_curation').value) {
      this.curationSettingsForm.get('curation_settings').disable();
    }
    if (!this.curationSettingsForm.get('curation_settings').get('low_confidence').get('enabled').value) {
      this.curationSettingsForm.get('curation_settings').get('low_confidence').get('low_confidence_score').disable();
    }
    this.curationSettingsForm.get('allow_curation').valueChanges
      .subscribe((val) => {
        if (!val) {
          this.curationSettingsForm.get('curation_settings').disable();
        }
        if (val) {
          this.curationSettingsForm.get('curation_settings').enable();
        }
        if (!this.curationSettingsForm.get('curation_settings').get('low_confidence').get('enabled').value) {
          this.curationSettingsForm.get('curation_settings').get('low_confidence').get('low_confidence_score').disable();
        }
      });
    this.curationSettingsForm.get('curation_settings').get('low_confidence').get('enabled').valueChanges
      .subscribe((val) => {
        if (!val) {
          this.curationSettingsForm.get('curation_settings').get('low_confidence').get('low_confidence_score').disable();
        }
        if (val) {
          this.curationSettingsForm.get('curation_settings').get('low_confidence').get('low_confidence_score').enable();
        }
      });
  }

}
