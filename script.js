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
/*
var mockData = [{
  "symbol": "2303",
  "name": "聯電",
  "trends": [{
    "date": "2021-07-21",
    "quantity": 9999,
    "price": 654.0,
    "change": 434.0,
    "percentage": 3.0
  }, {
    "date": "2021-07-22",
    "quantity": 101840,
    "price": 2313.0,
    "change": 33.0,
    "percentage": -323.0
  }],
  "total_trends": 111839
}]
*/
var data = []
var maxPlotSize = 8
var charts = []

var loadData = async (type) => {

  data = []
  //var baseUrl =  'https://deerpark-ecs-alb-1261413734.us-east-2.elb.amazonaws.com/api'
  var baseUrl = 'https://trends.deer.solutions/api'

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
      title: { text: 'popularities' }
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

var clearTable = () => {
  for (var i = 1; i < 8; i++) {
    document.getElementById('stock-' + i).textContent = ''
    document.getElementById('day-before-yesterday-' + i).textContent = ''
    document.getElementById('yesterday-' + i).textContent = ''
    document.getElementById('today-predict-' + i).textContent = ''
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

  charts[maxPlotSize] = _plotSummary('container-0', 'trends', data[0].dates, trends)

}

var loadTable = () => {

  document.getElementById('day-before-yesterday-header').textContent = data[0]['trends'][0]['date']
  document.getElementById('yesterday-header').textContent = data[0]['trends'][1]['date']
  if (data[0]['trends'][2]) {
    document.getElementById('today-predict-header').textContent = data[0]['trends'][2]['date']
  }

  for (var i = 1; i <= data.length; i++) {

    document.getElementById('stock-' + i).textContent = data[i - 1]['symbol'] + ' - ' + data[i - 1]['name']

    var trends = data[i - 1]['trends']

    var quantity = trends[0]['quantity']
    var price = trends[0]['price']
    var change = trends[0]['change'] >= 0 ? '+' + trends[0]['change'] : trends[0]['change']
    var percentage = trends[0]['percentage'] >= 0 ? '+' + trends[0]['percentage'] + '%' : trends[0]['percentage'] + '%'
    document.getElementById('day-before-yesterday-' + i).textContent = quantity + ' | ' + price + ' | ' + change + ' (' + percentage + ')'

    quantity = trends[1]['quantity']
    price = trends[1]['price']
    change = trends[1]['change'] >= 0 ? '+' + trends[1]['change'] : trends[1]['change']
    percentage = trends[1]['percentage'] >= 0 ? '+' + trends[1]['percentage'] + '%' : trends[1]['percentage'] + '%'
    document.getElementById('yesterday-' + i).textContent = quantity + ' | ' + price + ' | ' + change + ' (' + percentage + ')'

    if (trends[2]) {
      quantity = trends[2]['quantity']
      price = trends[2]['price']
      change = trends[2]['change'] >= 0 ? '+' + trends[2]['change'] : trends[21]['change']
      percentage = trends[2]['percentage'] >= 0 ? '+' + trends[2]['percentage'] + '%' : trends[2]['percentage'] + '%'
      document.getElementById('today-predict-' + i).textContent = quantity + ' | ' + price + ' | ' + change + ' (' + percentage + ')'
    }

  }

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
  //data = mockData
  loadTable()
}

var loadInsSell = async () => {
  await loadData('ins-sell')
  loadTable()
}

initHighCharts()

window.onload = () => {

  console.log('onload!')

  loadPtt()

  document.getElementById("ptt-tab").onclick = () => {
    console.log('ptt clicked!')
    document.getElementById("table-block").classList.add("disabled")
    document.getElementById("chart-block").classList.remove("disabled")
    clearCharts()
    clearTable()
    loadPtt()
  }

  document.getElementById("reunion-tab").onclick = () => {
    console.log('reunion clicked!')
    document.getElementById("table-block").classList.add("disabled")
    document.getElementById("chart-block").classList.remove("disabled")
    clearCharts()
    clearTable()
    loadReunion()
  }

  document.getElementById("ins-buy-tab").onclick = () => {
    console.log('ins buy clicked!')
    document.getElementById("chart-block").classList.add("disabled")
    document.getElementById("table-block").classList.remove("disabled")
    clearCharts()
    clearTable()
    loadInsBuy()
  }

  document.getElementById("ins-sell-tab").onclick = () => {
    console.log('ins sell clicked!')
    document.getElementById("chart-block").classList.add("disabled")
    document.getElementById("table-block").classList.remove("disabled")
    clearCharts()
    clearTable()
    loadInsSell()
  }

}
