var initHighCharts = () => {
  Highcharts.theme = {
    colors: ["#F92672", "#66D9EF", "#A6E22E", "#00FF00", "#AAAAAA", "#FED966", "#7226F9", "#FF00FF"],
    chart: {
      backgroundColor: "#272822",
      style: {
        fontFamily: "Inconsolata",
        color: "#A2A39C"
      },
      height: "50%"
    },
    title: {
      style: {
        color: "#A2A39C"
      },
      align: "left"
    },
    subtitle: {
      style: {
        color: "#A2A39C"
      },
      align: "left"
    },
    legend: {
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "normal",
        color: "#A2A39C"
      }
    },
    xAxis: {
      gridLineDashStyle: "Dot",
      gridLineWidth: 1,
      gridLineColor: "#A2A39C",
      lineColor: "#A2A39C",
      minorGridLineColor: "#A2A39C",
      tickColor: "#A2A39C",
      tickWidth: 1,
      labels: {
        style: {
           color: '#FFF',
           font: '11px Trebuchet MS, Verdana, sans-serif'
        }
      },
      title: {
        style: {
           color: '#FFF',
           font: '12px Trebuchet MS, Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      gridLineDashStyle: "Dot",
      gridLineColor: "#A2A39C",
      lineColor: "#A2A39C",
      minorGridLineColor: "#A2A39C",
      tickColor: "#A2A39C",
      tickWidth: 1,
      labels: {
        style: {
           color: '#FFF',
           font: '11px Trebuchet MS, Verdana, sans-serif'
        }
      },
      title: {
        style: {
           color: '#FFF',
           font: '12px Trebuchet MS, Verdana, sans-serif'
        }
      }
    },
    credits: {
      enabled: false
    }
  }

  Highcharts.setOptions(Highcharts.theme)
}
/*
var mockData = [{
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
*/
var data = []
var maxPlotSize = 8
var charts = []

var loadData = async (type) => {

  data = []
  var baseUrl =  'http://deerpark-ecs-alb-1261413734.us-east-2.elb.amazonaws.com/api'

  try {
    const response = await axios.get(baseUrl + '/' + type)
    console.log('==> get ' + type + ' data')
    console.log(response.data)
    data = response.data
  } 
  catch (error) {
    console.error(error)
  }

}

var _plot = (_target, _title, _xAxis, _series) => {

  return Highcharts.chart(_target, {

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

var _plotSummary = (_target, _title, _xAxis, _series) => {

  return Highcharts.chart(_target, {

    title: {
      text: _title
    },

    xAxis: {
      categories: _xAxis
    },
  
    yAxis: {
      title: { text: 'popularity' }
    },
  
    series: _series
  
  })

}

var clearCharts = () => {
  for (var i = 0; i < maxPlotSize + 1; i++) {
    if (charts[i]) {
      charts[i].destroy()
      charts[i] = undefined
    }
  }
}

var loadCharts = () => {

  var max = (data.length > maxPlotSize) ? maxPlotSize : data.length

  var trends = []

  for (var i = 0; i < max; i++) {

    var target = 'container-' + (i + 1)
    var title = data[i].symbol + ' - ' + data[i].name
    var dates = data[i].dates
    var series = [
      { name: 'prices', data: data[i].prices },
      { name: 'popularities', data: data[i].popularities, yAxis: 1 }
    ]

    charts[i] = _plot(target, title, dates, series)

    trends[i] = { name: title, data: data[i].popularities }

  }

  charts.push(_plotSummary('container-0', 'trends', data[0].dates, trends))

}

var loadPtt = async () => {
  await loadData('ptt')
  //data = mockData
  loadCharts()
}

var loadReunion = async () => {
  await loadData('reunion')
  loadCharts()
}

var loadInsBuy = async () => {
  await loadData('ins-buy')
  loadCharts()
}

var loadInsSell = async () => {
  await loadData('ins-sell')
  loadCharts()
}

initHighCharts()

window.onload = () => {

  console.log('onload!')

  loadPtt()

  document.getElementById("ptt-tab").onclick = () => {
    console.log('ptt clicked!')
    clearCharts()
    loadPtt()
  }

  document.getElementById("reunion-tab").onclick = () => {
    console.log('reunion clicked!')
    clearCharts()
    loadReunion()
  }

  document.getElementById("ins-buy-tab").onclick = () => {
    console.log('ins buy clicked!')
    clearCharts()
    loadInsBuy()
  }

  document.getElementById("ins-sell-tab").onclick = () => {
    console.log('ins sell clicked!')
    clearCharts()
    loadInsSell()
  }

}
