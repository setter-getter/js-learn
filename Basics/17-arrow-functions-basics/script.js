// Функции-стрелки, основы

//~ let func = (arg1, arg2, ...argN) => expression;
//~ это более короткий вариант такой записи:

//~ let func = function(arg1, arg2, ...argN) {
//~   return expression;
//~ };


let sum = (a, b) => a + b;

/* Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3


// тоже что и
// let double = function(n) { return n * 2 }
let double = n => n * 2;

alert( double(3) ); // 6





