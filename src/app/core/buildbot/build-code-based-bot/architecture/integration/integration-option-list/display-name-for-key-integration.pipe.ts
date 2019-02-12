import { Pipe, PipeTransform } from '@angular/core';
import {StoreVariableService} from './store--variable.service';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {IAppState} from '../../../../../../ngxs/app.state';
import {UtilityService} from '../../../../../../utility.service';

@Pipe({
  name: 'displayNameForKeyIntegration'
})
export class DisplayNameForKeyIntegrationPipe implements PipeTransform {

  constructor(private utilityService: UtilityService) {}

  transform(key: any, args?: any): any {

    return this.utilityService.getDisplayNameForKey_Integration(key);
    // return key;
  }

}
