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

  $('button#light').click(function() {
    $('body').removeClass();
    $('body').addClass("light");
  });

  $('button#dark').click(function() {
    $('body').removeClass();
    $('body').addClass("dark");
  });
});
