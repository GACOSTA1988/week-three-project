// BUSINESS LOGIC

// MY FUNCTION NAME
function converter(number) {

  // MY VARIABLES TO CALL ON FUNCTIONS
  var words = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!", "test"]
  var keyNumbers = ["3", "2", "1"]
  var convertedNumbers ="";
  var myGreaterFive = [" 0"," Beep!", " Boop!", " I'm sorry, Dave. I'm afraid I can't do that."]



// WILL POTENTIAL REMOTE BELOW FIRTS SECTION SINCE SPECS WILL BE COVERED BY SECTION 2

// ENDED UP REMOVING SECTION 1

// SECTION 1
  // RETURN THE WORD IN REGARDS TO ITS SPECIFIC number
  // THIS WILL RETURN I'm sorry, Dave. I'm afraid I can't do that WHEN NUMBER 3 IS ENTERED
  // for (i=0; i<number.length; i++) {
  //   if ( number === "3") {
  //     convertedNumbers = convertedNumbers + words[0];
  //     return convertedNumbers;
  //   }
  //
  //   // THIS WILL RETURN BOOP WHEN NUMBER 2 IS ENTERED
  //   if ( number === "2") {
  //     convertedNumbers = convertedNumbers + words[1];
  //     return convertedNumbers;
  //   }
  //
  //   // THIS WILL RETURN BEEP WHEN 1 IS ENTERED
  //   if ( number === "1") {
  //     convertedNumbers = convertedNumbers + words[2];
  //     return convertedNumbers;
  //   }
  // };


// SECTION 2
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


// NOT WORKING AS DESIRED-NEED TO TROUBLESHOOT (SUBTRACTING DOWN FROM ENTERED NUMBER TILL INDEX === 4)

  // SECTION 3
  // THIS LOOP WILL IDENTIFY WHEN NUMBER ENTERED IS > 5
  for (var i = 0; i < number.length; i++) {
    // THIS WILL RETURN "0","Beep!", "Boop!","I'm sorry, Dave. I'm afraid I can't do that." WHEN NUMBER ENTERED IS = 4
    if (number === "4") {
      convertedNumbers = convertedNumbers + myGreaterFive + ", " + number[i];
      return convertedNumbers
    }

    // THIS WILL RETURN "0","Beep!", "Boop!","I'm sorry, Dave. I'm afraid I can't do that." AND NUMBERS IN BETWEEN UP TILL THE ENTERED VALUE
    if (number > 4) {
      var newNumber = parseInt(number) - 1;
      convertedNumbers = convertedNumbers + myGreaterFive + ", " + newNumber + ", " + number[i];
      console.log(number);
      return convertedNumbers;
    }
  };
};



// FRONT END LOGIC
$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    // THIS WILL RECEIVE THE NUMBER INPUTED ON ENTRY FORM
    var input = $("#numberEnterLine").val();
    // THIS WILL HOLD RECEIVE THE RESULTS OF THE CONVERTER FUNCTION
    var output = converter(input);
    // THIS WILL SEND RESULTS TO THE DESIRED HTML LOCATION
    $("#results").text(output);
  });
});
