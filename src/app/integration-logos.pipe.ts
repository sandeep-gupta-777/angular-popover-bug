
import {map} from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import {IIntegrationMasterListItem, IIntegrationOption, IMasterIntegrationResult} from '../interfaces/integration-option';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAppState} from './ngxs/app.state';
import {ELogType, LoggingService} from './logging.service';

@Pipe({
  name: 'integrationLogos'
})
export class IntegrationLogosPipe implements PipeTransform {

  @Select() app$: Observable<IAppState>;
  transform(integrationOption: IIntegrationOption, no_channel_or_only_channel: string): Observable<IIntegrationMasterListItem[]> {
    let integrations;
    if (no_channel_or_only_channel === 'no_channel') {
      integrations = {
        // ...integrationOption.channels,
        ...integrationOption.fulfillment_provider_details,
        ...integrationOption.ccsp_details,
      };
    } else if (no_channel_or_only_channel === 'only_channel') {
      integrations = {
        ...integrationOption.channels,
      };
    }

    /*remove the integration key if its not enabled*/
    for (const key in integrations) {

        try {
          if (!integrations[key].enabled) {
            delete integrations[key];
          }
        } catch (e) {
          LoggingService.error(e);
        }
    }

    if (!Object.keys(integrations) || Object.keys(integrations).length === 0) { return; }
    return this.app$.pipe(map((value) => {
      try {
        const integrationsMasterList = value.masterIntegrationList;
        const arr = Object.keys(integrations).map((key) => {
          const x =  integrationsMasterList.find((integrationsMasterListItem) => {
            // LoggingService.log(integrationsMasterListItem.unique_name.toUpperCase(), key.toUpperCase());
            return integrationsMasterListItem.unique_name.toUpperCase() === key.toUpperCase();
          });
          return x;
        });
        return arr;
      } catch (e) {
        LoggingService.error(e);
      }
    }));

  }

}
