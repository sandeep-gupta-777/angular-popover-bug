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
    if(!_chartValue)return;
    /*
    * https://stackoverflow.com/questions/15804426/how-to-set-xaxis-pointintervalupdate-tickinterval-in-highcharts
    * */
    // if(this._data.length>0){
    debugger;
      // let chart = new Chart({
      //   ...this.chartValue,
      //   series: this._data
      // });
    // }else{
      let chart = new Chart({
        ..._chartValue,
      });
    // }


    (<any>Highcharts).theme = this.highChartThemeValue;

// Apply the theme
    Highcharts.setOptions((<any>Highcharts).theme);



    this.chart = chart;
    setTimeout(() => {
    }, 2000);

    chart.ref$.subscribe(console.log);
  }

}
