import {EventEmitter, Injectable} from '@angular/core';
import downloadCsv from 'download-csv';
import {ActivatedRoute, Router} from '@angular/router';
import {IBot} from './core/interfaces/IBot';
import {IPipelineItem} from '../interfaces/ai-module';
import {IAnalysis2HeaderData} from '../interfaces/Analytics2/analytics2-header';
import {EBotMessageMediaType, IMessageData} from '../interfaces/chat-session-state';
import {IBotPreviewFirstMessage} from './chat/chat-wrapper.component';
import {IGeneratedMessageItem} from '../interfaces/send-api-request-payload';
import {StoreVariableService} from './core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/store--variable.service';
import {AbstractControl, FormArray, FormControl, FormGroup, NgControl, NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {ModalConfirmComponent} from './modal-confirm/modal-confirm.component';
import {LoggingService} from './logging.service';

const uuidv1 = require('uuid/v4');

export enum EBotType {
  chatbot = 'chatbot',
  intelligent = 'intelligent',
  faqbot = 'faqbot'
}

export enum EFormValidationErrors {
  form_validation_basic_info = 'form_validation_basic_info',
  form_validation_integration = 'form_validation_integration',
  form_validation_pipeline = 'form_validation_pipeline',
  form_validation_avator = 'form_validation_avator',
  form_validation_data_management = 'form_validation_data_management',
}


@Injectable()
export class UtilityService {


  constructor(
    // private toastr: ToastrService,
    private router: Router,
    public snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    // private formBuilder: FormBuilder,
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

  masterIntegration_IntegrationKeyDisplayNameMap = null;


  static generateUUid() {
    return uuidv1();
  }

  static removeAllNonDefinedKeysFromObject(obj: object) {
    for (const key of Object.keys(obj)) {
      if (obj[key] === undefined || obj[key] === null || obj[key] === '') {
        delete obj[key];
      }
    }
    return obj;
  }

  static areAllElementsInArrUnique(arr: any[]): boolean {
    return (new Set(arr)).size === arr.length;
  }


  static getEnabledChannelsInBot(bot: IBot): { name: string, displayName: string }[] {
    if (!bot || bot.integrations && bot.integrations.channels) {
      return [];
    }
    return Object.keys(bot.integrations.channels)
      .map((integrationKey) => {
        return {
          name: integrationKey,
          displayName: integrationKey
        };
      })
      .filter((enabledIntegrations) => bot.integrations.channels[enabledIntegrations.name].enabled);
  }


  // tslint:disable-next-line:member-ordering
  public static convertCsvTextToArray(csv: string): string[][] {
    let lines = csv.split('\n');
    lines = lines.map((line) => line.trim());
    const arr: string[][] = [];
    for (let i = 0; i < lines.length; ++i) {
      arr.push(lines[i].split(','));
    }
    return arr;
  }

  public static convertCsvToJson(csv) {
    const lines = csv.split('\n');
    const result = [];
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      const obj = {};

      const row = lines[i];
      let queryIdx = 0;
      let startValueIdx = 0;
      let idx = 0;

      if (row.trim() === '') {
        continue;
      }

      while (idx < row.length) {
        /* if we meet a double quote we skip until the next one */
        let c = row[idx];

        if (c === '"') {
          do {
            c = row[++idx];
          } while (c !== '"' && idx < row.length - 1);
        }

        if (c === ',' || /* handle end of line with no comma */ idx === row.length - 1) {
          /* we've got a value */
          let value = row.substr(startValueIdx, idx - startValueIdx).trim();

          /* skip first double quote */
          if (value[0] === '"') {
            value = value.substr(1);
          }
          /* skip last comma */
          if (value[value.length - 1] === ',') {
            value = value.substr(0, value.length - 1);
          }
          /* skip last double quote */
          if (value[value.length - 1] === '"') {
            value = value.substr(0, value.length - 1);
          }

          const key = headers[queryIdx++];
          obj[key] = value;
          startValueIdx = idx + 1;
        }

        ++idx;
      }

      result.push(obj);
    }
    return result;
  }

  static cloneObj(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  // getCodeInputForm() {
  //   let codeInputForm = this.formBuilder.group({
  //     df_template: [""],
  //     df_rules: [""],
  //     generation_rules: [""],
  //     generation_templates: [""],
  //     workflow: [""],
  //     is_ui_view:'',
  //   });
  //
  //   return codeInputForm;
  // }

  static removeEmptyKeyValues(valClone) {
    for (const key in valClone) {
      if (!valClone[key]) {/*if value is "" or undefined */
        delete valClone[key];
      }
    }
    return valClone;
  }

  static trimAllObjValues(obj: object) {
    for (const key in obj) {
      if (obj[key] && obj[key].trim) {
        obj[key] = obj[key].trim();
      }
    }
    return obj;
  }

  static getEnabledIntegrations(bot: IBot) {
    const allIntegrations = {
      ...bot.integrations.ccsp_details,
      ...bot.integrations.channels,
      ...bot.integrations.fulfillment_provider_details,
    };

    return Object.keys(allIntegrations).reduce((total, key) => {
      if (allIntegrations[key].enabled) {
        return {...total, [key]: allIntegrations[key]};
      }
      return total;
    }, {});
  }


  /*
  * spaceCase:
  * Example: sandeep_gupta => Sandeep Gupta
  * */
  static spaceCase(str: string, delimiter: string) {
    if (!str) {
      return '';
    }
    return str.split(delimiter).map((str_temp) => str_temp[0].toUpperCase() + str_temp.slice(1)).join(' ');
  }

  static getCombinedBotData(forms: (FormGroup | NgForm)[]): IBot {
    return forms.reduce((aggr, form) => {
      return {
        ...aggr,
        /*getRawValue vs value
        * Value doesnt return disabled formcontrols
        * */
        ...((form as any).getRawValue ? (form as any).getRawValue() : form.value)
      };
    }, {});
  }


  /*
  * isObjectSubSet:
  * check if smaller object (obj2) is perfect subset of larger object (obj1)
  * */
  static isObjectSubSet(largeObj, smallObj) {
    const obj1_temp = {};
    for (const key of Object.keys(smallObj)) {
      obj1_temp[key] = largeObj[key];
    }
    const x = UtilityService.deepCompare(obj1_temp, smallObj);

    return x;
  }

  /**
   * highlightText: case insensitive highlights
   * @param string: text to be highlighted
   * @param keyword keyword
   */
  static highlightText(string: string, keyword: string) {
    if (!string || !keyword) {
      return string;
    }
    /*
    * Example usage of $1 to get capturing group
    * "HELLO".replace(/(hell)o/i,`$1sdasdadas`);
    * */
    return string.replace(new RegExp(`(${keyword})`, 'ig'), `<span class="text-highlight">$1</span>`);
  }

  static hasRequiredField(abstractControl: NgControl): boolean {

    if (abstractControl.validator) {
      const validator = abstractControl.validator({} as AbstractControl);
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
  }


  static replaceHrefWithAnchorTag(str) {
    if (!str) {
      return;
    }
    const regex: RegExp = /http[s]?:\/\/[\w,.]+/gm;
    // str.replace(, "SO");
    regex.exec(str);
  }


  /*
  * linkify: replaces all texts to <a> links in a string
  * */
  static linkify(inputText, className) {
    let replacedText, replacePattern1, replacePattern2;

    // URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, `<a href="$1" target="_blank" class="${className}">$1</a>`);

    // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, `$1<a href="http://$2" class="${className} target="_blank">$2</a>`);

    // Change email addresses to mailto:: links.
    // replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    // replacedText = replacedText.replace(replacePattern3, `<a href="mailto:$1" class="${className}>$1</a>`);

    console.log(replacedText);
    return replacedText;

  }

  static getLinksInText(str: string): string[] {
    const replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    let match = replacePattern1.exec(str);

    const links = [];
    while (match) {
      const matchedStr = match[0];
      links.push(matchedStr);
      match = replacePattern1.exec(str);
    }
    return links;

  }


  static deepCompare(x, y): boolean {

    let i, l, leftChain, rightChain;

    function compare2Objects(x_temp, y_temp) {
      let p;

      // remember that NaN === NaN returns false
      // and isNaN(undefined) returns true
      if (isNaN(x_temp) && isNaN(y_temp) && typeof x_temp === 'number' && typeof y_temp === 'number') {
        return true;
      }

      // Compare primitives and functions.
      // Check if both arguments link to the same object.
      // Especially useful on the step where we compare prototypes
      if (x_temp === y_temp) {
        return true;
      }

      // Works in case when functions are created in constructor.
      // Comparing dates is a common scenario. Another built-ins?
      // We can even handle functions passed across iframes
      if ((typeof x_temp === 'function' && typeof y_temp === 'function') ||
        (x_temp instanceof Date && y_temp instanceof Date) ||
        (x_temp instanceof RegExp && y_temp instanceof RegExp) ||
        (x_temp instanceof String && y_temp instanceof String) ||
        (x_temp instanceof Number && y_temp instanceof Number)) {
        return x_temp.toString() === y_temp.toString();
      }

      // At last checking prototypes as good as we can
      if (!(x_temp instanceof Object && y_temp instanceof Object)) {
        return false;
      }

      if (x_temp.isPrototypeOf(y_temp) || y_temp.isPrototypeOf(x_temp)) {
        return false;
      }

      if (x_temp.constructor !== y_temp.constructor) {
        return false;
      }

      if (x_temp.prototype !== y_temp.prototype) {
        return false;
      }

      // Check for infinitive linking loops
      if (leftChain.indexOf(x_temp) > -1 || rightChain.indexOf(y_temp) > -1) {
        return false;
      }

      // Quick checking of one object being a subset of another.
      // todo: cache the structure of arguments[0] for performance
      for (p of Object.keys(y_temp)) {
        if (y_temp.hasOwnProperty(p) !== x_temp.hasOwnProperty(p)) {
          return false;
        } else if (typeof y_temp[p] !== typeof x_temp[p]) {
          return false;
        }
      }

      for (p of Object.keys(x_temp)) {
        if (y_temp.hasOwnProperty(p) !== x_temp.hasOwnProperty(p)) {
          return false;
        } else if (typeof y_temp[p] !== typeof x_temp[p]) {
          return false;
        }

        switch (typeof (x_temp[p])) {
          case 'object':
          case 'function':

            leftChain.push(x_temp);
            rightChain.push(y_temp);

            if (!compare2Objects(x_temp[p], y_temp[p])) {
              return false;
            }

            leftChain.pop();
            rightChain.pop();
            break;

          default:
            if (x_temp[p] !== y_temp[p]) {
              return false;
            }
            break;
        }
      }

      return true;
    }

    if (arguments.length < 1) {
      return true; // Die silently? Don't know how to handle such case, please help...
      // throw "Need two or more arguments to compare";
    }

    for (i = 1, l = arguments.length; i < l; i++) {

      leftChain = []; // Todo: this can be cached
      rightChain = [];

      if (!compare2Objects(arguments[0], arguments[i])) {
        return false;
      }
    }

    return true;
  }

  public openPrimaryModal(IntentModal, matDialog, dialogRefWrapper) {
    return this.openDialog({
      dialog: matDialog,
      component: IntentModal,
      data: null,
      dialogRefWrapper: dialogRefWrapper,
      classStr: 'primary-modal-header-border'
    });
  }

  openDangerModal(IntentModal, matDialog, dialogRefWrapper, classStr?: { class: string }) {
    return this.openDialog({
      dialog: matDialog,
      component: IntentModal,
      data: null,
      dialogRefWrapper: dialogRefWrapper,
      classStr: 'danger-modal-header-border'
    });
  }

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

  /**
   *  getVersion
   *  @deprecated: Use CodeInputService.getVersion instead
   * */
  getActiveVersionInBot(bot: IBot) {
    return bot.store_bot_versions && bot.store_bot_versions.find((BotVersion) => {
      return bot.active_version_id === BotVersion.id;
    });
  }

  serializeGeneratedMessagesToPreviewMessages(generatedMessage: IGeneratedMessageItem[], bot_message_id: number, response_language?): IMessageData[] {
    return generatedMessage.map((message: IGeneratedMessageItem, index) => {
      const isLast = index === generatedMessage.length - 1;
      let messageData: IMessageData = {
        ...message,
        bot_message_id,
        time: Date.now(),
        messageMediatype: null,
        sourceType: 'bot',
        isLast,
        response_language
      };

      if (Object.keys(message)[0] === 'media') {
        messageData = {
          ...messageData,
          messageMediatype: message.media[0] && message.media[0].type,
          text: EBotMessageMediaType.image, // this is for preview of last message in chat room list,
        };
      } else if (Object.keys(message)[0] === 'quick_reply') {
        messageData = {
          ...messageData,
          messageMediatype: EBotMessageMediaType.quickReply, //
          text: (<any>message).quick_reply.text || EBotMessageMediaType.quickReply, // this is for preview of last message in chat room list
        };
      } else {
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
      const input = inputElement; // event.target;
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
    const today: any = new Date(Date.now() - days_before * 24 * 3600 * 1000);
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1; // January is 0!
    const yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    return (dd + '/' + mm + '/' + yyyy);
  }

  convertDateObjectStringToDDMMYY(dateStr: any = '', delimiter = '/') {
    const today: any = dateStr ? new Date(dateStr) : new Date();

    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1; // January is 0!
    const yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    return (dd + delimiter + mm + delimiter + yyyy);

  }

  convertDateObjectStringToYYYYMMDD(dateStr: any = '', delimiter = '/') {
    let today: any = dateStr ? new Date(dateStr) : new Date();

    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1; // January is 0!
    const yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    return (today = yyyy + delimiter + mm + delimiter + dd);

  }

  convertDateObjectStringToMMDDYY(dateStr: Date, delimiter = '/') {
    let today: any = new Date(dateStr);

    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1; // January is 0!
    const yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    return (today = mm + delimiter + dd + delimiter + yyyy);

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
    // const regex = /e?l?s?e?if[\s]*?\(\s?.+?:/g;
    // simple
    // const regex = /(e?l?if([\s]*?.+)==[\s]*?.+|else):/g;
    // including line breakes
    const regex = /(e?l?if[\s]*?.+==[\s]*?(.+)|else):(\n+)/g;
    let match = regex.exec(str);

    const templateKeys = [];
    while (match) {

      let templateKey;
      if (match[2]) {
        templateKey = match[2].replace(/\)/g, '').replace(/\'/g, '').trim();
      } else {
        templateKey = match[1].replace(/\)/g, '').replace(/\'/g, '').trim();
      }
      // let templateKey, matchedStr = match[0];
      // const matchedStrSplitArr = matchedStr.split('==');
      // if (matchedStrSplitArr[0].includes('variables')) {
      //   templateKey = matchedStrSplitArr[1].replace(')', '').replace(':', '').trim();
      // } else {
      //   templateKey = matchedStrSplitArr[0].replace(')', '').replace(':', '').trim();
      // }
      templateKeys.push(templateKey);
      match = regex.exec(str);
    }
    return templateKeys;
  }

  createOutputArr(generation_templates) {
    const str = generation_templates; // TODO: adding elif is a hack

    // let regex = /output\s=\s([\s\S]*?)\selif/g;
    // let regex = /output[\s\S]*?]$/gm;
    //   let regex = /output\s=([\s\S]*?])$/gm;
    //   let regex = /output[\s]*=[\s]*([\s\S]*?[\s\S]$)/gm;//https://regex101.com/r/moAq3A/1/
    // let regex = /output[\s]*=([\s]*\[.*?\].*?\n|[\s\S]*?[\s\S]$)/gms;//https://regex101.com/r/WXGF5J/4
    // const regex = /output[\s]*?=[\s]*?([\s\S]*?)els?e?if/gm;
// more restricted with form of output and \n before output
    // let regex = /[\n].+output[\s]*?=[\s]*?(\[({.*})*\])/gm; apprently shoaid made this parser so costraint heavy that its not working
    const regex = /output[\s]*?=[\s]*?(\[[\s\S]*?])$/gm;
    let match = regex.exec(str);


    const outputsKeys = [];
    while (match) {
      const matchedStr = match[1];
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
          LoggingService.error(e);
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
      const uiDictionaryKeyArray = Object.keys(uiDictionary);
      if (uiDictionary['else']) {
        const index = uiDictionaryKeyArray.indexOf('else');
        if (index > -1) {
          uiDictionaryKeyArray.splice(index, 1);
        }
        uiDictionaryKeyArray.push('else');
      }
      uiDictionaryKeyArray.forEach((templateKey, index) => {
        // let templateKey = Object.keys(templateKeys);
        let elIfStr = '';
        if (index === 0 && templateKey !== 'else') {
          elIfStr = `if(variables['templateKey'] === '${templateKey}'):\n`;
        } else if (templateKey === 'else') {
          elIfStr = `\nelse:\n`;
        } else if (index !== 0 && templateKey !== 'else') {
          elIfStr = `\nelif(variables['templateKey'] === '${templateKey}'):\n`;
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

  doesStringIncludesSubstring(string: string, subString: string) {
    try {
      if (!string || !subString) {
        throw new Error('invalid input');
      }
      const x = string.toLowerCase().includes(subString.toLowerCase()) ? string : false;
      return x;
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
    startTime_ms: number = Date.UTC(2010, 0, 2), // Date.UTC(2010, 0, 2),
    granularity: string = 'day',  // one day
  ) {


    if (!rawData) {
      return;
    }

    let intervalObj = {};
    if (granularity === 'day' || granularity === 'month' || granularity === 'year') {
      intervalObj = {
        pointIntervalUnit: granularity, // 24*3600*1000  // one day,
      };
    } else {
      /*pointIntervalUnit doesnt work for hour and week
      *https://api.highcharts.com/highstock/series.column.pointIntervalUnit
      * */
      intervalObj = {
        pointInterval: this.convertGranularityStrToMs(granularity), // 24*3600*1000  // one day,
      };
    }

    const template: any = {
      xAxis: {
        type: 'datetime'
      },
      // xAxis: {
      //   categories: ['Template key 1', 'Template key 2', 'Template key 3', 'Template key 4', 'Template key 5']
      // },
      // plotOptions: {
      //   column: {
      //       stacking: 'normal'
      //       }
      //   },
      plotOptions: {
        series: {
          pointStart: startTime_ms, // Date.UTC(2010, 0, 2),
          ...intervalObj,
          label: {
            enabled: false
          }
        }
      },

      // series: [{
      //   name: 'sandeep',
      //   data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      // }, {
      //   name: 'gupta',
      //   data: [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2]
      // }]
    };

    // let categoriesString = rawData.map((dataItem) => dataItem.labels);
    const seriesArr = [];
    /*initialize the seriesArr*/
    Object.keys(rawData[0]).forEach((value) => {
      if (value === 'labels') {
        return;
      }
      seriesArr.push({
        name: value, // y1
        data: []// [(xi,y1i)]
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
        data.push(obj[key]); // pushing a new coordinate
      });
    });
    //
    template.series = seriesArr;
    return template;
  }

  convertDateTimeTwoBarGraph(
    rawData: { activesessions: number, labels: string, totalsessions: number }[],
    xAxisLabel: string,
    startTime_ms: number = Date.UTC(2010, 0, 2), // Date.UTC(2010, 0, 2),
    granularity_Ms: number = 24 * 3600 * 1000,  // one day
  ) {

    if (!rawData) {
      return;
    }
    const template: any = {
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Percentage'
        }
      },
      tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
      },
      chart: {
        type: 'column'
      },
      // xAxis: {
      //   categories: ['Template key 1', 'Template key 2', 'Template key 3', 'Template key 4', 'Template key 5']
      // },
      // plotOptions: {
      //   column: {
      //       stacking: 'normal'
      //       }
      //   },
      plotOptions: {
        column: {
          stacking: 'percent'
        },
        series: {
          pointStart: startTime_ms, // Date.UTC(2010, 0, 2),
          pointInterval: granularity_Ms// 24*3600*1000  // one day
        }
      },

      series: [{
        name: 'Handled by _bot',
        data: [5, 3, 4, 7, 2]
      }, {
        name: 'Handled by agent',
        data: [2, 2, 3, 2, 1]
      }]
    };

    // let categoriesString = rawData.map((dataItem) => dataItem.labels);
    let seriesArr = [];
    /*initialize the seriesArr*/
    Object.keys(rawData[0]).forEach((value) => {
      if (value === 'labels') {
        return;
      }


      seriesArr.push({
        name: value, // y1
        data: []// [(xi,y1i)]
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
        data.push(obj[key]); // pushing a new coordinate
      });
    });

    //
    // delete seriesArr[2];
    seriesArr = seriesArr.filter(arr => arr.name !== 'total');
    template.series = seriesArr;
    return template;
  }

  convert_xAxisText(rawData: { activesessions: 0, labels: '03:00', totalsessions: 0 }[], xAxisLabel: string) {
    if (!rawData) {
      return;
    }
    const categoriesString: any[] = rawData.map((dataItem) => dataItem.labels);
    const seriesArr = [];
    /*initialize the convertedData*/
    Object.keys(rawData[0]).forEach((value) => {
      if (value === 'labels') {
        return;
      }
      seriesArr.push({
        name: value, // y1
        data: []// [(xi,y1i)]
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
        data.push(obj[key]); // pushing a new coordinate
      });
    });
    //     series: Array(1)
    // 0: {name: "result", data: Array(8)}
    // length: 1


    const lengthofcategoriesString = categoriesString.length;
    const categoriesString5 = categoriesString.slice(0, 5);

    categoriesString5.push('Others');

    const totalValue = seriesArr[0]['data'].reduce((a, b) => a + b, 0);
    seriesArr[0]['data'] = seriesArr[0]['data'].slice(0, 5);
    const endValue = seriesArr[0]['data'].reduce((a, b) => a + b, 0);

    // seriesArr[0]['data'] = seriesArr5;
    seriesArr[0]['data'].push(totalValue - endValue);
    if (lengthofcategoriesString <= 5) {
      categoriesString5.pop();
      seriesArr[0]['data'].pop();
    }


    const template = {
      xAxis: {
        categories: categoriesString5, // ['apple', 'orange', 'mango'],
        tickInterval: 1,
        labels: {
          enabled: true
        },
      },
      plotOptions: {
        column: {
          stacking: 'normal',
        }
      },
      chart: {
        type: 'column'
      },
      series: seriesArr
    };

    return template;

    // if (type === "column") {

    //   rawData.forEach((obj) => {
    //     Object.keys(obj).forEach((key) => {
    //       if (key === xAxisLabel) {
    //         arr.push(obj[key]);
    //       }
    //     });
    //   });
    //   template.xAxis = {
    //     categories: arr,
    //   };
    //   template.plotOptions = {
    //     column: {
    //       stacking: 'normal',
    //     }
    //   };
    //   template.chart = {
    //     type: 'column'
    // };
    // }

  }

  convert(rawData, xAxisLabel: string, labelType: string) {
    const convertedData = [];
    /*initialize the convertedData*/
    Object.keys(rawData[0]).forEach((value) => {
      if (value === 'labels') {
        return;
      }
      convertedData.push({
        name: value, // y1
        data: []// [(xi,y1i)]
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
          }// pushing a new coordinate
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
          }// pushing a new coordinate
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
          }// pushing a new coordinate
        });
      });
    }
    return convertedData;
  }

  /*
  * @deprecated Use UtilityService.cloneObj() instead
  * */
  createDeepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  showErrorToaster(message: string, sec = 4) {

    try {
      this.snackBar.open(message || 'Some error occurred', '', {
        duration: (sec * 1000) || 2000,
        panelClass: ['bg-danger-snackbar'],
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    } catch (e) {
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
      panelClass: ['bg-success'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  showSuccessToaster(message) {
    // this.toastr.success(message, null, {positionClass: 'toast-top-right', timeOut: 2000});
    this.snackBar.open(message, '', {
      duration: 2000,
      panelClass: ['bg-success'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
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
    const pattern = /\.(gif|jpg|jpeg|tiff|png|svg)$/i;
    return pattern.test(url) ? null : {'Image Extension is not correct': true};
  }

  isManagerValidator(formGroup: FormGroup) {
    const formValue = formGroup.value;
    const is_manager = formValue['is_manager'];
    const child_bots = formValue['child_bots'];
    /*if is_manager = true, child_bots should have at least one value*/
    return (!is_manager || is_manager && (child_bots.length > 0)) ? null : {'isManagerError': true};
  }

  // pushFormControlItemInFormArray(formArray: FormArray, formBuilder: FormBuilder, item: any) {
  //   formArray.push(formBuilder.control(item));
  // }
  //
  // pushFormGroupItemInFormArray(formArray: FormArray, formBuilder: FormBuilder, item: any) {
  //   formArray.push(formBuilder.group(item));
  // }

  createRandomUid() {
    return UtilityService.generateUUid();
  }

  convertGranularityStrToMs(granularity: string): number {
    if (granularity === 'hour') {
      return 3600 * 1000;
    }
    if (granularity === 'day') {
      return 24 * 3600 * 1000;
    }
    if (granularity === 'week') {
      return 24 * 3600 * 7 * 1000;
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

  downloadArrayAsCSV(data: any[] = [], columns: object = {}, filename?: string, doSanitize = true) {
    // data = [
    //  { name: 'test1', score: 1, level: 'Z' },
    //  { name: 'test2', score: 2 },
    //  { name: 'test3', score: 3 },
    //  { name: 'test4', score: 4 },
    // ];
    //
    // columns = { name: '姓名', score: '分数' };

    /*sa*/
    if (doSanitize) {
      data = this.sanitizeCSVData(data);
    }
    downloadCsv(data, columns, filename);
  }

  sanitizeCSVData(data) {
    let str: string;

    const removeChar = ['+', '-', '@', '='];
    if (typeof data === 'object') {
      try {
        str = JSON.stringify(data);
      } catch (e) {
        this.showErrorToaster('Could not sanitize csv data. Downloading anyway');
        return data;
      }
    }
    if (typeof data === 'string') {
      str = data;
    }

    const removedChar: string[] = removeChar.filter(char => str.includes(char));

    if (removedChar.length > 0) {
      this.showErrorToaster(`removed ${removedChar.length} characters from CSV: ${removedChar.join(', ')}`);
      removedChar.forEach(char => str = str.replace(char, ''));
    }

    if (typeof data === 'object') {
      try {
        return JSON.parse(str);
      } catch (e) {
        this.showErrorToaster('Could not sanitize csv data. Downloading anyway');
        return data;
      }
    }
    return str;
  }

  areAllAvatorValesDefined(headerObj: object) {
    for (const key in headerObj) {
      if (headerObj[key] === null || headerObj[key] === '') {// 0!==null but 0==""
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
      if (headerObj[key] === null || headerObj[key] === '') {// 0!==null but 0==""
        return false;
      }
    }
    return true;
  }

  addQueryParamsInCurrentRoute(queryParamObj: object) {
    this.router.navigate(['.'], {queryParams: queryParamObj, relativeTo: this.activatedRoute});
  }

  isAtleastOneValueIsDefined(obj) {
    if (!obj) {
      return false;
    }
    for (const key in obj) {
      if (obj[key]) {
        return true;
      }
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
      LoggingService.error(e);
      return false;
    }
  }

  emptyObjectWithoutChaningRef(obj) {
    try {
      for (const key of Object.keys(obj)) {
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
    errorObj[EFormValidationErrors.form_validation_avator] = 'Avatars are either invalid or empty';
    errorObj[EFormValidationErrors.form_validation_data_management] = 'Data Management form is invalid';
    return errorObj;
  }

  getErrorMessageForValidationKey(key) {
    const errorMap = this.getGlobalErrorMap();
    return errorMap[key];
  }

  checkIfAllPipelineInputParamsArePopulated(pipeline: IPipelineItem[]): boolean {

    const inputParamsObj: object = pipeline.reduce((inputParamsObj_temp, pipelineItem) => {
      return {...inputParamsObj_temp, ...pipelineItem.input_params};
    }, {});

    for (const param in inputParamsObj) {
      if (inputParamsObj[param] === null) {
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
      delete objShallowClone[key];
    }
    return objShallowClone;
  }

  serializeServerValueToChatRoomMessages(value: IBotPreviewFirstMessage) {
    const roomMessages: IMessageData[] = value.generated_msg.map((item: { text: string }) => {
      return {
        text: item.text,
        sourceType: 'bot',
        messageMediatype: EBotMessageMediaType.text,
        time: Date.now(), // this.getCurrentTimeInHHMM()/*todo: change it to real time*/
        bot_message_id: null,
      };
    });
    return roomMessages;
  }

  /* View in fullscreen */
  openFullscreen() {

    const elem: any = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    const myDocument: any = document;
    if (myDocument.exitFullscreen) {
      myDocument.exitFullscreen();
    } else if (myDocument.mozCancelFullScreen) { /* Firefox */
      myDocument.mozCancelFullScreen();
    } else if (myDocument.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      myDocument.webkitExitFullscreen();
    } else if (myDocument.msExitFullscreen) { /* IE/Edge */
      myDocument.msExitFullscreen();
    }
  }

  deDupPrimitiveArray(arr: any[]) {
    return Array.from(new Set(arr));
  }

  openDialog(dialogOptions: { dialog, component, data?: any, classStr, dialogRefWrapper?: { ref: any } }): Promise<any> {
    // data: { message?: string, title?: string, actionButtonText?: string, isActionButtonDanger?:boolean }
    const {dialog, component, data, classStr, dialogRefWrapper} = dialogOptions;
    try {
      dialogRefWrapper.ref.close(); // closing any previous modals
    } catch (e) {
      console.log(e);
    }
    const dialogRef = dialog.open(component, {
      data,
      panelClass: classStr// 'primary-modal-header-border'
    });
    dialogRefWrapper.ref = dialogRef;

    return new Promise((resolve, reject) => {
      dialogRef.afterClosed().subscribe((botType: string) => {
        resolve(botType);
      });
    });

  }


  confirmActivateVersionModal(dialogRefWrapper, matDialog) {

    return this.openDialog({
      dialogRefWrapper: dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: 'Activate',
        message: 'Are you sure you want to change Active version?',
        title: `Active version`,
        isActionButtonDanger: true,
        inputDescription: null,
        closeButtonText: 'Cancel'
      },
      dialog: matDialog,
      component: ModalConfirmComponent
    });
    // this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
  }


  openCloseWithoutSavingModal(dialogRefWrapper, matDialog) {

    return this.openDialog({
      dialogRefWrapper: dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: 'Close without saving',
        message: 'All your unsaved changes will be lost if you don’t save.',
        title: `Close without saving?`,
        isActionButtonDanger: true,
        inputDescription: null,
        closeButtonText: 'Keep editing'
      },
      dialog: matDialog,
      component: ModalConfirmComponent
    });
    // this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
  }
}
