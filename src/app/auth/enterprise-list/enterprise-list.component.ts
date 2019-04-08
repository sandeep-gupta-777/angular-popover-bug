import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.scss']
})
export class EnterpriseListComponent implements OnInit {

  constructor() { }
  @Input() enterpriseList: any[];
  @Input() searchEnterprise: string;
  @Input() currentEnterpriseId: number;
  @Output() clickedEnterprise = new EventEmitter();
  ngOnInit() {
  }
  clickEnterprise(enterpriseId, roleId, isActive) {
    const object = {
      enterpriseId: enterpriseId,
      roleId: roleId,
      isActive: isActive
    };
    this.clickedEnterprise.emit(object);
  }
}
