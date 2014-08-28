$(document).ready(function() {
   $("#tempbutton").on("click",function() {
      var location = $("#location").val();
      var days = $("#amount").val();
      var unit = "";
      if($("input[value='Fahrenheit']").is(':checked')) {
        unit = "Fahrenheit";
      }
     console.log("click event triggered!");
     ajaxModule.ajaxCallTemp(location,days,unit);
   });

   $("#humiditybutton").on("click",function() {
      var location = $("#location").val();
      var days = $("#amount").val();
      var unit = "";
      if($("input[value='Fahrenheit']").is(':checked')) {
        unit = "Fahrenheit";
      }
     console.log("click event triggered!");
     ajaxModule.ajaxCallHumidity(location,days,unit);
   });

   $("#compare").on("click",function() {
     var location = $("#location").val();
     var days = $("#amount").val();
     var unit = "";
     // need to make 2 ajax calls
     // each one will make adjusments to the
     // chart config
     // when both ajax request are finished, render chart

   });

});

