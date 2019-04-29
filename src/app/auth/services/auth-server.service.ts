// import { Injectable } from '@angular/core';
// import {IIntegrationMasterListItem} from "../../../interfaces/integration-option";
// import {catchError, map, switchMap, tap} from "rxjs/operators";
// import {SetAutoLogoutTime, SetMasterIntegrationsList, SetPipelineItemsV2} from "../../ngxs/app.action";
// import {Observable, of, throwError} from "rxjs";
// import {IPipelineItemV2} from "../../core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component";
// import {AuthConstantsService} from "./auth-constants.service";
// import {EHttpVerbs, PermissionService} from "../../permission.service";
// import {HttpClient, HttpHeaders} from "@angular/common/http";
// import {IHeaderData} from "../../../interfaces/header-data";
// import {Store} from "@ngxs/store";
//
// @Injectable()
// export class AuthServerService {
//
//   constructor(private constantsService: AuthConstantsService,
//               private permissionService:PermissionService,
//               private store: Store,
//               private httpClient: HttpClient) {
//     this.loggeduser$.subscribe((value) => {
//       if (!value || !value.user) {
//         return;
//       }
//       this.AUTH_TOKEN = value.user.auth_token && value.user.auth_token;
//       this.X_AXIS_TOKEN = value.user.user_access_token && value.user.user_access_token;
//       this.roleName = value.user.role.name;
//       this.app$.subscribe((appState) => {
//         if (!this.roleInfo && appState && appState.roleInfoArr)
//           this.roleInfo = appState.roleInfoArr.find((role) => {
//             return role.name === value.user.role.name
//           });
//       })
//     });
//   }
//
//   getNSetIntegrationList() {
//     const url = this.constantsService.getMasterIntegrationsList();
//     return this.makeGetReq<{ meta: any, objects: IIntegrationMasterListItem[] }>({url}).pipe(
//       tap((value) => {
//         // this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
//         // this.store.dispatch(new SetCodeBasedBotListAction({botList: botList}));
//       }))
//       .pipe(switchMap((value) => {
//         if(value){
//           return this.store.dispatch([
//             new SetMasterIntegrationsList({
//               masterIntegrationList: value.objects
//             })
//           ]);
//         }else {
//           return of(1);
//         }
//       }));
//   }
//
//   getNSetPipelineModuleV2() {
//
//     const url = this.constantsService.getPipelineModuleV2();
//     return this.makeGetReq<{ meta: any, objects: IPipelineItemV2[] }>({url})
//       .pipe(switchMap((value) => {
//         if (value) {
//           return this.store.dispatch([
//             new SetPipelineItemsV2({
//               data: value.objects
//             })
//           ]);
//         } else {
//           return of(1);
//         }
//       }));
//   }
//
//   checkApiAccess(reqObj, verb: EHttpVerbs) {
//     const isApiAccessDenied = this.permissionService.isApiAccessDenied(reqObj.url, verb);
//     if (!reqObj.noValidateUser && isApiAccessDenied) {
//       console.log(`api access not allowed:${reqObj.url}`);
//       return throwError(`api access not allowed:${reqObj.url}`);
//     }
//   }
//
//   createHeaders(headerData?: any): HttpHeaders {
//     let headers = new HttpHeaders();
//     let tokenData: IHeaderData = {};
//     tokenData = {'user-access-token': this.X_AXIS_TOKEN};
//     tokenData = {...tokenData, 'auth-token': this.AUTH_TOKEN};
//     tokenData = {...tokenData, 'content-type': 'application/json'};
//
//     headerData = {
//       ...tokenData,
//       ...headerData,
//     };
//
//     if (headerData) {
//       for (const key in headerData) {
//         /*don't set header data for undefined values*/
//         headerData[key] && (headers = headers.set(key, headerData[key]));
//       }
//     }
//     return headers;
//   }
//   makeGetReq<T>(reqObj: { url: string, headerData?: any, noValidateUser?: boolean }): Observable<any> {
//
//     const isApiAccessDenied = this.permissionService.isApiAccessDenied(reqObj.url, EHttpVerbs.GET);
//     if (!reqObj.noValidateUser && isApiAccessDenied) {
//       console.log(`api access not allowed:${reqObj.url}`);
//       // return throwError(`api access not allowed:${reqObj.url}`);
//       return of(null);
//     }
//     const headers = this.createHeaders(reqObj.headerData);
//
//
//     this.changeProgressBar(true, 0);
//     return this.httpClient.get<T>(reqObj.url, {headers: headers}).pipe(
//       map((value: any) => {
//         if (value && value.error) {
//           this.showErrorMessageForErrorTrue(value);
//           return throwError(value);
//         } else {
//           return value;
//         }
//       }),
//       tap((value) => {
//         this.increaseAutoLogoutTime();
//       }),
//       catchError((e: any, caught: Observable<T>) => {
//         return this.handleErrorFromServer(e);
//       }),);
//   }
//   increaseAutoLogoutTime() {
//     const autoLogoutInterval = (this.roleInfo && this.roleInfo.session_expiry_time * 1000) || 3600 * 1000; //3600*1000
//     if (!this.roleInfo) {
//       // console.log("increaseAutoLogoutTime: ROLE IS NOT FOUND=====================")
//     }
//     this.store.dispatch([
//       new SetAutoLogoutTime({time: (Date.now() + autoLogoutInterval)})
//     ]);
//   }
//   makePostReq<T>(reqObj: { url: string, body: any, headerData?: any, dontShowProgressBar?: boolean, noValidateUser?: boolean }): Observable<any> {
//     this.checkApiAccess(reqObj, EHttpVerbs.POST);
//     const headers = this.createHeaders(reqObj.headerData);
//     // if (!reqObj.dontShowProgressBar) {
//     //   this.changeProgressBar(true, 0);
//     // }
//     return this.httpClient.post<T>(reqObj.url, reqObj.body, {headers: headers}).pipe(
//       map((value: any) => {
//         return this.checkForErrorTrue(value);
//       }),
//       tap((value) => {
//         this.increaseAutoLogoutTime();
//         if (!reqObj.dontShowProgressBar) {
//           this.changeProgressBar(false, 100);
//         }
//       }),
//       catchError((e: any, caught: Observable<T>) => {
//         return this.handleErrorFromServer(e);
//       }),);
//   }
//
// }
