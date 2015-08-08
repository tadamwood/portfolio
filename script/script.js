$(document).ready(function() {
  function initialize() {
    fixDiv();
    smoothScroller();
    modal();
    clickAnimate();
  }
  function fixDiv() {
    var $div = $(".navbar");
    if ($(window).scrollTop() > $div.data("top")) {
      $('.navbar').css({
        'position': 'fixed',
        'top': '0',
        'width': '100%',
        'z-index': '100'
      });
      $('.navbar').addClass('animated fadeInUp');

    } else {
      $('.navbar').css({
        'position': 'static',
        'width': '100%'
      });
      $('.navbar').removeClass('animated fadeInUp');
    }
  }

  $(".navbar").data("top", $(".navbar").offset().top); // set original position on load
  $(window).scroll(fixDiv);

  // smooth scroll
  function smoothScroller() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 200
          }, 1000);
          return false;
        }
      }
    });
  }

  function modal() {
    // setting up variables for easier clarity
    var wrapper    =    $('.modal-wrapper'),
        modal      =    $('.modal'),
        body       =    $('body'),
        work_item  =    $('.work-item'),
        close      =    $('#modal-close'),
        stopScroll =    'stop-scroll',
        active     =    'is-active';

    // open on .work-item click
    work_item.on('click', function() {
      // gets the clicked items data attribute of data-work
      var item = $(this).data("work");

      // fades in modal background
      wrapper.fadeIn(200);

      // binds the data from what was clicked to the specific project item and then adds the class
      $("#" + item).addClass(active);

      // adds the body class
      body.addClass(stopScroll);
    });

    // close on #modal-close click
    close.on('click', function() {
      // fires the close function
      closer();
    });

    // this checks for keyboard events
    $(document).keyup(function(e) {
      // this checks for the esc key
       if (e.keyCode == 27) {
        // fires the close function
        closer();
      }
    });

    // this is the close function
    function closer() {
      // fadding out the wrapper
      wrapper.fadeOut(200);

      // removing the active class from all modal
      modal.removeClass(active);

      // removes the body class
      body.removeClass(stopScroll);
    }
  }

  // animate on click
  function clickAnimate() {
    $('.work-item').on('mouseover', function() {
      $(this).addClass('animated pulse');
    });
    //remove the animate class on mouseout
    $('.work-item').on('mouseout', function() {
      $(this).removeClass('animated pulse');
    });

    //submit buttom animation//
    //add the animate class on mouseover
    $('input.submit').on('mouseover', function() {
      $(this).addClass('animated shake');
    });
    //remove the animate class on mouseout
    $('input.submit').on('mouseout', function() {
      $(this).removeClass('animated shake');
    });
  }

  initialize();
});