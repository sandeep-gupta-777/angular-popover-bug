import {Component, Input, OnInit} from '@angular/core';
// import {Chart, MapChart} from 'angular-highcharts';
// import * as Highcharts from 'highcharts';

declare var Highcharts: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  // chart: Chart;
  _data;
  _chartValue;
  @Input() title = '';

  @Input() set chartValue(_chartValue) {
    // this._chartValue = _chartValue;

    this.init(_chartValue);
  }

  @Input() highChartThemeValue: any;

  @Input() set data(value) {

    this._data = value;
    if (!value) {
      return;
    }
    // this.init();
  }

  ngOnInit() {
  }

  addPoint() {
    // if (this.chart) {
    //   this.chart.addPoint(Math.floor(Math.random() * 10));
    // } else {
    //   alert('init chart, first!');
    // }
  }


  init(_chartValue) {

    // if(!_chartValue)return;
    /*
    * https://stackoverflow.com/questions/15804426/how-to-set-xaxis-pointintervalupdate-tickinterval-in-highcharts
    *
    * */
    //

    const options = Highcharts.getOptions().exporting.buttons.contextButton.menuItems;
    // options = options.filter((el)=>{
    //   return (
    //       el === "printChart" ||
    //       el === "downloadPNG" ||
    //       el === "downloadJPEG" ||
    //       el === "downloadSVG"
    //   )
    // });
    options.splice(4, 2);
    console.log(options);

    Highcharts.setOptions({/*day was one day/granularity off : https://stackoverflow.com/questions/10353386/highcharts-data-off-by-one-day/13740847*/
      global : {
        useUTC : false
      },
      chart: {
        style: {
          fontFamily: 'helvetica'
        }
      },
      colors: ['#5392ff', '#71cddd', '#34bc6e', '#95d13c', '#ffb000', '#fe8500', '#ff509e', '#9b82f3']
    });


    Highcharts.chart('container-highcharts',
        {
          credits: false,

          // xAxis: {
          //   categories: ['Template key 1', 'Template key 2', 'Template key 3', 'Template key 4', 'Template key 5']
          // },
          title: {
            text: ''
          },
          //
          // plotOptions: {
          //   series: {
          //     pointStart: Date.UTC(2010, 0, 2),
          //     pointInterval:24*3600*1000  // one day
          //   }
          // },

          // series: [{
          //   name:'sandeep',
          //   data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
          // }, {
          //   name:'gupta',
          //   data: [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2]
          // }],
          ..._chartValue,
          exporting: {
            enabled: true,
            // menuItems: ["printChart", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"]

            buttons: {// http://jsfiddle.net/9qsdgjt8/1/ almost saved life
              contextButton: {
                menuItems: ['printChart', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG', 'downloadCSV']
              }
            }
          }
        }
    );

  }

}

