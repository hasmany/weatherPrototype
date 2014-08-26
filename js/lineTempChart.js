function LINECHARTNAMESPACE(){

  // private variables
  var timeArray = [];
  var convertedTime = [];
  var tempArray = [];
  var minTempArray = [];
  var maxTempArray = [];

  // BasicChartConfiguration
  // Passed to HighCharts object to set parameters
  var lineTempChartConfig = {
      chart: {
          renderTo: 'container',
          type: 'line'
      },
      title: {
        text: ""
      },
      xAxis: {
        categories: []
      },
      yAxis: {
        title: {
          text: ""
        },
        labels: {
          formatter: function() {
            return this.value + '\xB0 Celsius';
          }
       }
      },
      series: [{
        name: 'temperature',
        data: []
      },{
        name: "min temperature",
        data: []
      },{
        name: "max temperature",
        data: []
      }]
  };

  return {
    setChartTempOptions: function(data) {
      lineTempChartConfig.title.text = data.city.name.toUpperCase();
      lineTempChartConfig.xAxis.categories = this.parseTime(data);
      lineTempChartConfig.yAxis.title.text = "Temperature";
      lineTempChartConfig.series[0].data = this.parseDayTemp(data);
      lineTempChartConfig.series[1].data = this.parseMinTemp(data);
      lineTempChartConfig.series[2].data = this.parseMaxTemp(data);
      return lineTempChartConfig;
    },
    parseTime: function(data) {
      for (var i = 0, x = data.list.length; i < x; i++) {
        timeArray.push(data.list[i].dt);
      }
      return this.timeConvert(timeArray);
    },
    time: function(data) {
      var date = new Date([data] * 1000);
      console.log(date)
      return date.toDateString();
    },
    timeConvert: function(timeArray){
      for(var i = 0, x = timeArray.length; i < x; i++) {
        var result = this.time(timeArray[i]);
        convertedTime.push(result.slice(4,10));
      }
      return convertedTime;
    },
    parseDayTemp: function(data){
      for (var i = 0, x = data.list.length; i < x; i++) {
        tempArray.push(data.list[i].temp.day);
      }
      return tempArray;
    },
    parseMinTemp: function(data) {
      for(var i = 0, x = data.list.length; i < x; i++) {
        minTempArray.push(data.list[i].temp.min);
      }
      return minTempArray;
    },
    parseMaxTemp: function(data) {
      for (var i = 0, x = data.list.length; i < x; i++) {
        maxTempArray.push(data.list[i].temp.max);
      }
      return maxTempArray;
    }
  };
}






