$(document).ready(function(){

  //temporary variable storage
  //push add time button -> sends temp var into obj array

  var timeIn, timeOut, decimalVal, decimalIn, decimalOut, differenceOf = "";

  $("#time-in").keyup(function(){
    timeIn = $(this).val();
    var decimalIn = calculator(timeIn, decimalVal);
    $("#display-time-in").attr("placeholder", decimalIn.toFixed(2));
    var differenceOf = difference();
    $("#total-time").attr("value", differenceOf.toFixed(2))
  });

  $("#time-out").keyup(function(){
    timeOut = $(this).val();
    var decimalOut = calculator(timeOut, decimalVal)
    $("#display-time-out").attr("placeholder", decimalOut.toFixed(2));
    var differenceOf = difference();
    $("#total-time").attr("value", differenceOf.toFixed(2))
  });

  function calculator(timeSeparate, decimaled){
    var timeSplit = timeSeparate.split(":");
    var decimalHr = timeSplit[1] / 60;
    var decimaled = parseInt(timeSplit[0]) + parseFloat(decimalHr);
    return decimaled;
  }

  function difference(){
    var x = parseFloat($("#display-time-in").attr("placeholder"));
    var y = parseFloat($("#display-time-out").attr("placeholder"));
    return y-x;

  }

});
