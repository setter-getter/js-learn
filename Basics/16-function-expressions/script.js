// Синтаксис, который мы использовали до этого, называется Function Declaration 
// (Объявление Функции):


// function sayHi(){
//     alert("Hello");
// }

// // sayHi();

// // Существует ещё один синтаксис создания функций, который называется 
// // Function Expression (Функциональное Выражение).

// let sayHi = function(){
//     alert("Hi");
// };

// function sayHi() {
//     alert( "Привет" );
//   }
  
//   alert( sayHi ); // выведет код функции

// Мы можем скопировать функцию в другую переменную:

function sayHi() {   // (1) создаём
    alert( "Аня умничка" );
  }
  
let func = sayHi;    // (2) копируем
  
func(); // Привет    // (3) вызываем копию (работает)!
sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)

















