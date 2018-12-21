// function that builds a grid in the "container"
function createGrid(x, y) {
  var containerHeight = $('#container').innerHeight();
  var containerWidth = $('#container').innerWidth();
  var counter = 0;

  for (var rows = 0; rows < y; rows++) {
    // $("#container").append("<div class='year_" + rows + "'></div>");
    // $( "1" ).insertBefore($(".year_"+rows) ;
    // $( "1" ).before( $( ".year_"+rows ) );
    // $(".year_" + rows).append("1");

    for (var columns = 0; columns < x; columns++) {
      if(columns === 0){
        console.log("ASDASDs")
        $("#container").append("<div class='grid2' style='font-size:small'>"+ rows +"</div>");
      } else {
        counter++;
          $("#container").append("<div class='grid week_" + counter + "'></div>");
      };
    }
  };
  $(".grid").width(containerWidth/x);
  $(".grid").height(window.innerHeight/y);

  $(".grid2").width(containerWidth/x);
  $(".grid2").height(window.innerHeight/y);
};

var todaysDate;
var selectedDate;

$(document).ready(function () {
  createGrid(53, 80);
  todaysDate = moment();
    //your code here
    console.log("javascript file running");
    $('#datepicker').datepicker({
     format:'dd/mm/yyyy',
     startView:'1994',
     autoclose: 'true',
    });

    $('#datepicker').datepicker().on('changeDate', function (ev) {
      console.log("date changed");
      console.log($('#datepicker').val());
      // console.log($('#datepicker').date('date'));
      
      selectedDate = moment($('#datepicker').val(), "DD/MM/YYYY");
      console.log("selectedDate" + selectedDate);
      console.log("todaysDate" + todaysDate);
      var diff = todaysDate.diff(selectedDate, 'week');
      console.log(diff);


      for(var weekNo = 0;weekNo<diff;weekNo++){
        $(".week_" + weekNo).addClass("green-box");
      }
    });

  });