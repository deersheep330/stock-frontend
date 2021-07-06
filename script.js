var initHighCharts = () => {
  Highcharts.theme = {
    colors: ["#F92672", "#66D9EF", "#A6E22E", "#A6E22E"],
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
      tickWidth: 1
    },
    yAxis: {
      gridLineDashStyle: "Dot",
      gridLineColor: "#A2A39C",
      lineColor: "#A2A39C",
      minorGridLineColor: "#A2A39C",
      tickColor: "#A2A39C",
      tickWidth: 1
    },
    credits: {
      enabled: false
    }
  }

  Highcharts.setOptions(Highcharts.theme)
}

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

var data = []

var loadData = (type) => {
  data = []
  // call api on type
  console.log('type = ' + type)
}

var _plot = (_target, _title, _xAxis, _series) => {

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

var loadCharts = () => {
  for (var i = 0; i < data.length; i++) {

    var target = 'container-' + (i + 1)
    var title = data[i].symbol + ' - ' + data[i].name
    var dates = data[i].dates
    var series = [
      { name: 'prices', data: data[0].prices },
      { name: 'popularities', data: data[0].popularities }
    ]

    _plot(target, title, dates, series)

  }
}

var loadPtt = () => {
  loadData('ptt')
  data = mockData
  loadCharts()
}

var loadReunion = () => {
  loadData('reunion')
  loadCharts()
}

var loadInsBuy = () => {
  loadData('ins-buy')
  loadCharts()
}

var loadInsSell = () => {
  loadData('ins-sell')
  loadCharts()
}

initHighCharts()

window.onload = () => {

  console.log('onload!')

  loadPtt()

  document.getElementById("ptt-tab").onclick = () => {
    console.log('ptt clicked!')
    loadPtt()
  }

  document.getElementById("reunion-tab").onclick = () => {
    console.log('reunion clicked!')
    loadReunion()
  }

  document.getElementById("ins-buy-tab").onclick = () => {
    console.log('ins buy clicked!')
    loadInsBuy()
  }

  document.getElementById("ins-sell-tab").onclick = () => {
    console.log('ins sell clicked!')
    loadInsSell()
  }

}
