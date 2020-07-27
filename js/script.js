// what we do functions
$(document).ready(function () {
  $(".clickable").click(function () {
    $("#design").toggle();
    $("#icon").toggle();
  });
  $(".dev").click(function () {
    $("#dev_icon").toggle();
    $("#development").toggle();
  });
  $(".management").click(function () {
    $("#prod-icon").toggle();
    $("#product").toggle();
  });
});

// portfolio functions
$(document).ready(function () {
  $("#portfolio").mouseover(function () {
    $(".overlay").show()
    }).mouseout(function () {
      $(".overlay").hide()
    });

    $("#port").mouseover(function () {
      $(".p_name").show();
    }).mouseout(function () {
      $(".p_name").hide();
    });

    $("#port2").mouseover(function () {
      $(".project3").show();
        }).mouseout(function () {
            $(".project3").hide();
    });

    $("#port3").mouseover(function () {
      $(".project4").show()
        }).mouseout(function () {
      $(".project4").hide()
    });

    $("#port4").mouseover(function () {
        $(".project5").show()
          }).mouseout(function () {
        $(".project5").hide()
    });
    $("#port5").mouseover(function () {
        $(".project6").show()
          }).mouseout(function () {
        $(".project6").hide()
    });
    $("#port6").mouseover(function () {
        $(".project7").show()
          }).mouseout(function () {
        $(".project7").hide()
    });
    $("#port7").mouseover(function () {
        $(".project8").show()
          }).mouseout(function () {
        $(".project8").hide()
    });

});
// contact us functions

$(document).ready(function(){
    $('#contact form').submit(function (){
        let name  =  $('input#name').val();
        let email  = $('input#email').val()
        let  message = $('input#message').val()

        alert('Hello ' + name + ' we have received your message thank you for reaching out')
    });
})