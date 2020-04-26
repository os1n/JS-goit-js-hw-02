// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// ====---- Task 01 Start

const namesArray = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const logItems = function(array) {
  for (let i = 0; i < namesArray.lenght +1; i += 1); {
    console.log('0', i, ' - ', namesArray[i]);
  }
};

const result = logItems(namesArray);

console.log(namesArray);

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */



// console.log('TASK 01');

// let name = 'Генератор защитного поля ';
// let price = 1000;

// console.log(
//   'Выбран ', 
//   name , 
//   'цена за штуку',
//   price,
//   ' кредитов'
// );

// price = 2000;

// console.log(
//   'Выбран ', 
//   name , 
//   'цена за штуку',
//   price,
//   ' кредитов'
// );