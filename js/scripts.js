var singleDigitArray = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

var singleDigit = function(input) {
  onesPlace = singleDigitArray[input];
  return onesPlace;
}

$(document).ready(function(){

  $("form#userInput").submit(function(){
    event.preventDefault();
    console.log("catching form submit");
    var value = parseInt($("#inputString").val());
    $("#result").show();
    console.log(singleDigit(value));
    $("#resultP").text(singleDigit(value));
  });

});
