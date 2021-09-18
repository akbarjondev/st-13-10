// Kalkulyator funksiyasi
function calc(a, opr, b) {
  if (opr == '+') {
    return a + b;
  } else if (opr == '-') {
    return a - b;
  } else if (opr == '*') {
    return a * b;
  } else if (opr == '/' && b != 0) {
    return a / b;
  } else if (opr == '**') {
    return a ** b;
  } else {
    return 'Mahraj 0ga teng emas!';
  }
}

var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var operation = document.getElementById('operation');
var button = document.getElementById('button');

button.addEventListener('click', function (event) {

  var num1 = Number(number1.value);
  var num2 = Number(number2.value);

  result.textContent = calc(num1, operation.value, num2);
});
