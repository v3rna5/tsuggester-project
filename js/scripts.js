$(document).ready(function() {
  $("form").submit(function(event) {
    //var blanks = ["inputhobby", "SelectC", "SelectJavascript", "SelectReact", "firstlast" ]
    var react = $("select#reactproject").val();
    var csharp = $("select#cproject").val();
    var javascript = $("select#jproject").val();
    //var nameinput = $("input#name1").val();
    var blanks = ["cnameinput"];
    blanks.forEach(function(blank) {
    var userInput = $("input.name" + blank).val();
          $("." + blank).text(userInput).val();
        });

        alert("Please enter name");


    if (javascript === "Most Likely") {
      $(".languages #javascriptinfo").toggle();
      $(".languages #cinfo").hide();
      $(".languages #reactinfo").hide();
    } else {
    $(".languages #information").show();
    }
    if (react === "Most Likely") {
        $(".languages #reactinfo").toggle();
        $(".languages #cinfo").hide();
        $(".languages #javascriptinfo").hide();
      }else {

            $(".languages #information").show();
      }

    if (csharp === "Most Likely") {
      $(".languages #cinfo").toggle();
      $(".languages #reactinfo").hide();
      $(".languages #javascriptinfo").hide();

    } else {

          $(".languages #information").show();
    }


    event.preventDefault();
  });
});
