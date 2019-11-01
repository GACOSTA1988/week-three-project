// BUSINESS LOGIC


function converter(number) {


var words = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!", "test"]
var keyNumbers = ["3", "2", "1"]
var convertedNumbers ="";

for (i=0; i<number.length; i++) {
  if ( number === "3") {
    convertedNumbers = convertedNumbers + words [0];
    return convertedNumbers;
  }
  if ( number === "2") {
    convertedNumbers = convertedNumbers + words [1];
    return convertedNumbers;
  }
  if ( number === "1") {
    convertedNumbers = convertedNumbers + words [2];
    return convertedNumbers;
  }
};

for (i=0; i<number.length; i++) {
  if (keyNumbers.includes(number)) {
    convertedNumbers = convertedNumbers + words [3];
    return convertedNumbers;
  }
};



};
























// USER LOGIC
$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var input = $("#numberEnterLine").val();
    var output = converter(input);
    $("#results").text(output);
  });
});
