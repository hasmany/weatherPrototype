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
     var location2 = $("#location2").val();
     var days = $("#amount").val();
     var check = location && location2;
     if (!check) {
       alert("Please type in two cities to compare")
     }
     else {
      ajaxModule.ajaxCompare1(location,days,unit);
      ajaxModule.ajaxCompare2(location2,days,unit);
      alert("two cities nice!");
     }
     var unit = "";

     // need to make 2 ajax calls
     // each one will make adjusments to the
     // chart config
     // when both ajax request are finished, render chart

   });

});

