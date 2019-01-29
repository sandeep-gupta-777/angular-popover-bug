import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(
    private router : Router
  ) { }
  addQueryParams(params : {}  ){

    // console.log(route.url);

    this.router.navigate([], {
      // relativeTo: route,
      queryParams: params,
      // queryParamsHandling: 'merge',
      // skipLocationChange: true
    });
  }
}
