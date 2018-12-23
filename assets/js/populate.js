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

$(document).ready(function () {
  
//Initialize
createGrid(numberOfWeeksInYear + 1, 80);
todaysDate = moment();
$('#expected-age').val(80);
$('#datepicker').val("30/12/1990");

//Datepicker init
  $('#datepicker').datepicker({
    format:'dd/mm/yyyy',
    autoclose: 'true',
    defaultViewDate: {
      month: 0,
      year: 1990
    }
  });

    $('#submit-button').on('click',function(e){
      console.log(expectedAge);
      selectedDate = moment($('#datepicker').val(), "DD/MM/YYYY");

      var diff = todaysDate.diff(selectedDate, 'week');

      if($('#ideal-age').prop("checked") == true){
        console.log("check");
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

        var tempLastBlock = 52 * 80;
        if($('#expected-age').val()!=""){
          var tempLastBlock = $('#expected-age').val() * 52;
        }
        for(var weekNo = 3494;weekNo<=tempLastBlock;weekNo++){
          $(".week_" + weekNo).addClass("retirement-age");
        }
        $(".week_" + diff).addClass("blink");

      } else {
          console.log("uncheck");
          $("#container").empty();
      createGrid(numberOfWeeksInYear + 1, expectedAge);


      for(var weekNo = 0;weekNo<diff;weekNo++){
        $(".week_" + weekNo).addClass("green-box");
      }

      $(".week_" + diff).addClass("blink");
      }






      


      // if($('#expected-age').val()!=""){
      //   expectedAge = $('#expected-age').val();
      //   $("#container").empty();
      //   createGrid(numberOfWeeksInYear + 1, expectedAge);
      // }

     

      console.log(expectedAge);
    
    });

      $('#ideal-age').click(function(){
        // selectedDate = moment($('#datepicker').val(), "DD/MM/YYYY");
    
      })

  });