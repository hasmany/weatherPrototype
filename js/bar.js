var options = {
    chart: {
        renderTo: 'container',
        type: 'line'
    },
    title: {
      text:"Fruit Consumption"
    },
    xAxis: {
      categories: ["Apple","Bananas","Oranges"]
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
        data: [1, 0, 4]
    }]
};

function setChartTempOptions(data) {
  // parses data from the API call
  options.title.text = data.city.name.toUpperCase();
  options.xAxis.categories = parseTime(data);
  options.yAxis.title.text = "Temperature";
  options.series[0].data = parseDayTemp(data)
  return options;
}

function parseTime(data) {
  // parses time from the API call
  var timeArray = [];
  for (var i = 0, x = data.list.length; i < x; i++) {
    timeArray.push(data.list[i].dt);
  }

  return timeConvert(timeArray);
}

function time(time) {
  // change unix time to readable date format
  var date = new Date([time] * 1000);
  return date.toDateString()
}

function timeConvert(timeArray) {
  // splices the time to include only the day and month
  var convertedTime = [];
  for (var i = 0, x = timeArray.length; i <x; i++) {
    var result = time(timeArray[i]);
    convertedTime.push(result.slice(4,10));
  }
  return convertedTime;
}

function parseDayTemp(data) {
  // parses the data form the data from the API call for day temperature
  var tempArray = [];
  for (var i = 0, x = data.list.length; i < x; i++) {
    tempArray.push(data.list[i].temp.day);
  }
  return tempArray;
}


$(document).ready(function() {
   $("button").on("click",function() {
     ajaxCall();
   });
});


function LINECHARTNAMESPACE(){
  // private variables
  var options = {
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
          data: ""
      }]
  };

  return {
    setChartTempOptions: function(data) {
      options.title.text = data.city.name.toUpperCase();
      options.xAxis.categories = parseTime(data);
      options.yAxis.title.text = "Temperature";
      options.series[0].data = parseDayTemp(data);
      return options;
    },
    parseTime: function(data) {
      var timeArray = [];
      for (var i = 0, x = data.list.length; i < x; i++) {
        timeArray.push(data.list[i].dt);
      }
    },
    time: function(data) {
      var date = new Date([time] * 1000);
      return date.toDateString();
    },
    timeConvert: function(timeArray){
      var convertedTime = [];
      for(var i = 0, x = timeArray.length; i < x; i++) {
        var result = time(timeArray[i]);
        convertedTime.push(result.slice(4,10));
      }
      return convertedTime;
    },
    parseDayTemp: function(data){
      var tempArray = [];
      for (var i = 0, x = data.list.length; i < x; i++) {
        tempArray.push(data.list[i].temp.day);
      }
      return tempArray;
    }
  };
}






