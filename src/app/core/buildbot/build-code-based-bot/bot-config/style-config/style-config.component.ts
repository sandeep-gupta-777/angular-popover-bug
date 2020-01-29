import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ServerService} from '../../../../../server.service';
import {debounce, debounceTime} from 'rxjs/operators';
import {EventService} from '../../../../../event.service';
import {UtilityService} from '../../../../../utility.service';

@Component({
  selector: 'app-style-config',
  templateUrl: './style-config.component.html',
  styleUrls: ['./style-config.component.scss']
})
export class StyleConfigComponent implements OnInit, AfterViewInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    private serverService: ServerService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      styleObj: JSON.stringify({
        'themeClass': {
          'font-family': '\'IBM Plex Sans\', sans-serif',
          'message-wrapper': {},
          '& .msg-bubble-human': {
            '& .content': {
              'background-color': '#268126 !important',
              'color': 'white',
              'border-radius': '20px 0 20px 20px !important',
              'border-top-left-radius': '20px !important'
            }
          },
          '& .message-container': {
            '& .content': {
              'background-color': '#fff',
              'color': '#4e4e4e',
              'padding': '12px !important',
              'borderRadius': '0 20px 20px 20px !important',
              'box-shadow': '0 1px 1px 0 rgba(0,0,0,.2) !important',
              '&::after': {
                'display': 'none !important'
              }
            },
            '& .message-wrapper-quick-reply': {
              '& button': {
                'background': '#268126',
                'border': 'solid 1px #268126',
                'color': 'white',
                'font-weight': 600,
                'border-radius': '10px',
                'padding': '10px 10px',
                '&:hover': {
                  'background': 'white',
                  'color': '#268126',
                  'transition': 'color .3s ease,background-color .3s ease'
                },
                'box-shadow': 'none !important'
              }
            },
            '& .time': {
              'display': 'none'
            }
          },
          '& .imi-preview-grid-container': {
            '& .header': {
              'backgroundColor': 'red',
              '& .options': {
                'display': 'none'
              },
              '& .bot-intro': {
                'background': 'none',
                '& #bot-title': {
                  'text-transform': 'uppercase',
                  'font-weight': 'bold !important'
                }
              }
            },
            '& .icon': {
              'margin-left': '-44px',
              'background': 'none',
              '& .fa': {
                'font-size': '25px',
                'color': '#717173'
              }
            },
            '& .footer': {
              'justify-content': 'center',
              'background': '#eee',
              'border-top': '1px solid #aaa !important',
              'box-shadow': '0 1px 5px 0 #9b9b9b !important',
              '& input': {
                'cursor': 'auto',
                'border-radius': '30px',
                'height': '45px',
                'background': '#fff',
                'padding': '5px 15px !important',
                'max-width': '70% !important',
                'min-width': '300px !important',
                '&::placeholder': {
                  'color': 'black !important',
                  'font-size': '10px'
                }
              }
            }
          }
        }
      }, null, '\t')
    });
    this.form.valueChanges.pipe(debounceTime(500)).subscribe((data) => {
      this.serverService.makePostReq({
          url: 'https://imi-bot-middleware.herokuapp.com/api/v1/socket/sendMessage',
          headerData: {
            'user-access-token': null,
            'auth-token': null,
            'imi_bot_middleware_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVGhpcyBpcyBJTUkgQk9UIG1pZGRsZXdhcmUiLCJpYXQiOjE1Njc4ODc5MTAsImV4cCI6NDE1OTg4NzkxMH0.dYbMaf8HYMD5K532p7DpHN0cmru-JKMjst-WS9zi7u8',
          },
          body: {
            'consumer': {
              'namespace': 'BOT'
            },
            'event': 'previewStyle',
            'payload': {
              'style': this.form.value.styleObj
            }
          }
        }
      ).subscribe(() => {

      });
    });
  }

  ngAfterViewInit(): void {
    this.utilityService.refreshCodeEditor$.emit();

  }

}
