import {Component, Input, OnInit} from '@angular/core';
import {Chart, Highcharts, MapChart} from 'angular-highcharts';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chart: Chart;
  _data;
  @Input() title:string="";
  @Input() chartValue:any;
  @Input() highChartThemeValue:any;
  @Input()set data(value){
    debugger;
    this._data = value;
    if(!value) return;
    console.log(value);
    this.init();
  }
  ngOnInit() {
  }

  addPoint() {
    if (this.chart) {
      this.chart.addPoint(Math.floor(Math.random() * 10));
    } else {
      alert('init chart, first!');
    }
  }


  init() {
    /*
    * https://stackoverflow.com/questions/15804426/how-to-set-xaxis-pointintervalupdate-tickinterval-in-highcharts
    * */
    let chart = new Chart({
      ...this.chartValue,
      series: this._data
    });


    (<any>Highcharts).theme = this.highChartThemeValue;

// Apply the theme
    Highcharts.setOptions((<any>Highcharts).theme);



    // chart.addPoint(4);
    this.chart = chart;
    // chart.addPoint(5);
    setTimeout(() => {
      // chart.addPoint(6);
    }, 2000);

    chart.ref$.subscribe(console.log);
  }

}
