var singleDigitArray = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tensDigitArray = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];

var romanNumeralsArray = [
  ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  ["M", "MM", "MMM", "MV\u0305", "V\u0305", "V\u0305M", "V\u0305MM", "V\u0305MMM", "MX\u0305"]
];

var Convert = function(input) {
  var result = [];
  var splitInput = input.split("").reverse();
  console.log(splitInput);

  for(var index = 0; index < splitInput.length; index++){
    if(splitInput[index] === "0"){
      console.log("Found a zero: " + index);
    } else{
      var inputInt= parseInt(splitInput[index]);
      result.unshift(romanNumeralsArray[index][inputInt-1]);
      console.log(parseInt(splitInput[index]));
      console.log(romanNumeralsArray[index][inputInt-1]);
      // console.log(romanNumeralsArray[0][1]);
    }
  }


  // onesPlace = singleDigitArray[input-1];
  return result.join("");
}

// var tensDigit = function(input){
//   tensPlace = tensDigitArray[input-1];
//   return tensPlace;
// }

$(document).ready(function(){

  $("form#userInput").submit(function(){
    console.log(romanNumeralsArray[3][3]);
    event.preventDefault();
    console.log("catching form submit");
    var value = $("#inputString").val();
    $("#result").show();
    console.log(Convert(value));
    $("#resultP").text(Convert(value));
  });

});
