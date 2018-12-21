// function that builds a grid in the "container"
function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
      for (var columns = 0; columns < x; columns++) {
          $("#container").append("<div class='grid'></div>");
      };
  };
  $(".grid").width(960/x);
  $(".grid").height(960/x);
};


$(document).ready(function () {
  createGrid(16);

    //your code here
    console.log("ASDASDASD")
    $('#datepicker').datepicker({
     format:'dd/mm/yyyy',
     startView:'1994'
    });



  });