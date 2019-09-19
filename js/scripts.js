$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let colorInput = parseInt($("#color").val());
    let animalInput = parseInt($("#animal").val());
    let characterInput = parseInt($("#character").val());
    let houseOutput = colorInput + animalInput + characterInput;


    $("#results").show();
    if (houseOutput <= 3) {
      $("#house").text("Gryffindor");
    }
    else if (houseOutput <= 6) {
      $("#house").text("Slytherin");
    }
    else if (houseOutput <= 9) {
      $("#house").text("Hufflepuff");
    }
    else if (houseOutput <= 3) {
      $("#house").text("Ravelclaw");
    }

    let elmnt = document.getElementById("results");
    elmnt.scrollIntoView();

  });
});
