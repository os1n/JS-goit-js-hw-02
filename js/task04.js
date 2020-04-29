// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

//     Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
//     Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// ====---- Task 04 Start
console.log("TASK 04");

const formatString = function (string) {
  let resultString = "";
  if (string.length > 40) {
    console.log(
      `Length of the string (${string}) is (${string.length}) MORE than 40; will be shorten and added with '...'`
    );
    string = `${string.substring(0, 40)}...`; // shorten and add '...'
    return string;
  } else {
    console.log(`Length of the string (${string}) is (${string.length}) - and is LESS than 40; shall stay as is.`);
    return string;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
