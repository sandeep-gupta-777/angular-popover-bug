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
  @Input()set data(value){
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

  addSerie() {

    this.chart.addSerie({
      name: 'Line ' + Math.floor(Math.random() * 10),
      data: [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
      ]
    });
  }

  removePoint() {
    this.chart.removePoint(this.chart.ref.series[0].data.length - 1);
  }

  removeSerie() {
    this.chart.removeSerie(this.chart.ref.series.length - 1);
  }

  init() {
    /*
    * https://stackoverflow.com/questions/15804426/how-to-set-xaxis-pointintervalupdate-tickinterval-in-highcharts
    * */
    let chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: this.title
      },
      credits: {
        enabled: false
      },
      series: this._data,

      //   [
      //     {
      //   name: 'Total Users',
      //   data: [
      //     [Date.UTC(2010, 0, 1), 29.9],
      //     [Date.UTC(2010, 0, 2), 71.5],
      //     [Date.UTC(2010, 0, 3), 106.4],
      //     [Date.UTC(2010, 0, 4), 29.9],
      //     [Date.UTC(2010, 0, 5), 71.5],
      //     [Date.UTC(2010, 0, 6), 106.4],
      //     [Date.UTC(2010, 0, 7), 29.9],
      //     [Date.UTC(2010, 0, 8), 71.5],
      //     [Date.UTC(2010, 0, 9), 106.4],
      //     [Date.UTC(2010, 0, 10), 29.9],
      //     [Date.UTC(2010, 0, 11), 71.5],
      //     [Date.UTC(2010, 0, 12), 106.4],
      //     [Date.UTC(2010, 0, 13), 29.9],
      //     [Date.UTC(2010, 0, 14), 71.5],
      //     [Date.UTC(2010, 0, 15), 106.4],
      //     [Date.UTC(2010, 0, 16), 29.9],
      //     [Date.UTC(2010, 0, 17), 71.5],
      //     [Date.UTC(2010, 0, 18), 106.4],
      //     [Date.UTC(2010, 0, 19), 29.9],
      //     [Date.UTC(2010, 0, 20), 71.5],
      //     [Date.UTC(2010, 0, 21), 106.4],
      //     [Date.UTC(2010, 0, 22), 29.9],
      //     [Date.UTC(2010, 0, 23), 71.5],
      //     [Date.UTC(2010, 0, 24), 106.4],
      //     [Date.UTC(2010, 0, 25), 29.9],
      //     [Date.UTC(2010, 0, 26), 71.5],
      //     [Date.UTC(2010, 0, 27), 106.4],
      //     [Date.UTC(2010, 0, 28), 29.9],
      //     [Date.UTC(2010, 1, 1), 29.9],
      //     [Date.UTC(2010, 1, 2), 71.5],
      //     [Date.UTC(2010, 1, 3), 106.4],
      //     [Date.UTC(2010,1, 4), 29.9],
      //     [Date.UTC(2010, 1, 5), 71.5],
      //     [Date.UTC(2010, 1, 6), 106.4],
      //     [Date.UTC(2010, 1, 7), 29.9],
      //     [Date.UTC(2010, 1, 8), 71.5],
      //     [Date.UTC(2010, 1, 9), 106.4],
      //     [Date.UTC(2010, 1, 10), 29.9],
      //     [Date.UTC(2010, 1, 11), 71.5],
      //     [Date.UTC(2010, 1, 12), 106.4],
      //     [Date.UTC(2010, 1, 13), 29.9],
      //     [Date.UTC(2010, 1, 14), 71.5],
      //     [Date.UTC(2010, 1, 15), 106.4]
      //   ]
      // },
      //   {
      //     name: 'New Users',
      //     data: [
      //       [Date.UTC(2010, 0, 1), 39.9],
      //       [Date.UTC(2010, 0, 2), 31.5],
      //       [Date.UTC(2010, 0, 3), 136.4],
      //       [Date.UTC(2010, 0, 4), 39.9],
      //       [Date.UTC(2010, 0, 5), 31.5],
      //       [Date.UTC(2010, 0, 6), 136.4],
      //       [Date.UTC(2010, 0, 7), 39.9],
      //       [Date.UTC(2010, 0, 8), 31.5],
      //       [Date.UTC(2010, 0, 9), 136.4],
      //       [Date.UTC(2010, 0, 10), 39.9],
      //       [Date.UTC(2010, 0, 11), 31.5],
      //       [Date.UTC(2010, 0, 12), 136.4],
      //       [Date.UTC(2010, 0, 13), 39.9],
      //       [Date.UTC(2010, 0, 14), 31.5],
      //       [Date.UTC(2010, 0, 15), 136.4],
      //       [Date.UTC(2010, 0, 16), 39.9],
      //       [Date.UTC(2010, 0, 17), 31.5],
      //       [Date.UTC(2010, 0, 18), 136.4],
      //       [Date.UTC(2010, 0, 19), 39.9],
      //       [Date.UTC(2010, 0, 20), 31.5],
      //       [Date.UTC(2010, 0, 21), 136.4],
      //       [Date.UTC(2010, 0, 22), 39.9],
      //       [Date.UTC(2010, 0, 23), 31.5],
      //       [Date.UTC(2010, 0, 24), 136.4],
      //       [Date.UTC(2010, 0, 25), 39.9],
      //       [Date.UTC(2010, 0, 26), 31.5],
      //       [Date.UTC(2010, 0, 27), 136.4],
      //       [Date.UTC(2010, 0, 28), 39.9],
      //       [Date.UTC(2010, 1, 1), 39.9],
      //       [Date.UTC(2010, 1, 2), 31.5],
      //       [Date.UTC(2010, 1, 3), 136.4],
      //       [Date.UTC(2010,1, 4), 39.9],
      //       [Date.UTC(2010, 1, 5), 31.5],
      //       [Date.UTC(2010, 1, 6), 136.4],
      //       [Date.UTC(2010, 1, 7), 39.9],
      //       [Date.UTC(2010, 1, 8), 31.5],
      //       [Date.UTC(2010, 1, 9), 136.4],
      //       [Date.UTC(2010, 1, 10), 39.9],
      //       [Date.UTC(2010, 1, 11), 31.5],
      //       [Date.UTC(2010, 1, 12), 136.4],
      //       [Date.UTC(2010, 1, 13), 29.9],
      //       [Date.UTC(2010, 1, 14), 71.5],
      //       [Date.UTC(2010, 1, 15), 106.4]
      //     ]
      //   },
      //   {
      //     name: 'Returning Users',
      //     data: [
      //       [Date.UTC(2010, 0, 1), 89.9],
      //       [Date.UTC(2010, 0, 2), 81.5],
      //       [Date.UTC(2010, 0, 3), 186.4],
      //       [Date.UTC(2010, 0, 4), 89.9],
      //       [Date.UTC(2010, 0, 5), 81.5],
      //       [Date.UTC(2010, 0, 6), 186.4],
      //       [Date.UTC(2010, 0, 7), 89.9],
      //       [Date.UTC(2010, 0, 8), 81.5],
      //       [Date.UTC(2010, 0, 9), 186.4],
      //       [Date.UTC(2010, 0, 10), 89.9],
      //       [Date.UTC(2010, 0, 11), 81.5],
      //       [Date.UTC(2010, 0, 12), 186.4],
      //       [Date.UTC(2010, 0, 13), 89.9],
      //       [Date.UTC(2010, 0, 14), 81.5],
      //       [Date.UTC(2010, 0, 15), 186.4],
      //       [Date.UTC(2010, 0, 16), 89.9],
      //       [Date.UTC(2010, 0, 17), 81.5],
      //       [Date.UTC(2010, 0, 18), 186.4],
      //       [Date.UTC(2010, 0, 19), 89.9],
      //       [Date.UTC(2010, 0, 20), 81.5],
      //       [Date.UTC(2010, 0, 21), 186.4],
      //       [Date.UTC(2010, 0, 22), 89.9],
      //       [Date.UTC(2010, 0, 23), 81.5],
      //       [Date.UTC(2010, 0, 24), 186.4],
      //       [Date.UTC(2010, 0, 25), 89.9],
      //       [Date.UTC(2010, 0, 26), 81.5],
      //       [Date.UTC(2010, 0, 27), 186.4],
      //       [Date.UTC(2010, 0, 28), 89.9],
      //       [Date.UTC(2010, 1, 1), 89.9],
      //       [Date.UTC(2010, 1, 2), 81.5],
      //       [Date.UTC(2010, 1, 3), 186.4],
      //       [Date.UTC(2010,1, 4), 89.9],
      //       [Date.UTC(2010, 1, 5), 81.5],
      //       [Date.UTC(2010, 1, 6), 186.4],
      //       [Date.UTC(2010, 1, 7), 89.9],
      //       [Date.UTC(2010, 1, 8), 81.5],
      //       [Date.UTC(2010, 1, 9), 186.4],
      //       [Date.UTC(2010, 1, 10), 89.9],
      //       [Date.UTC(2010, 1, 11), 81.5],
      //       [Date.UTC(2010, 1, 12), 186.4],
      //       [Date.UTC(2010, 1, 13), 89.9],
      //       [Date.UTC(2010, 1, 14), 81.5],
      //       [Date.UTC(2010, 1, 15), 106.4]
      //     ]
      //   }
      //   ],
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          day: '%e.%b'
        },

        tickInterval: 24 * 3600 * 1000
      },
      yAxis:[
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
    });


    (<any>Highcharts).theme = {
      colors: ['#DDDF0D', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee',
        '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
      chart: {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, 'rgb(48, 48, 96)'],
            [1, 'rgb(0, 0, 0)']
          ]
        },
        borderColor: '#000000',
        borderWidth: 2,
        className: 'dark-container',
        plotBackgroundColor: 'rgba(255, 255, 255, .1)',
        plotBorderColor: '#CCCCCC',
        plotBorderWidth: 1
      },
      title: {
        style: {
          color: '#C0C0C0',
          font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
      },
      subtitle: {
        style: {
          color: '#666666',
          font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        }
      },
      xAxis: {
        gridLineColor: '#333333',
        gridLineWidth: 1,
        labels: {
          style: {
            color: '#A0A0A0'
          }
        },
        lineColor: '#A0A0A0',
        tickColor: '#A0A0A0',
        title: {
          style: {
            color: '#CCC',
            fontWeight: 'bold',
            fontSize: '12px',
            fontFamily: 'Trebuchet MS, Verdana, sans-serif'

          }
        }
      },
      yAxis: {
        gridLineColor: '#333333',
        labels: {
          style: {
            color: '#A0A0A0'
          }
        },
        lineColor: '#A0A0A0',
        minorTickInterval: null,
        tickColor: '#A0A0A0',
        tickWidth: 1,
        title: {
          style: {
            color: '#CCC',
            fontWeight: 'bold',
            fontSize: '12px',
            fontFamily: 'Trebuchet MS, Verdana, sans-serif'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        style: {
          color: '#F0F0F0'
        }
      },
      toolbar: {
        itemStyle: {
          color: 'silver'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            color: '#CCC'
          },
          marker: {
            lineColor: '#333'
          }
        },
        spline: {
          marker: {
            lineColor: '#333'
          }
        },
        scatter: {
          marker: {
            lineColor: '#333'
          }
        },
        candlestick: {
          lineColor: 'white'
        }
      },
      legend: {
        itemStyle: {
          font: '9pt Trebuchet MS, Verdana, sans-serif',
          color: '#A0A0A0'
        },
        itemHoverStyle: {
          color: '#FFF'
        },
        itemHiddenStyle: {
          color: '#444'
        }
      },
      credits: {
        style: {
          color: '#666'
        }
      },
      labels: {
        style: {
          color: '#CCC'
        }
      },

      navigation: {
        buttonOptions: {
          symbolStroke: '#DDDDDD',
          hoverSymbolStroke: '#FFFFFF',
          theme: {
            fill: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0.4, '#606060'],
                [0.6, '#333333']
              ]
            },
            stroke: '#000000'
          }
        }
      },

      // scroll charts
      rangeSelector: {
        buttonTheme: {
          fill: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0.4, '#888'],
              [0.6, '#555']
            ]
          },
          stroke: '#000000',
          style: {
            color: '#CCC',
            fontWeight: 'bold'
          },
          states: {
            hover: {
              fill: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0.4, '#BBB'],
                  [0.6, '#888']
                ]
              },
              stroke: '#000000',
              style: {
                color: 'white'
              }
            },
            select: {
              fill: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0.1, '#000'],
                  [0.3, '#333']
                ]
              },
              stroke: '#000000',
              style: {
                color: 'yellow'
              }
            }
          }
        },
        inputStyle: {
          backgroundColor: '#333',
          color: 'silver'
        },
        labelStyle: {
          color: 'silver'
        }
      },

      navigator: {
        handles: {
          backgroundColor: '#666',
          borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(16, 16, 16, 0.5)',
        series: {
          color: '#7798BF',
          lineColor: '#A6C7ED'
        }
      },

      scrollbar: {
        barBackgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0.4, '#888'],
            [0.6, '#555']
          ]
        },
        barBorderColor: '#CCC',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0.4, '#888'],
            [0.6, '#555']
          ]
        },
        buttonBorderColor: '#CCC',
        rifleColor: '#FFF',
        trackBackgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#000'],
            [1, '#333']
          ]
        },
        trackBorderColor: '#666'
      },

      // special colors for some of the
      legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
      background2: 'rgb(35, 35, 70)',
      dataLabelsColor: '#444',
      textColor: '#C0C0C0',
      maskColor: 'rgba(255,255,255,0.3)'
    };

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
