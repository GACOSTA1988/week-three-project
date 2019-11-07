
// BUSINESS LOGIC

// MY FUNCTION NAME
function converter(number) {
  // LOCAL VARIABLES-SCOPED TO INSIDE OF THIS FUNCTION
  var myWords = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!", "test"]
  var myNumber = parseInt(number);
  var myNewList = [];

// FOR LOOP THAT WILL CREATE ARRAY OF NUMBERS
  for (var i = 0; i <= myNumber; i++) {
    myNewList.push(i);
  }

// FOR LOOP THAT WILL MUTATE NUMBER ARRAY WITH DESIRED SPECS
  for (var i=0; i<myNewList.length; i++) {
    if (myNewList[i].toString().includes("3")) {
      myNewList[i] = myWords[0]
    }

    if (myNewList[i].toString().includes("2")) {
      myNewList[i] = myWords[1]
    }

    if (myNewList[i].toString().includes("1")) {
      myNewList[i] = myWords[2]
    }
  };
  // TYPEOF NUMBER CHECK-✅😎
  console.log(typeof myNewList[0]);
  // TYPEOF STRING CHECK-✅😎
  console.log(typeof myNewList[1]);
  return myNewList;
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
