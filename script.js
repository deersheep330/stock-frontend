Highcharts.theme = {
  "colors": ["#F92672", "#66D9EF", "#A6E22E", "#A6E22E"],
  "chart": {
    "backgroundColor": "#272822",
    "style": {
      "fontFamily": "Inconsolata",
      "color": "#A2A39C"
    },
    "marginBottom": 100
  },
  "title": {
    "style": {
      "color": "#A2A39C"
    },
    "align": "left"
  },
  "subtitle": {
    "style": {
      "color": "#A2A39C"
    },
    "align": "left"
  },
  "legend": {
    "align": "center",
    "verticalAlign": "bottom",
    "itemStyle": {
      "fontWeight": "normal",
      "color": "#A2A39C"
    },
    "x": 0,
    "y": 0
  },
  "xAxis": {
    "gridLineDashStyle": "Dot",
    "gridLineWidth": 1,
    "gridLineColor": "#A2A39C",
    "lineColor": "#A2A39C",
    "minorGridLineColor": "#A2A39C",
    "tickColor": "#A2A39C",
    "tickWidth": 1
  },
  "yAxis": {
    "gridLineDashStyle": "Dot",
    "gridLineColor": "#A2A39C",
    "lineColor": "#A2A39C",
    "minorGridLineColor": "#A2A39C",
    "tickColor": "#A2A39C",
    "tickWidth": 1
  },
  "credits": {
    "enabled": false
  }
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);


Highcharts.chart('container', {

  title: {
    text: 'Solar Employment Growth by Sector, 2010-2016'
  },

  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 2010 to 2017'
    }
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [{
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Sales & Distribution',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});