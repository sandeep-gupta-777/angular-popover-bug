import {Component, Input, OnInit} from '@angular/core';
import {ServerService} from '../../server.service';
import {ILinkPreview} from '../../core/interfaces/meta';

@Component({
  selector: 'app-link-preview',
  templateUrl: './link-preview.component.html',
  styleUrls: ['./link-preview.component.scss']
})
export class LinkPreviewComponent implements OnInit {

  @Input() sourceType;
  @Input() link:string;
  linkPreviewData:ILinkPreview;
  constructor(private serverService:ServerService) { }

  ngOnInit() {
    if(this.link)
    this.serverService.getLinkMetaData(this.link)
        .subscribe((val:ILinkPreview)=>{
          this.linkPreviewData = val;
        },(err)=>{
          console.log(err)
        })
  }

}
