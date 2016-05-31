$(function() {
  $('.clickable').click(function() {
    $('.initially-showing').toggle().fadeIn();
    $('.initially-hidden').toggle().fadeOut();
  });

  $('button#left').click(function() {
    $('h1').removeClass();
    $('h1').addClass("header-left");
  });

  $('button#right').click(function() {
    $('h1').removeClass();
    $('h1').addClass("header-right");
  });

  $('button#center').click(function() {
    $('h1').removeClass();
    $('h1').addClass("header-center");
  });
});
