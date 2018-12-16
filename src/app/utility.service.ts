import {EventEmitter, Injectable} from '@angular/core';

export enum EBotType {
  chatbot = 'chatbot',
  intelligent = 'intelligent'
}

export enum EFormValidationErrors {
  form_validation_basic_info = 'form_validation_basic_info',
  form_validation_integration = 'form_validation_integration',
  form_validation_pipeline = 'form_validation_pipeline',
  form_validation_avator = 'form_validation_avator',
  form_validation_data_management = 'form_validation_data_management',
}

import downloadCsv from 'download-csv';
import {ActivatedRoute, Router} from '@angular/router';
import {IBot} from './core/interfaces/IBot';
import {IPipelineItem} from '../interfaces/ai-module';
import {IAnalysis2HeaderData} from '../interfaces/Analytics2/analytics2-header';
import {EBotMessageMediaType, IMessageData} from '../interfaces/chat-session-state';
import {IBotPreviewFirstMessage} from './chat/chat-wrapper.component';
import {IGeneratedMessageItem} from '../interfaces/send-api-request-payload';
import {StoreVariableService} from './core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/store--variable.service';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    // private toastr: ToastrService,
    private router: Router,
    public snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private storeVariableService: StoreVariableService,
  ) {
  }

  refreshCodeEditor$ = new EventEmitter();
  readonly RANDOM_IMAGE_URLS = [
    'https://robohash.org/StarDroid.png',
    'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
    'https://robohash.org/SmartDroid.png',
    'https://robohash.org/SilverDroid.png',
    'https://robohash.org/IntelliBot.png',
    'https://robohash.org/SmartBot.png',
    'https://robohash.org/SilverDroid.png',
    'https://robohash.org/SilverDroid.png',
  ];

  getRandomAvatorUrl() {
    const avatorArrLength = this.RANDOM_IMAGE_URLS.length;
    const randomNumber = Math.floor(Math.random() * avatorArrLength);
    return this.RANDOM_IMAGE_URLS[randomNumber];
  }

  getSmartTableRowCountPerPageByViewportHeight(): number {
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    if (h < 700) {
      return 10;
    } else if (h > 700 && h < 1000) {
      return 15;
    } else if (h > 1000) {
      return 20;
    }
    return 10;
  }

  masterIntegration_IntegrationKeyDisplayNameMap = null;

  getDisplayNameForKey_Integration(key: string) {

    const masterIntegrationList = this.storeVariableService.getApp().masterIntegrationList;
    if (!this.masterIntegration_IntegrationKeyDisplayNameMap) {
      this.masterIntegration_IntegrationKeyDisplayNameMap = masterIntegrationList.reduce((accumulator, currentVal) => {
        const x = currentVal.inputs.reduce((accObj, currObj) => {
          accObj[currObj.param_name] = currObj.display_text;
          return accObj;
        }, {});
        return {...accumulator, ...x};
      }, {});
    }
    return this.masterIntegration_IntegrationKeyDisplayNameMap[key];
  }

  getActiveVersionInBot(bot: IBot) {
    return bot.store_bot_versions && bot.store_bot_versions.find((BotVersion) => {
      return bot.active_version_id === BotVersion.id;
    });
  }

  serializeGeneratedMessagesToPreviewMessages(generatedMessage: IGeneratedMessageItem[], bot_message_id: number): IMessageData[] {
    return generatedMessage.map((message: IGeneratedMessageItem) => {

      let messageData:IMessageData = {
        ...message,
        bot_message_id,
        time: Date.now(),
        messageMediatype: null,
        sourceType: 'bot'
      };

      if (Object.keys(message)[0] === 'media') {
        messageData =  {
          ...messageData,
          messageMediatype: message.media[0].type,
          text: EBotMessageMediaType.image, //this is for preview of last message in chat room list
        };
      } else if (Object.keys(message)[0] === 'quick_reply') {
        messageData = {
          ...messageData,
          messageMediatype: EBotMessageMediaType.quickReply, //
          text: (<any>message).quick_reply.text || EBotMessageMediaType.quickReply, //this is for preview of last message in chat room list
        };
      }else {
        /*if message type = text*/
        messageData = {
          ...messageData,
          messageMediatype: EBotMessageMediaType.text,
        };
      }

      return messageData;


    });
  }


  readInputFileAsText(inputElement): Promise<any> {
    return new Promise((resolve, reject) => {
      const input = inputElement; //event.target;
      for (let index = 0; index < input.files.length; index++) {
        const reader = new FileReader();
        reader.onload = () => {
          // this 'text' is the content of the file
          const text = reader.result;
          // this.editorCode= text;
          resolve(text);
        };
        reader.readAsText(input.files[index]);
      }
    });
  }

  getPriorDate(days_before: number) {
    let today: any = new Date(Date.now() - days_before * 24 * 3600 * 1000);
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1; //January is 0!
    const yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    return (today = dd + '/' + mm + '/' + yyyy);
  }

  convertDateObjectStringToDDMMYY(dateStr: string = '') {
    let today: any = dateStr ? new Date(dateStr) : new Date();

    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1; //January is 0!
    const yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    return (today = dd + '/' + mm + '/' + yyyy);

  }

  convertDateObjectStringToMMDDYY(dateStr: Date) {
    let today: any = new Date(dateStr);

    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1; //January is 0!
    const yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    return (today = mm + '/' + dd + '/' + yyyy);

  }

  convertMsToSec(ms: number) {
    // return ms/?
  }

  copyToClipboard(text) {
    if ((<any>window).clipboardData && (<any>window).clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      return (<any>window).clipboardData.setData('Text', text);

    } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      const textarea = document.createElement('textarea');
      textarea.textContent = text;
      textarea.style.position = 'fixed';  // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        this.showSuccessToaster('Copied');
        return document.execCommand('copy');  // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn('Copy to clipboard failed.', ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }


  findDataByName(convertedData, name) {
    for (let i = 0; i < convertedData.length; ++i) {
      if (convertedData[i].name === name) {
        return convertedData[i].data;
      }
    }
  }

  createChartValueForBarGraph(rawData: { labels: string, result: number }[], chartValue?: { xAxis: { categories: string[] }, series: { name: string, data: number[] }[] }) {

    const template: any = {};
    /*
    * example output:
    * [{
  name: 'John',
  data: [5, 3, 4, 7, 2]
}]

    * */
    // let template = {
    //   chart: {
    //     type: 'column'
    //   },
    //   title: {
    //     text: 'Stacked column chart'
    //   },
    //   xAxis: {
    //     categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    //   },
    //   yAxis: {
    //     min: 0,
    //     title: {
    //       text: 'Total fruit consumption'
    //     },
    //     stackLabels: {
    //       enabled: true,
    //       style: {
    //         fontWeight: 'bold',
    //         color: 'gray'
    //       }
    //     }
    //   },
    //   legend: {
    //     align: 'right',
    //     x: -30,
    //     verticalAlign: 'top',
    //     y: 25,
    //     floating: true,
    //     backgroundColor: 'white',
    //     borderColor: '#CCC',
    //     borderWidth: 1,
    //     shadow: false
    //   },
    //   tooltip: {
    //     headerFormat: '<b>{point.x}</b><br/>',
    //     pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    //   },
    //   plotOptions: {
    //     column: {
    //       stacking: 'normal',
    //       dataLabels: {
    //         enabled: true,
    //         color: 'white'
    //       }
    //     }
    //   },
    //   series: [{
    //     name: 'John',
    //     data: [5, 3, 4, 7, 2]
    //   }]
    // };

    const categories: string[] = rawData.map(dataItem => dataItem.labels);
    const seriesData: number[] = rawData.map(dataItem => dataItem.result);
    template.xAxis.categories = categories;
    template.series[0].data = seriesData;
    template.series[0].name = 'test';

    return template;
  }

  createTemplateKeyArr(generation_templates) {
    const str = generation_templates;

    // let regex = /e?l?if.+?:/g;
    // let regex = /e?l?s?e?if\s?.+?:/g;
    const regex = /e?l?s?e?if[\s]*?\(\s?.+?:/g;

    let match = regex.exec(str);

    const templateKeys = [];
    while (match) {
      let templateKey, matchedStr = match[0];
      const matchedStrSplitArr = matchedStr.split('==');
      if (matchedStrSplitArr[0].includes('variables')) {
        templateKey = matchedStrSplitArr[1].replace(')', '').replace(':', '').trim();
      } else {
        templateKey = matchedStrSplitArr[0].replace(')', '').replace(':', '').trim();
      }
      templateKeys.push(eval(templateKey));
      match = regex.exec(str);
    }
    return templateKeys;
  }

  createOutputArr(generation_templates) {
    const str = generation_templates + 'elif'; //TODO: adding elif is a hack

    // let regex = /output\s=\s([\s\S]*?)\selif/g;
    // let regex = /output[\s\S]*?]$/gm;
    //   let regex = /output\s=([\s\S]*?])$/gm;
    //   let regex = /output[\s]*=[\s]*([\s\S]*?[\s\S]$)/gm;//https://regex101.com/r/moAq3A/1/
    // let regex = /output[\s]*=([\s]*\[.*?\].*?\n|[\s\S]*?[\s\S]$)/gms;//https://regex101.com/r/WXGF5J/4
    const regex = /output[\s]*?=[\s]*?([\s\S]*?)els?e?if/gm;

    let match = regex.exec(str);

    const outputsKeys = [];
    while (match) {
      let output, matchedStr = match[1];
      const matchedAndProcessedStr = matchedStr.trim();
      outputsKeys.push(matchedAndProcessedStr);
      match = regex.exec(str);
    }
    return outputsKeys;
  }


  parseGenTemplateCodeStrToObject(generation_templates: string) {

    const templateKeyOutputObj = {};
    // let countOf_templateKey_stringInGenTemplateCodeStr = gener
    try {

      const templates: string[] = this.createTemplateKeyArr(generation_templates);
      const outputs: string[] = this.createOutputArr(generation_templates);
      for (let i = 0; i < templates.length; ++i) {
        try {
          templateKeyOutputObj[templates[i]] = eval(outputs[i]);
        } catch (e) {
          templateKeyOutputObj[templates[i]] = outputs[i];
        }
      }
    } catch (e) {
      console.log(e);
    }

    return templateKeyOutputObj;

  }

  parseGenTemplateUiDictionaryToIfElseCode(uiDictionary: object) {
    try {
      let genTemplateCodeStr = '';
      Object.keys(uiDictionary).forEach((templateKey, index) => {
        // let templateKey = Object.keys(templateKeys);
        let elIfStr = '';
        if (index === 0) {
          elIfStr = `if(variables['templateKey'] == '${templateKey}'):\n`;
        } else {
          elIfStr = `\nelif(variables['templateKey'] == '${templateKey}'):\n`;
        }
        const outputValues = uiDictionary[templateKey];
        let outPutStr;
        if (typeof outputValues === 'string') {
          outPutStr = `  output = ${outputValues}`;
        } else {
          outPutStr = `  output = ${JSON.stringify(outputValues)}`;
        }
        genTemplateCodeStr += elIfStr + outPutStr;
      });
      return genTemplateCodeStr;
    } catch (e) {
      console.log(e);
    }

  }

  doesStringIncludesSubstring(string, subString) {
    try {
      return !string || !subString ? false : string.includes(subString);
    } catch (e) {
      return false;
    }
  }


  appendChartValueAndSeries(xAndYValues: any, chartValue) {
    return {
      ...chartValue,
      ...xAndYValues
    };
  }


  convertDateTimeGraph(
    rawData: { activesessions: number, labels: string, totalsessions: number }[],
    xAxisLabel: string,
    startTime_ms: number = Date.UTC(2010, 0, 2), //Date.UTC(2010, 0, 2),
    granularity_Ms: number = 24 * 3600 * 1000  // one day
  ) {

    if (!rawData) {
      return;
    }
    const template = {
      xAxis: {
        type: 'datetime'
      },

      plotOptions: {
        series: {
          pointStart: startTime_ms, //Date.UTC(2010, 0, 2),
          pointInterval: granularity_Ms//24*3600*1000  // one day
        }
      },

      series: [{
        name: 'sandeep',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }, {
        name: 'gupta',
        data: [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2]
      }]
    };

    // let categoriesString = rawData.map((dataItem) => dataItem.labels);
    const seriesArr = [];
    /*initialize the seriesArr*/
    Object.keys(rawData[0]).forEach((value) => {
      if (value === 'labels') {
        return;
      }
      seriesArr.push({
        name: value, //y1
        data: []//[(xi,y1i)]
      });
    });
    /*now loop over rawData and fill convertedData's data array*/
    rawData.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        if (key === xAxisLabel) {
          return;
        }
        const data = this.findDataByName(seriesArr, key);
        // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
        data.push(obj[key]); //pushing a new coordinate
      });
    });

    template.series = seriesArr;
    return template;
  }

  convert_xAxisText(rawData: { activesessions: 0, labels: '03:00', totalsessions: 0 }[], xAxisLabel: string) {

    const categoriesString = rawData.map((dataItem) => dataItem.labels);
    const seriesArr = [];
    /*initialize the convertedData*/
    Object.keys(rawData[0]).forEach((value) => {
      if (value === 'labels') {
        return;
      }
      seriesArr.push({
        name: value, //y1
        data: []//[(xi,y1i)]
      });
    });
    /*now loop over rawData and fill convertedData's data array*/
    rawData.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        if (key === xAxisLabel) {
          return;
        }
        const data = this.findDataByName(seriesArr, key);
        // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
        data.push(obj[key]); //pushing a new coordinate
      });
    });

    const template = {
      xAxis: {
        categories: categoriesString, //['apple', 'orange', 'mango'],
        tickInterval: 1,
        labels: {
          enabled: true
        }
      },
      series: seriesArr
    };

    return template;
  }

  convert(rawData, xAxisLabel: string, labelType: string) {
    const convertedData = [];
    /*initialize the convertedData*/
    Object.keys(rawData[0]).forEach((value) => {
      if (value === 'labels') {
        return;
      }
      convertedData.push({
        name: value, //y1
        data: []//[(xi,y1i)]
      });
    });
    if (labelType === 'Time') {
      /*now loop over rawData and fill convertedData's data array*/
      rawData.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          if (key === xAxisLabel) {
            return;
          }
          const data = this.findDataByName(convertedData, key);
          // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
          const dateStr_ddmmyyyy = obj[xAxisLabel];
          const hh = dateStr_ddmmyyyy.split(':')[1];
          const mm = dateStr_ddmmyyyy.split(':')[0];
          const ms = hh * 3600 * 1000 + mm * 60 * 1000;
          if (data) {/*This fix is done for new keys which were not in rawdata[0]. They will be ignored*/
            data.push([ms, obj[key]]);
          }//pushing a new coordinate
        });
      });
    }
    if (labelType === 'Date') {
      /*now loop over rawData and fill convertedData's data array*/
      rawData.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          if (key === xAxisLabel) {
            return;
          }
          const data = this.findDataByName(convertedData, key);
          // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
          const dateStr_ddmmyyyy = obj[xAxisLabel];
          const dd = dateStr_ddmmyyyy.split('-')[2];
          const mm = dateStr_ddmmyyyy.split('-')[1];
          const yyyy = dateStr_ddmmyyyy.split('-')[0];
          const dateStr_mmddyyyy = `${mm}/${dd}/${yyyy}`;
          const ms = Date.parse(dateStr_mmddyyyy);
          if (data) {/*This fix is done for new keys which were not in rawdata[0]. They will be ignored*/
            data.push([ms, obj[key]]);
          }//pushing a new coordinate
        });
      });
    }
    if (labelType === 'String') {
      rawData.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          if (key === xAxisLabel) {
            return;
          }
          const data = this.findDataByName(convertedData, key);
          // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
          // let dateStr_ddmmyyyy = obj[xAxisLabel];
          // let hh = dateStr_ddmmyyyy.split(':')[1];
          // let mm = dateStr_ddmmyyyy.split(':')[0];
          // let ms = hh*3600*1000 + mm*60*1000;
          if (data) {/*This fix is done for new keys which were not in rawdata[0]. They will be ignored*/
            data.push([obj[xAxisLabel], obj[key]]);
          }//pushing a new coordinate
        });
      });
    }
    return convertedData;
  }

  createDeepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  showErrorToaster(message:string, sec = 4) {
    try {
      this.snackBar.open(message, '', {
        duration: (sec * 1000)||2000,
        panelClass:["bg-theme-danger"]
      });
    }catch (e) {
      console.log(e);
    }
    // if (typeof message === 'string') {
    //   // this.toastr.error(message, null, {positionClass: 'toast-top-right', timeOut: sec * 1000});
    //   this.snackBar.open(message, '', {
    //     duration: (sec * 1000)||2000,
    //     panelClass:["bg-success"]
    //   });
    //   return;
    // } else {
    //   this.snackBar.open(message.message, '', {
    //     duration: (sec * 1000)||2000,
    //     panelClass:["bg-success"]
    //   });
    //   this.toastr.error(message.message, null, {positionClass: 'toast-top-right', timeOut: sec * 1000});
    // }
  }

  showInfoToaster(message) {
    // this.toastr.info(message, null, {positionClass: 'toast-top-right', timeOut: 2000});
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass:["bg-success"]
    });
  }

  showSuccessToaster(message) {
    // this.toastr.success(message, null, {positionClass: 'toast-top-right', timeOut: 2000});
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass:["bg-success"]
    });
  }

  renameKeyInObject(o, old_key, new_key) {
    if (old_key !== new_key) {
      Object.defineProperty(o, new_key,
        Object.getOwnPropertyDescriptor(o, old_key));
      delete o[old_key];
    }
  }

  imageUrlHttpsError(formControl: FormControl) {
    const url: string = formControl.value;
    const pattern = /^((https):\/\/)/;

    return pattern.test(url) ? null : {'Must be Https Url': true};
  }

  imageUrlHavingValidExtnError(formControl: FormControl) {
    const url: string = formControl.value;
    const pattern = /\.(gif|jpg|jpeg|tiff|png)$/i;
    return pattern.test(url) ? null : {'Image Extension is not correct': true};
  }

  isManagerValidator(formGroup: FormGroup) {
    const formValue = formGroup.value;
    const is_manager = formValue['is_manager'];
    const child_bots = formValue['child_bots'];
    /*if is_manager = true, child_bots should have at least one value*/
    return (!is_manager || is_manager && (child_bots.length > 0)) ? null : {'isManagerError': true};
  }

  pushFormControlItemInFormArray(formArray: FormArray, formBuilder: FormBuilder, item: any) {
    formArray.push(formBuilder.control(item));
  }

  pushFormGroupItemInFormArray(formArray: FormArray, formBuilder: FormBuilder, item: any) {
    formArray.push(formBuilder.group(item));
  }

  createRandomUid() {
    return Date.now().toString();
  }

  convertGranularityStrToMs(granularity: string): number {
    if (granularity === 'hour') {
      return 3600 * 1000;
    }
    if (granularity === 'day') {
      return 24 * 3600 * 1000;
    }
    if (granularity === 'month') {
      return 30 * 24 * 3600 * 1000;
    }
    if (granularity === 'year') {
      return 365 * 24 * 3600 * 1000;
    }
    // if(granularity==='day'){
    //   return 24*3600*1000;
    // }
  }

  createRandomString(length: number = 10) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  getCurrentTimeInHHMM() {
    const date = new Date();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return hours + ':' + minutes;
  }


  downloadText(text, filename) {
    const saveData = (function () {
      const a: any = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      return function (data, fileName) {
        const blob = new Blob([text], {type: 'octet/stream'}),
          url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      };
    }());

    // var data = { x: 42, s: "hello, world", d: new Date() },
    saveData(null, filename);
    // LoggingService.log(value);
  }

  downloadArrayAsCSV(data: any[] = [], columns: object = {}) {
    // data = [
    //  { name: 'test1', score: 1, level: 'Z' },
    //  { name: 'test2', score: 2 },
    //  { name: 'test3', score: 3 },
    //  { name: 'test4', score: 4 },
    // ];
    //
    // columns = { name: '姓名', score: '分数' };

    downloadCsv(data, columns);
  }

  areAllAvatorValesDefined(headerObj: object) {
    for (const key in headerObj) {
      if (headerObj[key] == null || headerObj[key] === '') {//0!==null but 0==""
        return false;
      }
    }
    return true;
  }

  areAllValesDefined(headerObj: object) {
    const headerDataTemplate: IAnalysis2HeaderData = {
      'bot-access-token': null,
      type: null,
      enddate: null,
      startdate: null,
      'auth-token': null,
      'user-access-token': null,
      granularity: null
    };
    headerObj = {...headerDataTemplate, ...headerObj};
    for (const key in headerObj) {
      if (headerObj[key] == null || headerObj[key] === '') {//0!==null but 0==""
        return false;
      }
    }
    return true;
  }

  addQueryParamsInCurrentRoute(queryParamObj: object) {
    this.router.navigate(['.'], {queryParams: queryParamObj, relativeTo: this.activatedRoute});
  }

  isAtleastOneValueIsDefined(obj) {
    if (!obj) return false;
    for (let key in obj) {
      if (obj[key]) return true;
    }
    return false;
  }


  findFormControlIndexInFormArrayByValue(formArray: FormArray, value): number {
    let i = 0;
    for (const control of formArray.controls) {
      if (control instanceof FormControl) {
        if (control.value === value) {
          return i;
        }
      }
      if (control instanceof FormGroup) {
        // is a FormGroup
      }
      if (control instanceof FormArray) {
        // is a FormArray
      }
      ++i;
    }
  }

  areTwoJSObjectSame(obj1, obj2) {
    try {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    } catch (e) {
      return false;
    }
  }

  emptyObjectWithoutChaningRef(obj) {
    try {
      for (const key in obj) {
        delete obj[key];
      }
    } catch (e) {
      console.log(e);
    }
  }

  getGlobalErrorMap() {
    const errorObj = {};
    errorObj[EFormValidationErrors.form_validation_basic_info] = 'Basic info form is not valid';
    errorObj[EFormValidationErrors.form_validation_integration] = 'Integration form is not valid';
    errorObj[EFormValidationErrors.form_validation_pipeline] = 'Pipeline is not valid';
    errorObj[EFormValidationErrors.form_validation_avator] = 'Avators are either invalid or empty';
    errorObj[EFormValidationErrors.form_validation_data_management] = 'Data Management form is invalid';
    return errorObj;
  }

  getErrorMessageForValidationKey(key) {
    const errorMap = this.getGlobalErrorMap();
    return errorMap[key];
  }

  checkIfAllPipelineInputParamsArePopulated(pipeline: IPipelineItem[]): boolean {

    const inputParamsObj: object = pipeline.reduce((inputParamsObj, pipelineItem) => {
      return {...inputParamsObj, ...pipelineItem.input_params};
    }, {});

    for (const param in inputParamsObj) {
      if (inputParamsObj[param] == null) {
        return false;
      }
    }
    return true;
  }

  performFormValidationBeforeSaving(obj: IBot): IBot {
    const objShallowClone = {...obj};
    const validation_Keys: string[] = Object.keys(objShallowClone).filter((key) => {
      return key.includes('form_validation_');
    });
    for (const key of validation_Keys) {
      if (!objShallowClone[key]) {
        const errorMessage = this.getErrorMessageForValidationKey(key);
        this.showErrorToaster(errorMessage);
        return null;
      }
      delete  objShallowClone[key];
    }
    return objShallowClone;
  }

  serializeServerValueToChatRoomMessages(value: IBotPreviewFirstMessage) {
    const roomMessages: IMessageData[] = value.generated_msg.map((item: { text: string }) => {
      return {
        text: item.text,
        sourceType: 'bot',
        messageMediatype: EBotMessageMediaType.text,
        time: Date.now(),//this.getCurrentTimeInHHMM()/*todo: change it to real time*/
        bot_message_id: null,
      };
    });
    return roomMessages;
  }

  /* View in fullscreen */
  openFullscreen() {

    const elem: any = document.documentElement;
    if (elem.requestFullscreen) {
      const x = elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      const x = elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      const x = elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      const x = elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    const myDocument: any = document;
    if (myDocument.exitFullscreen) {
      const x = myDocument.exitFullscreen();
    } else if (myDocument.mozCancelFullScreen) { /* Firefox */
      const x = myDocument.mozCancelFullScreen();
    } else if (myDocument.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      const x = myDocument.webkitExitFullscreen();
    } else if (myDocument.msExitFullscreen) { /* IE/Edge */
      const x = myDocument.msExitFullscreen();
    }

  }

  deDupPrimitiveArray(arr: any[]) {
    return Array.from(new Set(arr));
  }

  openDialog(dialogOptions: { dialog, component, data?: any, classStr, dialogRefWrapper?: { ref: any } }): Promise<any> {
    //data: { message?: string, title?: string, actionButtonText?: string, isActionButtonDanger?:boolean }
    let {dialog, component, data, classStr, dialogRefWrapper} = dialogOptions;
    try {
      dialogRefWrapper.ref.close();//closing any previous modals
    } catch (e) {
      console.log(e);
    }
    const dialogRef = dialog.open(component, {
      data,
      panelClass: classStr//'primary-modal-header-border'
    });
    dialogRefWrapper.ref = dialogRef;

    return new Promise((resolve, reject) => {
      dialogRef.afterClosed().subscribe((botType: string) => {
        resolve(botType);
      });
    });

  }

  static hasRequiredField(abstractControl: NgControl): boolean{

    if (abstractControl.validator) {
      const validator = abstractControl.validator({}as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    if (abstractControl['controls']) {
      for (const controlName in abstractControl['controls']) {
        if (abstractControl['controls'][controlName]) {
          if (this.hasRequiredField(abstractControl['controls'][controlName])) {
            return true;
          }
        }
      }
    }
    return false;
  };


}
