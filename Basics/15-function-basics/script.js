function test(){
    alert("Anyya is princess!");
}

// test();
// test();

// Локальные переменные

// Переменные, объявленные внутри функции, видны только внутри этой функции.


function showMessage() {
    let message = "Привет, я JavaScript!"; // локальная переменная
  
    alert( message );
  }
  
//   showMessage(); // Привет, я JavaScript!
  
//   alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции


