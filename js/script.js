var Player;

$('.Lesson').on('click', function(e) {
  e.preventDefault();
  $that = $(this);

  if (!$that.is('.isSelected')) {
    $('#LessonPlayer_embed').remove();
    $('article').removeClass('isSelected');
    $that.addClass('isSelected');

    // Video container
    var $embedVideo = $('<div/>').attr({
      class: 'LessonPlayer_embed',
      id: 'LessonPlayer_embed'
    }).appendTo($that.find('.LessonPlayer'));

    // Video id
    var _id = $that.attr("data-video-id");

    // Video embed
    Player = new YT.Player('LessonPlayer_embed', {
      height: '390',
      width: '640',
      videoId: _id,
      events: {
        'onReady': function(e) {
          //console.log(e);
          if (localStorage.autoPlay == "1") Player.playVideo();
        }
      }
    });

  }
});


// Autoplay switch
$('input').on('change', function(e) {
  if ($(this).prop('checked'))
    localStorage.autoPlay = 1;
  else
    localStorage.autoPlay = 0;
  console.log(localStorage.autoPlay);
});


// Autoplay init
var autoPlay = localStorage.autoPlay || "1";
if (autoPlay == "1") {
  localStorage.autoPlay = "1";
  $('input').prop('checked', true)
}


// Outside click / close article
$(document).on('click', function(e) {
  if($(e.target).is('body')) {
    $('#LessonPlayer_embed').remove();
    $('article').removeClass('isSelected');
  }
});