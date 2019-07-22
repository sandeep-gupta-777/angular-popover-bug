const loadJS = require('load-js');

export class LoadJsService {

  static main = [
    {
      async: true,
      url: "https://code.jquery.com/jquery-latest.min.js"
    },
    {
      async: true,
      url: "https://code.highcharts.com/highcharts.js"
    },
    {
      async: true,
      url: "assets/codemirror/lib/codemirror.js",
    }, {
      async: true,
      url: "assets/js/FileSaver.js",
    },{
      async: true,
      url: "assets/js/jszip.min.js",
    },{
      async: true,
      url: "https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver",
    },
  ];

  static arr = [{
    async: true,
    url: "https://code.highcharts.com/modules/series-label.js"
  }, {
    async: true,
    url: "https://code.highcharts.com/modules/exporting.js"
  }, {
    async: true,
    url: "https://code.highcharts.com/modules/export-data.js"
  }, {
    async: true,
    url: "https://cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"
  }, {
    async: true,
    url: "assets/js/handsontable.js"
  }, {
    async: true,
    url: "assets/mqttws31.js"
  }, {
    async: true,
    url: "assets/IMIClient.js"
  }, {
    async: true,
    url: "assets/codemirror/addon/fold/foldcode.js",
  }, {
    async: true,
    url: "assets/codemirror/addon/fold/foldgutter.js",
  }, {
    async: true,
    url: "assets/codemirror/addon/fold/indent-fold.js",
  }, {
    async: true,
    url: "assets/codemirror/addon/fold/comment-fold.js",
  }, {
    async: true,
    url: "assets/codemirror/addon/search/search.js",
  }, {
    async: true,
    url: "assets/codemirror/addon/search/searchcursor.js",
  }, {
    async: true,
    url: "assets/codemirror/addon/search/jump-to-line.js",
  }, {
    async: true,
    url: "assets/codemirror/addon/dialog/dialog.js",
  }, {
    async: true,
    url: "assets/codemirror/addon/dialog/dialog.js",
  }, {
    async: true,
    url: "assets/codemirror/mode/python/python.js",
  }
  ];

  static load(): Promise<any> {

    return loadJS(this.main)
      .then(() => {
        return loadJS(this.arr);
      })
  }
}
