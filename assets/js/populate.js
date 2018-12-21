// function that builds a grid in the "container"
function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
      for (var columns = 0; columns < x; columns++) {
          $("#container").append("<div class='grid'></div>");
      };
  };
  $(".grid").width(380/x);
  $(".grid").height(380/x);
};




$(document).ready(function () {
  createGrid(52);

    //your code here
    console.log("ASDASDASD")
    $('#datepicker').datepicker({
     format:'dd/mm/yyyy',
     startView:'1994',
     autoclose: 'true',
    });

    $('#datepicker').datepicker().on('changeDate', function (ev) {
      console.log("date changed");
      console.log(ev.date);
    });

  });