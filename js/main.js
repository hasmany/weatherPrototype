$(document).ready(function() {
   $("button").on("click",function() {
      var location = $("#location").val();
      var days = $("#amount").val();
      var unit = "";
      if($("input[value='Fahrenheit']").is(':checked')) {
        unit = "Fahrenheit";
      }
     console.log("click event triggered!");
     ajaxCall(location,days,unit);
   });
});

