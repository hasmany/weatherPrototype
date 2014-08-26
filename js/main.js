$(document).ready(function() {
   $("#tempbutton").on("click",function() {
      var location = $("#location").val();
      var days = $("#amount").val();
      var unit = "";
      if($("input[value='Fahrenheit']").is(':checked')) {
        unit = "Fahrenheit";
      }
     console.log("click event triggered!");
     ajaxCallTemp(location,days,unit);
   });

   $("#humiditybutton").on("click",function() {
      var location = $("#location").val();
      var days = $("#amount").val();
      var unit = "";
      if($("input[value='Fahrenheit']").is(':checked')) {
        unit = "Fahrenheit";
      }
     console.log("click event triggered!");
     ajaxCallHumidity(location,days,unit);
   });
});

