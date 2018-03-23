$(document).ready(function() {
  $("form").submit(function(event) {
    //var blanks = ["inputhobby", "SelectC", "SelectJavascript", "SelectReact", "firstlast" ]
    var react = $("select#reactproject").val();
    var csharp = $("select#cproject").val();
    var javascript = $("select#jproject").val();
  //var nameinput = $("input#name").val();

    //blanks.forEach(function(blank) {
      //var userInput = $("input." + blank).val();
      //$("." + blank) .text(userInput).val();
    //});

    if (javascript === "Most Likely") {
      $(".languages #javascriptinfo").toggle();
      $(".languages #cinfo").hide();
      $(".languages #reactinfo").hide();
    } else {
      alert("please see");
    }
    if (react === "Most Likely") {
        $(".languages #reactinfo").toggle();
        $(".languages #cinfo").hide();
        $(".languages #javascriptinfo").hide();
      } else {
        alert("please see");
      }
    if (csharp === "Most Likely") {
      $(".languages #cinfo").toggle();
      $(".languages #reactinfo").hide();
      $(".languages #javascriptinfo").hide();
    } else {
      alert("please see");
    }
    if (javascript === "Most Likely" || react === "Most Likely" || csharp === "Most Likely") {
      $(".languages").show();

    }



    event.preventDefault();
  });
});
