//Задание 3
/*Перепишите данную математическую формулу, используя JavaScript. 
Программа должна запрашивать с помощью prompt значение X и выдавать 
соответсвующее значение Y в качестве ответа. 
Обратите внимание на приоритет операций (важно правильно расставить скобки).*/

//В качестве проверки: при X = 10 программа должна вывести Y = 12.5344.

let x = prompt('Введите значение x')
let y = (4 * x ** 2 + 18 - 23 * x) / (5 / 9 * x + 18 * ((x ** 3 / 33) *x ) ) + x * (15 / 12);

alert(y)