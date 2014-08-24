 function ajaxCall() {
  var location = $("#location").val();
  var days = $("#amount").val();
  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+location+"&mode=json&units=imperial&cnt="+ days;
  $.ajax(url,{
    success: function(data) {
    window.data = data;
    var lineChartConfigParser = LINECHARTNAMESPACE();
    var chart = new Highcharts.Chart(lineChartConfigParser.setChartTempOptions(data));
    }
  });
}


