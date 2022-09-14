//Задание 2
/*Напишите программу, которая запрашивает у пользователя три числа 
и выводит максимальное из них, используйте if/else/else if. Попытайтесь не использовать &&.*/

let number1 = prompt('Введите первое число')
let number2 = prompt('Введите второе число')
let number3 = prompt('Введите третье число')

if(number1 > number2){
  if(number1 > number3){
    alert(number1)
  }else{
    alert(number3)
  }
}else if(number2>number3){
  alert(number2)
}else{
  alert(number3)
}