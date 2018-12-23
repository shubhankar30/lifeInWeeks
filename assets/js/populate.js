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
var expectedAge = 80;
var setBlink = false;
var diff = 0;

$(document).ready(function () {
  //Initialize
  todaysDate = moment();
  $('#expected-age').val(80);
  createGrid(numberOfWeeksInYear + 1, 80);

  //Datepicker init
  $('#datepicker').datepicker({
    format:'dd/mm/yyyy',
    autoclose: 'true',
    defaultViewDate: {
      month: 0,
      year: 1990
    }
  });


  $('#datepicker').datepicker().on('changeDate', function (ev) {
    if(setBlink){
      $(".week_" + diff).removeClass("blink");
      for(var weekNo = 0;weekNo<diff;weekNo++){
        $(".week_" + weekNo).removeClass("green-box");
      }
      selectedDate = ($('#datepicker').val());
      diff = todaysDate.diff(moment(selectedDate), 'week');
      for(var weekNo = 0;weekNo<diff;weekNo++){
        $(".week_" + weekNo).addClass("green-box");
      }
      $(".week_" + diff).addClass("blink");
    }

    selectedDate = ($('#datepicker').val());
    diff = todaysDate.diff(selectedDate, 'week');

    for(var weekNo = 0;weekNo<diff;weekNo++){
      $(".week_" + weekNo).addClass("green-box");
    }

    $(".week_" + diff).addClass("blink");
    setBlink = true;
  });


  $("#ideal-age").change(function() {

    //Find last block id according to expected age
    var lastBlockId = $('#expected-age').val() * 52;

    //get the current age week
    var diff = todaysDate.diff(selectedDate, 'week');

    if(this.checked) {
      //Display colour codes
      $('#chart-ages').show();

      //Colour all blocks
      for(var weekNo = 0;weekNo<=312;weekNo++){
        $(".week_" + weekNo).addClass("early-age");
      }
      for(var weekNo = 313;weekNo<=834;weekNo++){
        $(".week_" + weekNo).addClass("school-age");
      }
      for(var weekNo = 835;weekNo<=1147;weekNo++){
        $(".week_" + weekNo).addClass("college-age");
      }
      for(var weekNo = 1148;weekNo<=3493;weekNo++){
        $(".week_" + weekNo).addClass("career-age");
      }
      for(var weekNo = 0;weekNo<diff;weekNo++){
        $(".week_" + weekNo).addClass("green-box");
      }
      for(var weekNo = 3494;weekNo<=lastBlockId;weekNo++){
        $(".week_" + weekNo).addClass("retirement-age");
      }

    } else {
      //Hide colour chart
    $('#chart-ages').hide();

    //Remove colour from all blocks
    for(var weekNo = 0;weekNo<=312;weekNo++){
      $(".week_" + weekNo).removeClass("early-age");
    }
    for(var weekNo = 313;weekNo<=834;weekNo++){
      $(".week_" + weekNo).removeClass("school-age");
    }
    for(var weekNo = 835;weekNo<=1147;weekNo++){
      $(".week_" + weekNo).removeClass("college-age");
    }
    for(var weekNo = 1148;weekNo<=3493;weekNo++){
      $(".week_" + weekNo).removeClass("career-age");
    }    
    for(var weekNo = 3494;weekNo<=lastBlockId;weekNo++){
      $(".week_" + weekNo).removeClass("retirement-age");
    }
  }})



      $('#ideal-age').click(function(){
        // selectedDate = moment($('#datepicker').val(), "DD/MM/YYYY");
    
      })

  });