var romanNumeralsArray = [
  ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  ["M", "MM", "MMM", "MV\u0305", "V\u0305", "V\u0305M", "V\u0305MM", "V\u0305MMM", "MX\u0305"]
];

var Convert = function(input) {
  var result = [];
  var splitInput = input.split("").reverse();

  for(var index = 0; index < splitInput.length; index++){
    if(splitInput[index] === "0"){
    } else{
      var inputInt= parseInt(splitInput[index]);
      result.unshift(romanNumeralsArray[index][inputInt-1]);
    }
  }
  return result.join("");
}

$(document).ready(function(){
  $("form#userInput").submit(function(){
    event.preventDefault();
    var value = $("#inputString").val();
    $("#result").show();
    $("#resultP").text(Convert(value));
  });
});
