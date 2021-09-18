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

// Arrays

var meva = 'Olma';
var odam = 'Karim';

// var mevalar = new Array('olma', 'nok', 'banan', 'uzum', 'pomidor');

var mevalar = ['olma', 'uzum', 'nok', 'banan', 'behi', 'xurmo', 'anjir', 'gilos', 'anor', 'shaftoli'] // Array e'lon qilishni sugar varianti
//0       1       2       3
// result.textContent = mevalar[0]
// console.log(mevalar[0])
// console.log(mevalar[1])
// console.log(mevalar[2])
// console.log(mevalar.length); // array ning ichidagi ma'lumotlari soni .length orqali olinadi

// console.log(mevalar.indexOf('nok1'))

// replace
mevalar[0] = 'pomidor';

// console.log(mevalar.indexOf('shaftoli'))
// mevalar[mevalar.indexOf('xurmo')] = 'tarvuz';

// add
mevalar[10] = 'qovun';

// console.log(mevalar);

// string, number, boolean, object, null, undefined, symbol

var arr = [1, 2, true, 'text', function show(text) { alert(text) }]

// arr[4]('Salom')

// orqasidan qo'shish
arr.push('salom');
arr.push(100);

// oldidan qo'shish
arr.unshift('olma');
arr.unshift('nok');

// orqadan o'chirish
// arr.pop();
// var deletedVal = arr.pop()
// console.log(deletedVal)

// oldindan o'chirish
// arr.shift();
// arr.shift();


console.log(arr)