// BUSINESS LOGIC


function converter(number){


  var words = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!"] 

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
