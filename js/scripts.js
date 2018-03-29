$(document).ready(function() {
  $("form").submit(function(event) {

    var react = $("select#reactproject").val();
    var csharp = $("select#cproject").val();
    var javascript = $("select#jproject").val();
    var blank = $("input#name1").val();
    var blank2 = $("input#hobby").val();



    if (blank === "") {
      alert("Please enter name!!");
      ("form").reset()
    } else {
      $(".languages #cnameinput").text($("input#name1").val());
    }


    if (blank2 === "") {
      alert("Please enter hobby!!");
      ("form").reset()
    }
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
