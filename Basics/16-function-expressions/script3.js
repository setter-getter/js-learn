// Function Expression в сравнении с Function Declaration


// Во-первых, синтаксис: как определить, что есть что в коде.

// Function Declaration: функция объявляется отдельной конструкцией 
// «function…» в основном потоке кода.

// Function Declaration
function sum(a, b) {
    return a + b;
  }

//   Function Expression: функция, созданная внутри другого выражения 
//   или синтаксической конструкции. В данном случае функция 
//   создаётся в правой части «выражения присваивания» =:

// Function Expression
let sum = function(a, b) {
    return a + b;
  };




