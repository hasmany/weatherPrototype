var compareChartTempModule = (function (){

  // private variables
  var timeArray = [];
  var convertedTime = [];
  var tempArray = [];
  var minTempArray = [];
  var maxTempArray = [];
  var celsiusToFarenArray = [];

  // private functions
  var parseTime =  function (data) {
      for (var i = 0, x = data.list.length; i < x; i++) {
        timeArray.push(data.list[i].dt);
      }
      return timeConvert(timeArray);
  };

  var time =function(data) {
      var date = new Date([data] * 1000);
      return date.toDateString();
  };

  var timeConvert = function(timeArray){
      for(var i = 0, x = timeArray.length; i < x; i++) {
        var result = time(timeArray[i]);
        convertedTime.push(result.slice(4,10));
      }
      return convertedTime;
  };

  var parseDayTemp = function(data){
      for (var i = 0, x = data.list.length; i < x; i++) {
        tempArray.push(data.list[i].temp.day);
      }
      return tempArray;
  };

  var celsiusToFaren =  function(tempArray) {
      for (var i = 0, x = tempArray.length; i < x; i++) {
        celsiusToFarenArray.push(tempArray[i] * 1.8 + 32);
      }
      return celsiusToFarenArray;
  };

  var parseMinTemp = function(data) {
      for(var i = 0, x = data.list.length; i < x; i++) {
        minTempArray.push(data.list[i].temp.min);
      }
      return minTempArray;
  };


  var parseMaxTemp =  function(data) {
      for (var i = 0, x = data.list.length; i < x; i++) {
        maxTempArray.push(data.list[i].temp.max);
      }
      return maxTempArray;
  };

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
      }]
  };

  return {
    setChartTempOptions: function(data,unit) {
      lineTempChartConfig.title.text = data.city.name.toUpperCase();
      lineTempChartConfig.xAxis.categories = parseTime(data);
      lineTempChartConfig.yAxis.title.text = "Temperature";
      if (unit == "Fahrenheit") {
        lineTempChartConfig.series[0].data = celsiusToFaren(parseDayTemp(data));
        lineTempChartConfig.yAxis.labels = {
          formatter: function() {
            return this.value + "\xB0 Fahrenheit";
          }
        };
      }
      else {
        lineTempChartConfig.series[0].data = parseDayTemp(data);
      }
      return lineTempChartConfig;
    }
  };
})();






