// var factorial = function(number) {
//   var product = number;
//   while (number > 1) {
//     product *= (number - 1);
//     number -= 1;
//   }
//   return product;
// };

var factorial = function(number) {
    if (number > 1) {
      return number * factorial(number - 1);
    } else {
      return 1;
    };
};

$(function() {

  $("form").submit(function() {
    var number = parseInt($("#number").val());
    $("#answer").text(factorial(number));

    return false;
  });
})
