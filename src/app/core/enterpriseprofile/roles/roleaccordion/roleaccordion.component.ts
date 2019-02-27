import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { ConstantsService } from 'src/app/constants.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterService } from 'src/app/router.service';
import { IRole } from 'src/app/core/interfaces/IRole';


@Component({
  selector: 'app-roleaccordion',
  templateUrl: './roleaccordion.component.html',
  styleUrls: ['./roleaccordion.component.scss']
})
export class RoleaccordionComponent implements OnInit {
  @Input() show : boolean ;
  @Input() categoryName : string;
  @Input() roles : IRole[];
  @Input() addedPermissions : number[];
  @Input() serchedAction : string;
  @Input() systemRole: string;
  @Output() removePermission  = new EventEmitter();
  @Output() addPermission  = new EventEmitter();

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private routerService: RouterService
  ) { }

  isPermission( id: number):boolean{
    //
    return !!this.addedPermissions.find(num => num == id );
  }
  isCategory():boolean{
    let ans = true;
    this.roles.forEach(role => {
      ans = this.isPermission(role.id) && ans;
    });
    return ans;
  }
  removePermissionById(id){
    if(this.systemRole) return;
    this.removePermission.emit({roleIds : id})
  }

  addPermissionById(id){
    if(this.systemRole) return;
    this.addPermission.emit({roleIds:id})
  }
  selectAll(){
    let list = this.roles.map(role => {return role.id});
    this.addPermissionById(list);
    event.stopPropagation() ;
  }
  deselectAll(){
    let list = this.roles.map(role => {return role.id});
    this.removePermissionById(list);
    event.stopPropagation() ;
  }
  ngOnInit() {
  }
  isAllHidden(value) {
    let ans:boolean = true;
    this.roles.forEach(role => {
      ans = ans && !role.name.toUpperCase().includes(value)
    });

    return ans;
  }

}
