function returnDoubleDigits(no){
  if(no <= 9){
    return "0" + no;
  } else {
    return no;
  }
}

// function that builds a grid in the "container"
function createGrid(x, y) {
  var containerHeight = $('#container').innerHeight();
  var containerWidth = $('#container').innerWidth();
  var weekCounter = 0;

  for (var rows = 0; rows < y; rows++) {
    for (var columns = 0; columns < x; columns++) {
      if(columns === 0){
        $("#container").append("<div class='grid2 font-size-adjust'>"+ returnDoubleDigits(rows) +"</div>");
      } else {
          weekCounter++;
          $("#container").append("<div class='grid week_" + weekCounter + "'></div>");
      };
    }
  };
  $(".grid").width(containerWidth/x);
  $(".grid").height(window.innerHeight/y);

  $(".grid2").width(containerWidth/x);
  $(".grid2").height(window.innerHeight/y);

  $('#footer').css('margin-top',$('#container').height() + 100 );
};

var todaysDate;
var selectedDate;
var numberOfWeeksInYear = 52;
var startDate="30/12/1990";

$(document).ready(function () {
  createGrid(numberOfWeeksInYear + 1, 80);
  todaysDate = moment();

    //your code here
    console.log("javascript file running");
    $('#datepicker').datepicker({
     format:'dd/mm/yyyy',
     autoclose: 'true',
     defaultViewDate: {
       month: 0,
       year: 1990
     }
    });

    $('#submit-button').on('click',function(e){
      expectedAge = 80;
      expectedAge = $('#expected-age').val();
      console.log(expectedAge);
      selectedDate = moment($('#datepicker').val(), "DD/MM/YYYY");
      var diff = todaysDate.diff(selectedDate, 'week');


      for(var weekNo = 0;weekNo<diff;weekNo++){
        $(".week_" + weekNo).addClass("green-box");
      }

      $(".week_" + diff).addClass("blink");

      if(expectedAge !== 80){
        $("#container").empty();
        createGrid(numberOfWeeksInYear + 1, expectedAge);
      }
    });

  });