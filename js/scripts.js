// BUSINESS LOGIC


function converter(number) {


var words = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!", "test"]
var keyNumbers = ["3", "2", "1"]
var convertedNumbers ="";

// RETURN THE WORD IN REGARDS TO ITS SPECIFIC number
// THIS WILL RETURN I'm sorry, Dave. I'm afraid I can't do that WHEN NUMBER 3 IS ENTERED
for (i=0; i<number.length; i++) {
  if ( number === "3") {
    convertedNumbers = convertedNumbers + words[0];
    return convertedNumbers;
  }
  // THIS WILL RETURN BOOP WHEN NUMBER 2 IS ENTERED
  if ( number === "2") {
    convertedNumbers = convertedNumbers + words[1];
    return convertedNumbers;
  }
  // THIS WILL RETURN BEEP WHEN 1 IS ENTERED
  if ( number === "1") {
    convertedNumbers = convertedNumbers + words[2];
    return convertedNumbers;
  }
};
// THIS FOR LOOP WILL DETECT IF ANY OF THE keyNumbers ARRAY ELEMENTS ARE INCLUDED IN THE INPUT NUMBERS
for (i=0; i<number.length; i++) {
  // THIS WILL RETURN I'm sorry, Dave. I'm afraid I can't do that WHEN NUMBER 3 IS INCLUDED IN THE ENTERED NUMBER
  if (number.includes(keyNumbers[0])) {
    convertedNumbers = convertedNumbers + words[0];
    return convertedNumbers;
  }
    // THIS WILL RETURN BOOP WHEN NUMBER 2 IS INCULDED IN THE ENTERED NUMBER
  if (number.includes(keyNumbers[1])) {
    convertedNumbers = convertedNumbers + words[1];
    return convertedNumbers;
  }
  // THIS WILL RETURN BEEP WHEN NUMBER 1 IS INCULDED IN THE ENTERED NUMBER
  if (number.includes(keyNumbers[2])) {
    convertedNumbers = convertedNumbers + words[2];
    return convertedNumbers;
  }
};
for (var i = 0; i < number.length; i++) {
if (number === "4") {
  var myGreaterFive = [" 0"," Beep!", " Boop!", " I'm sorry, Dave. I'm afraid I can't do that. "]

  convertedNumbers = convertedNumbers + myGreaterFive + ", " + number[i];
  return convertedNumbers
};
}


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
