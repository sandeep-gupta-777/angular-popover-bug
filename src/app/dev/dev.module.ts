import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyMaterialModule} from '../my-material.module';
import {PostmanFormComponent} from './postman-form/postman-form.component';
import {Route, Router, RouterModule} from '@angular/router';
import {IsDevModeGuard} from '../is-dev-mode.guard';
import {ServerService} from '../server.service';
import {ConstantsService} from '../constants.service';
import {MyToasterService} from '../my-toaster.service';
import {PermissionService} from '../permission.service';
import {UtilityService} from '../utility.service';
import {StoreVariableService} from '../core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/store--variable.service';
import {DevWrapperComponent} from './dev-wrapper/dev-wrapper.component';
import {ApiItemComponent} from './history/api-item/api-item.component';
import {ApiDocComponent} from "./history/api-doc.component";
import {ApiFolderComponent} from './history/api-item/api-folder.component';
import {ApiFilterPipe} from './history/api-filer.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DevService} from "./dev.service";
import {SharedModule} from "../shared.module";
import {DevHttpInterceptorService} from "./dev-http-interceptor.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {HttpMockRequestInterceptor} from "../interceptor.mock";
import {HttpRequestInterceptor} from "../interceptor";
import {NgxsModule} from "@ngxs/store";
import {VersionStateReducer} from "../core/buildbot/build-code-based-bot/architecture/code/code-input/ngxs/code-input.state";
import {ReducerListService} from "../reducer-list.service";
import {DevStateReducer} from "./ngxs/dev.state";
import {ApiListFilterPipe} from "./history/api-list-filter.pipe";
import {ReverseArrayPipe} from "./array-reverse.pipe";

const routes: Route[] = [{
  path: '', component: DevWrapperComponent, canActivate: [IsDevModeGuard]
}];

@NgModule({
  declarations: [
    PostmanFormComponent,
    ApiDocComponent,
    DevWrapperComponent,
    ApiItemComponent,
    ApiFolderComponent,
    ApiFilterPipe,
    ApiListFilterPipe,
    ReverseArrayPipe

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    NgxsModule.forFeature([DevStateReducer])
  ],
  providers: [IsDevModeGuard,
    DevService,
    MyToasterService, PermissionService, StoreVariableService, UtilityService, ConstantsService, ServerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DevHttpInterceptorService,
      multi: true
    }
  ]
})
export class DevModule {
}
