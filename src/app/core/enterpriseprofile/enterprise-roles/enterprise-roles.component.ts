import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { ConstantsService } from 'src/app/constants.service';

@Component({
  selector: 'app-enterprise-roles',
  templateUrl: './enterprise-roles.component.html',
  styleUrls: ['./enterprise-roles.component.scss']
})
export class EnterpriseRolesComponent implements OnInit {

  constructor(
    private serverService: ServerService,
    private constantsService : ConstantsService
    ) { }
    roleList;
  ngOnInit() {
    let getRoleUrl = this.constantsService.getRoleUrl();
    this.serverService.makeGetReq<any>({ url: getRoleUrl })
        .subscribe((roles) => {
          this.roleList = roles.objects;
          
        });
  }

}
