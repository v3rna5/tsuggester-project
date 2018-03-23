$(document).ready(function() {
  $("form").submit(function(event) {
    console.log("I AM THE QUIZ");
    var react = $("select#reactproject").val();

    if (react === 'Most Likely') {
        $(".languages #reactinfo").show();
      }


    event.preventDefault();
  });
});
