$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var input = $("#numberEnterLine").val();
    var output = converter(input);
    $("#results").text(output);
  });
});
