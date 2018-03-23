$(document).ready(function() {
  $("form").submit(function(event) {
    var react = $("select#reactproject").val();
    var csharp = $("select#cproject").val();
    var javascript = $("select#jproject").val();

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
    if (javascript === "Most Likely") {
      $(".languages #javascriptinfo").toggle();
      $(".languages #cinfo").hide();
      $(".languages #reactinfo").hide();
    }



    event.preventDefault();
  });
});
