//Задание 2
/*Напишите программу, которая много раз запрашивает 
у пользователя число, пока он не введет 0 — тогда выводится сумма этих чисел.*/

let sum = 0;
let x;

do{
  x = prompt('Введите число. После ввода "0" вы узнаете сумму введенных чисел')
  sum += +x
}while (x != 0)
  alert(sum)