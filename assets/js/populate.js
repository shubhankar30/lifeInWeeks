function returnDoubleDigits(no){
  if(no <= 9){
    return "0" + no;
  } else {
    return no;
  }
}

function populateFunction(){

    if(setBlink){
      $(".week_" + diff).removeClass("blink");
      for(var weekNo = 0;weekNo<diff;weekNo++){
        $(".week_" + weekNo).removeClass("green-box");
      }
      selectedDate = moment($('#datepicker').val(),"DD/MM/YYYY");
      diff = todaysDate.diff((selectedDate), 'week');
      for(var weekNo = 0;weekNo<diff;weekNo++){
        $(".week_" + weekNo).addClass("green-box");
      }
      $(".week_" + diff).addClass("blink");

    } else {

    selectedDate = moment($('#datepicker').val(),"DD/MM/YYYY");
    diff = todaysDate.diff(selectedDate, 'week');
    for(var weekNo = 0;weekNo<diff;weekNo++){
      $(".week_" + weekNo).addClass("green-box");
    }

    $(".week_" + diff).addClass("blink");
    setBlink = true;
  }
}

// function that builds a grid in the "container"
function createGrid(x, y) {
  var containerHeight = $('#container').innerHeight();
  var containerWidth = $('#container').innerWidth();

  var weekCounter = 0;

   $test = $("<div />");
  for (var rows = 0; rows < y; rows++) {
    for (var columns = 0; columns < x; columns++) {
      if(columns === 0){
        $test.append("<div class='grid2 font-size-adjust'>"+ returnDoubleDigits(rows) +"</div>");
      } else {
          weekCounter++;
          $test.append("<div class='grid week_" + weekCounter + "'></div>");
      };
    }
  };
  $("#blank-grid").append($test);

weekCounter = 0;
   $test2 = $("<div/>");
  for (var rows = 0; rows < y; rows++) {
    for (var columns = 0; columns < x; columns++) {
      if(columns === 0){
          $test2.append("<div class='grid2 font-size-adjust'>"+ returnDoubleDigits(rows) +"</div>");
      } else {
        weekCounter++;
        if(weekCounter<=312){
          $test2.append("<div class='grid week_" + weekCounter + " early-age'></div>");
        } else if(weekCounter >= 312 && weekCounter <= 834){
          $test2.append("<div class='grid week_" + weekCounter + " school-age'></div>");
        } else if(weekCounter >= 835 && weekCounter <= 1148) {
          $test2.append("<div class='grid week_" + weekCounter + " college-age'></div>");
        } else if(weekCounter >= 1149 && weekCounter <= 3493){
          $test2.append("<div class='grid week_" + weekCounter + " career-age'></div>");
        }else if(weekCounter >= 3494){
          $test2.append("<div class='grid week_" + weekCounter + " retirement-age'></div>");
        }
      }};
  };
  // $("#container").append($test);
  $("#color-grid").append($test2);
  // $("#container2").hide();

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
var $test2;
var $test;

$(document).ready(function () {

  var logoNum = Math.floor(Math.random() * 6) + 1;
  var temp = Math.random();
  $('#logo-id').attr('src', 'images/logo' + logoNum + '.svg');

  //Initialize
  todaysDate = moment();
  $('#expected-age').val(80);
  createGrid(numberOfWeeksInYear + 1, 80);

  $('#submit-button').on('click', function () {
    populateFunction();
  });


  $("#ideal-age").change(function() {
    if(this.checked) {
      $("#blank-grid").hide();
      $("#color-grid").show();
      $("#chart-ages").show();
    } else{
      $("#blank-grid").show();
      $("#color-grid").hide();
      $("#chart-ages").hide();
    }

    })

  });