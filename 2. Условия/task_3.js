//Задание 3
/*Напишите программу, которая запрашивает у пользователя число N и отвечает
"Число {N} четное!" или "Число {N} нечетное!"*/

let x = prompt('Введите число:')

if(x % 2 == 0){
  alert(`Число ${x} четное!`)
}else{
  alert(`Число ${x} нечетное!`)
}