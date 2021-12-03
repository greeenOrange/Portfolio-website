function isCounterElementVisible($element) {
  var topView = $(window).scrollTop();
  var botView = topView + $(window).height();
  var topElement = $element.offset().top;
  var botElement = topElement + $element.height();
  return ((botElement <= botView) && (topElement >= topView));
}

$(window).scroll(function() {
  $(".counter").each(function() {
    isOnView = isCounterElementVisible($(this));
    if (isOnView && !$(this).hasClass('visibled')) {
      $(this).addClass('visibled');
      $(this).prop('counter', 0).animate({
        counter: $(this).text()
      }, {
        duration: 3000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    }
  });
});

$( ".Bar" ).each(function() {
  let percent = $(this).attr('data-value');
  percent = percent * 100 / 100;
  
  //For too high values :
  if(percent > 100){
    percent = 100;
  }
  
  //$(this).css('width', percent+'%' );
  
  //With animation as asked :
    $(this).animate({width: percent+'%' }, 2000);
});