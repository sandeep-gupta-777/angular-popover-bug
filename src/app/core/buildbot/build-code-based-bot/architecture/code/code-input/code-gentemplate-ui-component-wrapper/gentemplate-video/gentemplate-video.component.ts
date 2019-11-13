import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IBot} from '../../../../../../../interfaces/IBot';
import {IOutputItem} from '../../code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';
import {EBotMessageMediaType} from '../../../../../../../../../interfaces/chat-session-state';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-gentemplate-video',
  templateUrl: './gentemplate-video.component.html',
  styleUrls: ['./gentemplate-video.component.scss']
})
export class GentemplateVideoComponent implements OnInit {
  @Input() bot: IBot;
  @Input() outputItem: IOutputItem;
  @Input() type: EBotMessageMediaType;
  @ViewChild('media') media: ElementRef<any>;
  EBotMessageMediaType = EBotMessageMediaType;
  header = {
    video: {
      icon: 'videocam',
      text: 'Video',
    },
    audio: {
      icon: 'audiotrack',
      text: 'Audio',
    },
    image: {
      icon: 'photo',
      text: 'Image',
    },
    file: {
      icon: 'attach_file',
      text: 'File',
    },
    code: {
      icon: 'code',
      text: 'Code',
    }
  };

  constructor(private formBuilder: FormBuilder) {

  }

  form: FormGroup;

  ngOnInit() {
    let codeStr = '';
    let url = '';
    debugger;
    try {
      codeStr = this.outputItem.function_code;
    } catch (e) {
      console.log(e);
    }


    try {
      url = (this.outputItem.image || this.outputItem.audio || this.outputItem.video || this.outputItem.file)[0].url;
    } catch (e) {
      console.log(e);
    }
    // if (this.outputItem.media && this.outputItem.media[0]) {
    //   url = this.outputItem.media[0][this.type + '_url'];
    // }
    this.form = this.formBuilder.group({
      code: [codeStr || ''],
      url: [url]
    });

    this.form.valueChanges.subscribe((formData) => {

      if (this.type !== 'code') {
        this.outputItem[this.type][0]['url'] = formData.url;
        /*audio video need load after url is updated*/
        const audioVideo = this.media.nativeElement;
        audioVideo.load(); //call this to just preload the audio without playing
        audioVideo.play(); //call this to play the song right away
      } else {
        try {
          debugger;
          // const obj = JSON.parse(formData.code);
          // Object.assign(this.outputItem, obj);
          this.outputItem.function_code = formData.code;
        } catch (e) {
          console.log(e);
        }
      }
    });
  }

}
