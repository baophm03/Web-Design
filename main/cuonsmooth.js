$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
  
      var target = $(this.getAttribute('href'));
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 500); // Thời gian cuộn (ms)
      }
    });
  });
  