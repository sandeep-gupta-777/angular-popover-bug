import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ServerService} from '../server.service';
import {UtilityService} from '../utility.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent{

  // @ViewChild('httpForm') httpForm:NgForm;
  // constructor(
  //   public serverService:ServerService,
  //   public utilityService:UtilityService,
  // ) { }
  //
  // httpValue;
  // ngOnInit() {
  // }
  //
  // makeHttpReq(formRef){
  //
  //   let formData = formRef.value;
  //   this.serverService[formData.verb]({url:formData.url})
  //     .subscribe((val)=>{
  //       console.clear();
  //       console.log(val);
  //       this.httpValue = val;
  //     },(err)=>{
  //       this.httpValue = err;
  //     })
  // }

}
