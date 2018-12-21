// function that builds a grid in the "container"
function createGrid(x, y) {
  var containerHeight = $('#container').innerHeight();
  var containerWidth = $('#container').innerWidth();
  console.log(containerHeight);
  console.log(containerWidth);
  console.log(window.innerHeight);
  console.log(window.innerWidth);

  var counter = 0;

  for (var rows = 0; rows < x; rows++) {
      for (var columns = 0; columns < y; columns++) {
        counter++;
          $("#container").append("<div class='grid week_" + counter + " year_'" + rows + "'></div>");
      };
  };
  $(".grid").width(containerWidth/x);
  $(".grid").height(window.innerHeight/y);
};




$(document).ready(function () {
  createGrid(52, 100);

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