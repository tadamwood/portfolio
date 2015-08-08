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
    var wrapper    =    $('.modal-wrapper'),
        modal      =    $('.modal'),
        body       =    $('body'),
        open       =    $('.work-item'),
        close      =    $('#modal-close'),
        stopScroll =    'stop-scroll',
        active     =    'active';

    // open
    open.on('click', function() {
      wrapper.fadeIn(200);
      body.addClass(stopScroll);
    });

    // close
    close.on('click', function() {
      wrapper.fadeOut(200);
      body.removeClass(stopScroll);
    });
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