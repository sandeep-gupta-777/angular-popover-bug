import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {st} from '@angular/core/src/render3';

// import import downloadCsv from 'download-csv'; from 'download-csv';
import downloadCsv from 'download-csv';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  readInputFileAsText(inputElement): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let input = inputElement;//event.target;
      for (let index = 0; index < input.files.length; index++) {
        let reader = new FileReader();
        reader.onload = () => {
          // this 'text' is the content of the file
          let text = reader.result;
          // this.editorCode= text;
          resolve(text);
        };
        reader.readAsText(input.files[index]);
      }
      ;
    });
  }

  getPriorDate(days_before: number) {
    let today: any = new Date(Date.now() - days_before * 24 * 3600 * 1000);
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1; //January is 0!
    let yyyy: any = today.getFullYear();

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
    let yyyy: any = today.getFullYear();

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
    let yyyy: any = today.getFullYear();

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
      var textarea = document.createElement('textarea');
      textarea.textContent = text;
      textarea.style.position = 'fixed';  // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        this.showSuccessToaster('Copied!');
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
      if (convertedData[i].name === name)
        return convertedData[i].data;
    }
  }

  createChartValueForBarGraph(rawData: { labels: string, result: number }[], chartValue: { xAxis: { categories: string[] }, series: { name: string, data: number[] }[] }) {
    debugger;
    /*
    * example output:
    * [{
  name: 'John',
  data: [5, 3, 4, 7, 2]
}]
    * */
    let categories = rawData.map(dataItem => dataItem.labels);
    let seriesData = rawData.map(dataItem => dataItem.result);
    chartValue.xAxis.categories = categories;
    chartValue.series[0].data = seriesData;
    chartValue.series[0].name = 'test';
    return chartValue;
  }

  appendChartValueAndSeries(xAndYValues: any, chartValue) {
    return {
      ...chartValue,
      ...xAndYValues
    };
  }

  convert_xAxisText(rawData: { activesessions: 0, labels: '03:00', totalsessions: 0 }[], xAxisLabel: string) {

    let categoriesString = rawData.map((dataItem) => dataItem.labels);
    let seriesArr = [];
    /*initialize the convertedData*/
    Object.keys(rawData[0]).forEach((value) => {
      if (value === 'labels') return;
      seriesArr.push({
        name: value,//y1
        data: []//[(xi,y1i)]
      });
    });
    /*now loop over rawData and fill convertedData's data array*/
    rawData.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        if (key === xAxisLabel) return;
        let data = this.findDataByName(seriesArr, key);
        // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
        data.push(obj[key]);//pushing a new coordinate
      });
    });

    let template = {
      xAxis: {
        categories: categoriesString,//['apple', 'orange', 'mango'],
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
    let convertedData = [];
    /*initialize the convertedData*/
    Object.keys(rawData[0]).forEach((value) => {
      if (value === 'labels') return;
      convertedData.push({
        name: value,//y1
        data: []//[(xi,y1i)]
      });
    });
    if (labelType === 'Time') {
      /*now loop over rawData and fill convertedData's data array*/
      rawData.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          if (key === xAxisLabel) return;
          let data = this.findDataByName(convertedData, key);
          // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
          let dateStr_ddmmyyyy = obj[xAxisLabel];
          let hh = dateStr_ddmmyyyy.split(':')[1];
          let mm = dateStr_ddmmyyyy.split(':')[0];
          let ms = hh * 3600 * 1000 + mm * 60 * 1000;
          if (data)/*This fix is done for new keys which were not in rawdata[0]. They will be ignored*/
            data.push([ms, obj[key]]);//pushing a new coordinate
        });
      });
    }
    if (labelType === 'Date') {
      /*now loop over rawData and fill convertedData's data array*/
      rawData.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          if (key === xAxisLabel) return;
          let data = this.findDataByName(convertedData, key);
          // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
          let dateStr_ddmmyyyy = obj[xAxisLabel];
          let dd = dateStr_ddmmyyyy.split('-')[2];
          let mm = dateStr_ddmmyyyy.split('-')[1];
          let yyyy = dateStr_ddmmyyyy.split('-')[0];
          let dateStr_mmddyyyy = `${mm}/${dd}/${yyyy}`;
          let ms = Date.parse(dateStr_mmddyyyy);
          if (data)/*This fix is done for new keys which were not in rawdata[0]. They will be ignored*/
            data.push([ms, obj[key]]);//pushing a new coordinate
        });
      });
    }
    if (labelType === 'String') {
      rawData.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          if (key === xAxisLabel) return;
          let data = this.findDataByName(convertedData, key);
          // data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
          // let dateStr_ddmmyyyy = obj[xAxisLabel];
          // let hh = dateStr_ddmmyyyy.split(':')[1];
          // let mm = dateStr_ddmmyyyy.split(':')[0];
          // let ms = hh*3600*1000 + mm*60*1000;
          if (data)/*This fix is done for new keys which were not in rawdata[0]. They will be ignored*/
            data.push([obj[xAxisLabel], obj[key]]);//pushing a new coordinate
        });
      });
    }
    return convertedData;
  }

  showErrorToaster(error) {
    this.toastr.error(error.message, error.name, {positionClass: 'toast-bottom-left', timeOut: 2000});
  }

  showSuccessToaster(message) {
    this.toastr.success(message, null, {positionClass: 'toast-bottom-left', timeOut: 2000});
  }

  createRandomString(length: number = 10) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  getCurrentTimeInHHMM() {
    var date = new Date();
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return hours + ':' + minutes;
  };

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

  areAllValesDefined(obj: object) {
    for (let key in obj) {
      if (!obj[key])
        return false;
    }
    return true;
  }

  addQueryParamsInCurrentRoute(queryParamObj: object) {
    this.router.navigate(['.'], {queryParams: queryParamObj, relativeTo: this.activatedRoute});
  }

}
