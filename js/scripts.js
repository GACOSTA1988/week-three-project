
// BUSINESS LOGIC

// MY FUNCTION NAME
function converter(number) {

  // MY VARIABLES TO CALL ON FUNCTIONS
  var myWords = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!", "test"]
  var convertedNumbers =[];

  // THIS LOOP WILLBE TO DETECT IF 3, 2, or 1 ARE INCLUDED IN THE INPUT NUMBERS
  for (i=0; i<number.length; i++) {
    // THIS WILL RETURN I'm sorry, Dave. I'm afraid I can't do that WHEN NUMBER 3 IS INCLUDED IN THE ENTERED NUMBER
    if (number.includes(3)) {
      convertedNumbers = convertedNumbers + myWords[0];
      return convertedNumbers;
    }

    // THIS WILL RETURN BOOP WHEN NUMBER 2 IS INCULDED IN THE ENTERED NUMBER
    if (number.includes(2)) {
      convertedNumbers = convertedNumbers + myWords[1];
      return convertedNumbers;
    }

    // THIS WILL RETURN BEEP WHEN NUMBER 1 IS INCULDED IN THE ENTERED NUMBER
    if (number.includes(1)) {
      convertedNumbers = convertedNumbers + myWords[2];
      return convertedNumbers;
    }
  };

  // THIS WILL RETURN: ,"Beep!", "Boop!","I'm sorry, Dave. I'm afraid I can't do that." AND
  // EACH NUMBER FROM "INPUT NUMBER" DOWN TO 4. THEN WILL PUSH LOOP RETURNS INTO ARRAY
  var myNumber = parseInt(number);
  if (myNumber > 3) {
    // UNDEFINED ARRAY TO PUSH INTO
    var myNewList = [];

    for (var i = 0; i <= myNumber; i++) {

      if (i === 1) {
        myNewList.push(myWords[2]);
        continue;
      }
      if (i === 2) {
        myNewList.push(myWords[1]);
        continue;
      }
      if (i === 3) {
        myNewList.push(myWords[0]);
        continue;
      }

      myNewList.push(i.toString());

    }

    return myNewList;
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











// CODE THAT WAS REMOVED BUT WORKS-SAVE FOR REF!

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


        // SECTION 3
        // THIS LOOP WILL IDENTIFY WHEN NUMBER ENTERED IS > 5
        // for (i = 0; i < number.length; i++) {
          // THIS WILL RETURN "0","Beep!", "Boop!","I'm sorry, Dave. I'm afraid I can't do that." WHEN NUMBER ENTERED IS = 4
          // if (number === "4") {
            //   convertedNumbers = convertedNumbers + myGreaterFive + ", " + number[i];
            //   return convertedNumbers
            // }
