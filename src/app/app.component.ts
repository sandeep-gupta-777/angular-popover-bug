import {AfterViewInit, Component, ElementRef, isDevMode, OnInit, ViewChild} from '@angular/core';
declare var CodeMirror: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // this.serverService.compareDeployDates();//TODO: after refactor

    /*
    let storeSnapshot = this.store.snapshot();
    let autoLogoutTime = storeSnapshot.app.autoLogoutTime;
    if(Date.now() > autoLogoutTime){
      localStorage.clear();
      this.storeService.logout();
      location.reload();
    }
    */

    // /**
    //  * This is required here because if we set backend url in login page then anonymour chat page will be left out
    //  * */
    // if(!isDevMode()){
    //   this.serverService.getNSetConfigData$().subscribe(() => {
    //   });
    // }

    // this.router.events.subscribe((data) => {
    //   if (data instanceof RoutesRecognized) {
    //
    //     this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
    //     this.bot_unique_name = data.state.root.firstChild.queryParamMap.get('bot_unique_name');
    //     this.enterprise_unique_name = data.state.root.firstChild.queryParamMap.get('enterprise_unique_name');
    //   }
    //   if (data instanceof RouteConfigLoadStart) {
    //     /*lazy loading*/
    //     this.loadingRouteConfig = true;
    //   } else if (event instanceof RouteConfigLoadEnd) {
    //     this.loadingRouteConfig = false;
    //   }
    // });
    // console.log('Testing reload: take1');


  }


  /**
   * initializeProgressBarSubscription
   * if loading = true, slowly increase progressbar
   * if loading = false, finish progressbar in 500ms
   * */


  // test(){
  //   this.serverService.getLinkMetaData();
  // }

}
