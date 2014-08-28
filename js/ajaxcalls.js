var ajaxModule = (function() {

   return {
     ajaxCallTemp: function (location,days,unit) {
      var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+location+"&mode=json&units=imperial&cnt="+ days;
      $.ajax(url,{
        success: function(data) {
        window.data = data;
        var chart = new Highcharts.Chart(lineChartTempModule.setChartTempOptions(data,unit));
        }
      });
    },

     ajaxCallHumidity: function(location,days,unit) {
      var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+location+"&mode=json&units=imperial&cnt="+ days;
      $.ajax(url,{
        success: function(data) {
        window.data = data;
        var chart = new Highcharts.Chart(combochartHumidModule.setChartTempOptions(data,unit));
        }
      });
    }
  };
})();
