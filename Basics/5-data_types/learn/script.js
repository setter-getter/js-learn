/*
в js данные всегд аотносятся к какому то типу
всего типов 8!
*/

//в переменной в один момент может быть строка
//в другой число (в отличии от С++!)

// Не будет ошибкой
let message = "hello";
message = 123456;

// Infinity представляет собой математическую бесконечность ∞. 
// Это особое значение, которое больше любого числа.

// alert( 1 / 0 ); // Infinity
// alert( Infinity ); // Infinity

// NaN означает вычислительную ошибку.

// alert( "не число" / 2 ); // NaN, такое деление является ошибкой

// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;


// alert(bigInt);


let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;



let name = "Anya";

// Вставим переменную
// alert( `Привет, ${name}!` ); // Привет, Иван!

// Вставим выражение
// alert( `результат: ${1 + 2}` ); // результат: 3



let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено


let isGreater = 4 > 1;

// alert( isGreater ); // true (результатом сравнения будет "да")


//null - просто означает что значение неизвестно и все
// let age = null;

//undefinded - «значение не было присвоено» и все

let age;

// alert(age); // выведет "undefined"


//typeof - возвращает строку показывающая тип

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

// alert(typeof alert);
































