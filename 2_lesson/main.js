'use strict'

/*  Задача 1 Почему код дает именно такие результаты? 
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 префиксная форма (++x), значение операнда возвращается увеличенным на единицу.
d = b++; alert(d);           // 1 постфикс (x++), значение операнда возвращается, а затем увеличивается на единицу.
c = (2+ ++a); alert(c);      // 5  alert(a); дает уже 2 перед выполнением строки, а 2+3=5  
d = (2+ b++); alert(d);      // 4  b++ = 2 после выполнения строки 6
alert(a);                    // 3 было 2, а встроке 7 увеличилось на 1
alert(b);                    // 3 было 2 после выполнения операции в строке 8  увеличилось на 1

Задача 2 Чему будет равен х? Ответ = 5  (оператор присваиваивание с умножением a = a * 2)
var a = 2;
var x = 1 + (a *= 2);
alert(x);

Задача 3 Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.
если a и b положительные, вывести их разность; Ноль можно считать положительным числом.
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
*/
var a = 4;
var b = 3;
var times;

if (a >= 0 && b >= 0) {
   times = a - b;
   console.log("Результат вычитания: =" + times);
}
else if (a < 0 && b < 0) {
   times = a * b;
   console.log("Результат произведения: =" + times);
   }
else {
    times = a + b;
    console.log("Результат сложения: =" + times);
}

/* Задача 4 Присвоить переменной а значение в промежутке [0..15]. 
С помощью оператора switch организовать вывод чисел от a до 15. */

var i = 10;

switch(i){

   case 10:
        alert(i);
        ++i;
        break;
   case 11:
        alert(i);
        ++i;
        break;
  case 12:
        alert(i);
        ++i;
        break;
   case 13:
        alert(i);
        ++i;
        break;
   case 14:
        alert(i);
        ++i;
        break;
   case 15:
        alert(i);
        ++i;
        break;
   default:
        alert("don't now");
}


/* Задача 5 Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return.
*/
function addition(x, y)
{
   return x + y;
}
var add;
add = addition(1, 2);
alert(add);

function subtraction(x, y)
{
   return x - y;
}
var subtract;
subtract = subtraction(2, 1);
alert(subtract);

function multiplication(x, y)
{
   return x * y;
}
var multiplyBy;
multiplyBy = multiplication(2, 2);
alert(multiplyBy);

function division(x, y)
{
   return x / y;
}
var divideBy;
divideBy = division(8, 2);
alert(divideBy);

/* Задача 6 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) 
и вернуть полученное значение (применить switch)
*/

function mathOperation(arg1, arg2, operation)
{

switch (operation){
   case 'addition':
   return arg1 + arg2;
   break;
   case 'subtraction':
   subtract = subtraction(arg1,arg2);
   alert('Результат вычитания =' + subtract);
   break;
   case 'multiplication':
   multiplyBy = multiplication(arg1, arg2);
   alert('Результат умножения =' + multiplyBy);
   break;
   case 'division':
   divideBy = division(arg1, arg2);
   alert('Результат деления =' + divideBy);
   break;
                 }

}

// Задача 7  * Сравнить null и 0. Объяснить результат.


/* Задача 8  * С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val — заданное число, pow –— степень.
*/

