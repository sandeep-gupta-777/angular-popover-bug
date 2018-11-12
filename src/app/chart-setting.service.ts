import { Injectable } from '@angular/core';
import {Chart, Highcharts} from 'angular-highcharts';
import {IChartSetting, ISeriesDataItem} from '../interfaces/chart-setting';
import {UtilityService} from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class ChartSettingService {

  constructor(private utilityService: UtilityService) { }

  chartSetting: IChartSetting = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
      name: 'Total Users',
      data: [
        [Date.UTC(2010, 0, 1), 29.9],
        [Date.UTC(2010, 0, 2), 71.5],
        [Date.UTC(2010, 0, 3), 106.4],
        [Date.UTC(2010, 0, 4), 29.9],
        [Date.UTC(2010, 0, 5), 71.5],
        [Date.UTC(2010, 0, 6), 106.4],
        [Date.UTC(2010, 0, 7), 29.9],
        [Date.UTC(2010, 0, 8), 71.5],
        [Date.UTC(2010, 0, 9), 106.4],
        [Date.UTC(2010, 0, 10), 29.9],
        [Date.UTC(2010, 0, 11), 71.5],
        [Date.UTC(2010, 0, 12), 106.4],
        [Date.UTC(2010, 0, 13), 29.9],
        [Date.UTC(2010, 0, 14), 71.5],
        [Date.UTC(2010, 0, 15), 106.4],
        [Date.UTC(2010, 0, 16), 29.9],
        [Date.UTC(2010, 0, 17), 71.5],
        [Date.UTC(2010, 0, 18), 106.4],
        [Date.UTC(2010, 0, 19), 29.9],
        [Date.UTC(2010, 0, 20), 71.5],
        [Date.UTC(2010, 0, 21), 106.4],
        [Date.UTC(2010, 0, 22), 29.9],
        [Date.UTC(2010, 0, 23), 71.5],
        [Date.UTC(2010, 0, 24), 106.4],
        [Date.UTC(2010, 0, 25), 29.9],
        [Date.UTC(2010, 0, 26), 71.5],
        [Date.UTC(2010, 0, 27), 106.4],
        [Date.UTC(2010, 0, 28), 29.9],
        [Date.UTC(2010, 1, 1), 29.9],
        [Date.UTC(2010, 1, 2), 71.5],
        [Date.UTC(2010, 1, 3), 106.4],
        [Date.UTC(2010, 1, 4), 29.9],
        [Date.UTC(2010, 1, 5), 71.5],
        [Date.UTC(2010, 1, 6), 106.4],
        [Date.UTC(2010, 1, 7), 29.9],
        [Date.UTC(2010, 1, 8), 71.5],
        [Date.UTC(2010, 1, 9), 106.4],
        [Date.UTC(2010, 1, 10), 29.9],
        [Date.UTC(2010, 1, 11), 71.5],
        [Date.UTC(2010, 1, 12), 106.4],
        [Date.UTC(2010, 1, 13), 29.9],
        [Date.UTC(2010, 1, 14), 71.5],
        [Date.UTC(2010, 1, 15), 106.4]
      ]
    },
      {
        name: 'New Users',
        data: [
          [Date.UTC(2010, 0, 1), 39.9],
          [Date.UTC(2010, 0, 2), 31.5],
          [Date.UTC(2010, 0, 3), 136.4],
          [Date.UTC(2010, 0, 4), 39.9],
          [Date.UTC(2010, 0, 5), 31.5],
          [Date.UTC(2010, 0, 6), 136.4],
          [Date.UTC(2010, 0, 7), 39.9],
          [Date.UTC(2010, 0, 8), 31.5],
          [Date.UTC(2010, 0, 9), 136.4],
          [Date.UTC(2010, 0, 10), 39.9],
          [Date.UTC(2010, 0, 11), 31.5],
          [Date.UTC(2010, 0, 12), 136.4],
          [Date.UTC(2010, 0, 13), 39.9],
          [Date.UTC(2010, 0, 14), 31.5],
          [Date.UTC(2010, 0, 15), 136.4],
          [Date.UTC(2010, 0, 16), 39.9],
          [Date.UTC(2010, 0, 17), 31.5],
          [Date.UTC(2010, 0, 18), 136.4],
          [Date.UTC(2010, 0, 19), 39.9],
          [Date.UTC(2010, 0, 20), 31.5],
          [Date.UTC(2010, 0, 21), 136.4],
          [Date.UTC(2010, 0, 22), 39.9],
          [Date.UTC(2010, 0, 23), 31.5],
          [Date.UTC(2010, 0, 24), 136.4],
          [Date.UTC(2010, 0, 25), 39.9],
          [Date.UTC(2010, 0, 26), 31.5],
          [Date.UTC(2010, 0, 27), 136.4],
          [Date.UTC(2010, 0, 28), 39.9],
          [Date.UTC(2010, 1, 1), 39.9],
          [Date.UTC(2010, 1, 2), 31.5],
          [Date.UTC(2010, 1, 3), 136.4],
          [Date.UTC(2010, 1, 4), 39.9],
          [Date.UTC(2010, 1, 5), 31.5],
          [Date.UTC(2010, 1, 6), 136.4],
          [Date.UTC(2010, 1, 7), 39.9],
          [Date.UTC(2010, 1, 8), 31.5],
          [Date.UTC(2010, 1, 9), 136.4],
          [Date.UTC(2010, 1, 10), 39.9],
          [Date.UTC(2010, 1, 11), 31.5],
          [Date.UTC(2010, 1, 12), 136.4],
          [Date.UTC(2010, 1, 13), 29.9],
          [Date.UTC(2010, 1, 14), 71.5],
          [Date.UTC(2010, 1, 15), 106.4]
        ]
      },
      {
        name: 'Returning Users',
        data: [
          [Date.UTC(2010, 0, 1), 89.9],
          [Date.UTC(2010, 0, 2), 81.5],
          [Date.UTC(2010, 0, 3), 186.4],
          [Date.UTC(2010, 0, 4), 89.9],
          [Date.UTC(2010, 0, 5), 81.5],
          [Date.UTC(2010, 0, 6), 186.4],
          [Date.UTC(2010, 0, 7), 89.9],
          [Date.UTC(2010, 0, 8), 81.5],
          [Date.UTC(2010, 0, 9), 186.4],
          [Date.UTC(2010, 0, 10), 89.9],
          [Date.UTC(2010, 0, 11), 81.5],
          [Date.UTC(2010, 0, 12), 186.4],
          [Date.UTC(2010, 0, 13), 89.9],
          [Date.UTC(2010, 0, 14), 81.5],
          [Date.UTC(2010, 0, 15), 186.4],
          [Date.UTC(2010, 0, 16), 89.9],
          [Date.UTC(2010, 0, 17), 81.5],
          [Date.UTC(2010, 0, 18), 186.4],
          [Date.UTC(2010, 0, 19), 89.9],
          [Date.UTC(2010, 0, 20), 81.5],
          [Date.UTC(2010, 0, 21), 186.4],
          [Date.UTC(2010, 0, 22), 89.9],
          [Date.UTC(2010, 0, 23), 81.5],
          [Date.UTC(2010, 0, 24), 186.4],
          [Date.UTC(2010, 0, 25), 89.9],
          [Date.UTC(2010, 0, 26), 81.5],
          [Date.UTC(2010, 0, 27), 186.4],
          [Date.UTC(2010, 0, 28), 89.9],
          [Date.UTC(2010, 1, 1), 89.9],
          [Date.UTC(2010, 1, 2), 81.5],
          [Date.UTC(2010, 1, 3), 186.4],
          [Date.UTC(2010, 1, 4), 89.9],
          [Date.UTC(2010, 1, 5), 81.5],
          [Date.UTC(2010, 1, 6), 186.4],
          [Date.UTC(2010, 1, 7), 89.9],
          [Date.UTC(2010, 1, 8), 81.5],
          [Date.UTC(2010, 1, 9), 186.4],
          [Date.UTC(2010, 1, 10), 89.9],
          [Date.UTC(2010, 1, 11), 81.5],
          [Date.UTC(2010, 1, 12), 186.4],
          [Date.UTC(2010, 1, 13), 89.9],
          [Date.UTC(2010, 1, 14), 81.5],
          [Date.UTC(2010, 1, 15), 106.4]
        ]
      }
    ],
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        day: '%e %b'
      },

      tickInterval: 24 * 3600 * 1000
    },
    yAxis: [
      { // Primary yAxis
        labels: {
          // format: '°C',
          style: {
            color: Highcharts.getOptions().colors[2]
          }
        },
        title: {
          text: 'Total Users',
          style: {
            color: Highcharts.getOptions().colors[2]
          }
        },
        opposite: false,
        visible: false

      },
      { // Secondary yAxis
        gridLineWidth: 0,
        title: {
          text: 'New Users',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        labels: {
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        visible: false


      },
      { // tertiary yAxis
        gridLineWidth: 0,
        title: {
          text: 'Returning Users',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        labels: {
          // format: '{value} mm',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        visible: false

      }
    ]
  };

  // createChartSettingBySeriesData(){
  //   this.chartSetting.series = this.createSeriesDataFromArray(this.test);
  // }

  createSeriesDataFromArray(array: any[], xAxisLabel) {
    // return this.utilityService.convert(this.test,"labels");
    return this.utilityService.convert(array, xAxisLabel, 'Users');
  }


  rawData = [{
    x: 1,
    y1: '1 y1 string',
    y2: '1 y2 string',
    y3: '1 y3 string',

    yn: '1 yn string',
}, {
    x: 2,
    y1: '2 y1 string',
    y2: '2 y2 string',
    y3: '2 y3 string',

    yn: '2 yn string',
}];

  test = [
    {
      'labels': '18/06/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '19/06/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '20/06/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '21/06/2018',
      'newusers': 1,
      'returningusers': 0,
      'totalusers': 1
    },
    {
      'labels': '22/06/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '23/06/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '24/06/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '25/06/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '26/06/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '27/06/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '28/06/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '29/06/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '30/06/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '01/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '02/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '03/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '04/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '05/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '06/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '07/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '08/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '09/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '10/07/2018',
      'newusers': 2,
      'returningusers': 0,
      'totalusers': 2
    },
    {
      'labels': '11/07/2018',
      'newusers': 1,
      'returningusers': 0,
      'totalusers': 1
    },
    {
      'labels': '12/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '13/07/2018',
      'newusers': 4,
      'returningusers': 0,
      'totalusers': 4
    },
    {
      'labels': '14/07/2018',
      'newusers': 2,
      'returningusers': 0,
      'totalusers': 2
    },
    {
      'labels': '15/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '16/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    },
    {
      'labels': '17/07/2018',
      'newusers': 3,
      'returningusers': 1,
      'totalusers': 4
    },
    {
      'labels': '18/07/2018',
      'newusers': 0,
      'returningusers': 0,
      'totalusers': 0
    }
  ];

}
