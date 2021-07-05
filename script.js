Highcharts.theme = {
  "colors": ["#F92672", "#66D9EF", "#A6E22E", "#A6E22E"],
  "chart": {
    "backgroundColor": "#272822",
    "style": {
      "fontFamily": "Inconsolata",
      "color": "#A2A39C"
    },
    "height": "50%"
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
    }
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

window.onload = () => {

  console.log('onload!')

  plot('container-1', 
       mockData[0].symbol + ' - ' + mockData[0].name,
       mockData[0].dates,
       [{
          name: 'prices',
          data: mockData[0].prices   
       }, {
          name: 'popularities',
          data: mockData[0].popularities
       }])

  document.getElementById("ptt-tab").onclick = () => {
    console.log('ptt clicked!')
  }

  document.getElementById("reunion-tab").onclick = () => {
    console.log('reunion clicked!')
  }

  document.getElementById("ins-buy-tab").onclick = () => {
    console.log('ins buy clicked!')
  }

  document.getElementById("ins-sell-tab").onclick = () => {
    console.log('ins sell clicked!')
  }

}

var plot = (_target, _title, _xAxis, _series) => {

  Highcharts.chart(_target, {

    title: {
      text: _title
    },

    xAxis: {
      categories: _xAxis
    },
  
    yAxis: [{
      title: { text: _series[0].name }
    }, {
      title: { text: _series[1].name },
      opposite: true
    }],
  
    series: _series
  
  })

}


Highcharts.chart('container-1', {

  title: {
    text: 'Solar Employment Growth by Sector, 2010-2016'
  },

  yAxis: {
    title: {
      text: 'Number of Employees'
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

});

Highcharts.chart('container-2', {

  title: {
    text: 'Solar Employment Growth by Sector, 2010-2016'
  },

  yAxis: {
    title: {
      text: 'Number of Employees'
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

});

Highcharts.chart('container-3', {

  title: {
    text: 'Solar Employment Growth by Sector, 2010-2016'
  },

  yAxis: {
    title: {
      text: 'Number of Employees'
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

});

Highcharts.chart('container-4', {

  title: {
    text: 'Solar Employment Growth by Sector, 2010-2016'
  },

  yAxis: {
    title: {
      text: 'Number of Employees'
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

});

mockData = [{
	"symbol": "2603",
	"name": "長榮",
	"dates": ["2021/06/20", "2021/06/21", "2021/06/22", "2021/06/23", "2021/06/24", "2021/06/25", "2021/06/26", "2021/06/27", "2021/06/28", "2021/06/29", "2021/06/30", "2021/07/01", "2021/07/02", "2021/07/03"],
	"popularities": [21, 33, 50, 99, 34, 56, 70, 89, 34, 33, 233, 600, 45, 198],
	"prices": [36, 35, 4, 22, 34, 78, 50, 99, 102, 343, 34, 21, 121, 356],
	"total_popularity": 198
}, {
	"symbol": "2609",
	"name": "陽明",
	"dates": ["2021/06/20", "2021/06/21", "2021/06/22", "2021/06/23", "2021/06/24", "2021/06/25", "2021/06/26", "2021/06/27", "2021/06/28", "2021/06/29", "2021/06/30", "2021/07/01", "2021/07/02", "2021/07/03"],
	"popularities": [21, 33, 50, 99, 34, 56, 70, 89, 34, 33, 233, 600, 45, 198],
	"prices": [34, 35, 34, 22, 34, 78, 50, 99, 102, 343, 34, 21, 121, 356],
	"total_popularity": 95
}, {
	"symbol": "2615",
	"name": "萬海",
	"dates": ["2021/06/20", "2021/06/21", "2021/06/22", "2021/06/23", "2021/06/24", "2021/06/25", "2021/06/26", "2021/06/27", "2021/06/28", "2021/06/29", "2021/06/30", "2021/07/01", "2021/07/02", "2021/07/03"],
	"popularities": [21, 33, 50, 99, 34, 56, 70, 89, 34, 33, 233, 600, 45, 198],
	"prices": [34, 35, 34, 22, 34, 78, 50, 99, 102, 343, 34, 21, 121, 356],
	"total_popularity": 70
}, {
	"symbol": "3481",
	"name": "群創",
	"dates": ["2021/06/20", "2021/06/21", "2021/06/22", "2021/06/23", "2021/06/24", "2021/06/25", "2021/06/26", "2021/06/27", "2021/06/28", "2021/06/29", "2021/06/30", "2021/07/01", "2021/07/02", "2021/07/03"],
	"popularities": [2, 3, 5, 9, 3, 5, 7, 8, 3, 3, 23, 60, 4, 19],
	"prices": [34, 35, 34, 22, 34, 78, 50, 99, 102, 343, 34, 21, 121, 35],
	"total_popularity": 46
}]