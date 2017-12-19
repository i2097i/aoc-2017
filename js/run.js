$(document).ready(function() {
  _.each([day1, day2, day3, day4, day5], function(func) {
    setTimeout(function() {
      func();
    }, 0);
  });
});