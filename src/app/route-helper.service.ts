import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteHelperService {

  constructor() { }

  static getQueryParams(activatedRoute:ActivatedRoute, queryParamKey:string){
    return activatedRoute.snapshot.queryParamMap.get(queryParamKey);
  }
  static getRouteParams(activatedRoute:ActivatedRoute, routeParamKey:string){

  }

  static navigateToUrl(router:Router, newRouteDetails:{url:string,queryParams:any}){
    // return router.navigate(['/core/viewbots'], {queryParams:{'type':activeTab}});
    return router.navigate([newRouteDetails.url], {queryParams:newRouteDetails.queryParams});
  }
  static getRouterFragment(){

  }
}
