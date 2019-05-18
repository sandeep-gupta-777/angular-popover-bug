import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-faq-handover-and-interface-form',
  templateUrl: './faq-handover-and-interface-form.component.html',
  styleUrls: ['./faq-handover-and-interface-form.component.scss']
})
export class FaqHandoverAndInterfaceFormComponent implements OnInit {

  constructor() { }
  @Input() formGroup: FormGroup;
  ngOnInit() {
  }

}
