import {Component, Input, OnInit} from '@angular/core';
import {Chart, Highcharts, MapChart} from 'angular-highcharts';
import {elementStart} from '@angular/core/src/render3/instructions';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chart: Chart;
  _data;
  _chartValue;
  @Input() title:string="";
  @Input() set chartValue(_chartValue){
    // this._chartValue = _chartValue;
    this.init(_chartValue);
  };
  @Input() highChartThemeValue:any;
  @Input()set data(value){

    this._data = value;
    if(!value) return;
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
    * */


      let chart = new Chart( {
        credits: false,
        xAxis: {
          type: 'datetime'
        },
        title: {
          text: ''
        },

        plotOptions: {
          series: {
            pointStart: Date.UTC(2010, 0, 2),
            pointInterval:24*3600*1000  // one day
          }
        },

        // series: [{
        //   name:'sandeep',
        //   data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        // }, {
        //   name:'gupta',
        //   data: [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2]
        // }],
        ..._chartValue
      });
    (<any>Highcharts).theme = this.highChartThemeValue;

// Apply the theme
    Highcharts.setOptions((<any>Highcharts).theme);



    this.chart = chart;
    setTimeout(() => {
    }, 2000);

    chart.ref$.subscribe(console.log);
  }

}
