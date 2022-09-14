//Задание 5
/*Напишите функцию getMonth(n), которая принимает номер месяца 
и возвращает его название. Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.*/

//В консоль
function getMonth(n){
    if(n == 1){
      console.log('Январь')
    } else if(n == 2){
      console.log('Февраль')
    } else if(n == 3){
      console.log('Март')
    } else if(n == 4){
      console.log('Апрель')
    } else if(n == 5){
      console.log('Май')
    } else if(n == 6){
      console.log('Июнь')
    } else if(n == 7){
      console.log('Июль')
    } else if(n == 8){
      console.log('Август')
    } else if(n == 9){
      console.log('Сентябрь')
    } else if(n == 10){
      console.log('Октябрь')
    } else if(n == 11){
      console.log('Ноябрь')
    } else if(n == 12){
      console.log('Декабрь')
    }
  }
  
  getMonth(2)

//alert
function getMonth(n){
    if(n == 1){
      alert('Январь')
    } else if(n == 2){
      alert('Февраль')
    } else if(n == 3){
      alert('Март')
    } else if(n == 4){
      alert('Апрель')
    } else if(n == 5){
      alert('Май')
    } else if(n == 6){
      alert('Июнь')
    } else if(n == 7){
      alert('Июль')
    } else if(n == 8){
      alert('Август')
    } else if(n == 9){
      alert('Сентябрь')
    } else if(n == 10){
      alert('Октябрь')
    } else if(n == 11){
      alert('Ноябрь')
    } else if(n == 12){
      alert('Декабрь')
    }
  }
  
  getMonth(prompt('Введите номер месяца:'))
