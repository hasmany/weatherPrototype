var ajaxModule = (function() {

   return {
     ajaxCallTemp: function (location,days,unit) {
      var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+location+"&mode=json&units=imperial&cnt="+ days;
      $.ajax(url,{
        success: function(data) {
        window.data1 = data;
        var chart = new Highcharts.Chart(lineChartTempModule.setChartTempOptions(data,unit));
        }
      });
    },

     ajaxCallHumidity: function(location,days,unit) {
      var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+location+"&mode=json&units=imperial&cnt="+ days;
      $.ajax(url,{
        success: function(data) {
        window.data2 = data;
        var chart = new Highcharts.Chart(combochartHumidModule.setChartTempOptions(data,unit));
        }
      });
    },

    ajaxCompare1:function(location,days,unit) {
      var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+location+"&mode=json&units=imperial&cnt="+ days;
      $.ajax(url,{
        success: function(data) {

          window.data3 = data; // json object is available here
          console.log("comparison1");
        }
      });
    },

    ajaxCompare2:function(location,days,unit) {
      var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+location+"&mode=json&units=imperial&cnt="+ days;
      $.ajax(url,{
        success: function(testin123) {

          console.log("comparison2");
           // setTimeout(function(){console.log(data3)},2000);
          //compareChartTempModule.setChartTempOptions(data3,unit) //  return chart config object

          var options = compareChartTempModule.setChartTempOptions(data3,unit)
          console.log(options);
          var upgradedOptions = compareChartTempModule.updateChartTempOptions(options,testin123)
          console.log(upgradedOptions)
          console.log("comparison2");
        }
      });
    }
  };
})();
