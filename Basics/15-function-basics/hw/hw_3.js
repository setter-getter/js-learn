// Функция min(a, b)
// важность: 1

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// function min(a,b){
//     if (a < b){
//         return a;
//     }
//     if (b<a){
//         return b;
//     }
//     else{
//         return "Они равны";
//     }
// }

// alert(min(2,5));
// alert(min(3,-1));
// alert(min(1,1));

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }

// alert(min(2,5));
// alert(min(3,-1));
// alert(min(1,1));

// Вариант решения с оператором ?:


function min(a,b){
    return (a < b) ? a : b;
}

alert(min(2,5));
alert(min(3,-1));
alert(min(1,1));





