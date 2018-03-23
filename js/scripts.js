$(document).ready(function() {
  $("form").submit(function(event) {
    //var blanks = ["inputhobby", "SelectC", "SelectJavascript", "SelectReact", "firstlast" ]
    var react = $("select#reactproject").val();
    var csharp = $("select#cproject").val();
    var javascript = $("select#jproject").val();
    var nameinput = $("input#name1").val();



    if (javascript === "Most Likely") {

      $(".languages #javascriptinfo").toggle();
      $(".languages #cinfo").hide();
      $(".languages #reactinfo").hide();
    }

    if (react === "Most Likely") {
        $(".languages #reactinfo").toggle();
        $(".languages #cinfo").hide();
        $(".languages #javascriptinfo").hide();
      }

    if (csharp === "Most Likely") {
      $(".languages #cinfo").toggle();
      $(".languages #reactinfo").hide();
      $(".languages #javascriptinfo").hide();

    }
    if (javascript === "Most Likely" + react ==="Most Likely" + csharp ==="Most Likely") {
      alert("Please visit our store");
    }


    event.preventDefault();
  });
});
