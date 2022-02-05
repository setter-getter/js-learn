//  || или

// result = a || b;

// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false

// если числа сравниваем то
// 0 это false
// 1 это true

// if (1 || 0) { // работает как if( true || false )
//     alert( ' получили true!' );
//   }


// let result = 12 || 0;    //12
// let result = 19 || 15;   //19
// let result = 0 || 0;      //0
// alert(result);

//Обычно оператор || используется в if 
//для проверки истинности любого из заданных условий.

// let hour = 9;

// if (hour < 10 || hour > 18) {
//   alert( 'Офис закрыт.' );
// }

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'Офис закрыт.' ); // это выходной
// }


//ИЛИ «||» находит первое истинное значение

// alert( 1 || 0 ); // 1
// alert( true || 'no matter what' ); // true

// alert( null || 1 ); // 1 (первое истинное значение)
// alert( null || 0 || 1 ); // 1 (первое истинное значение)
// alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

//Получение первого истинного значения из списка переменных или выражений.


// let currentUser = null;
// let defaultUser = "John";

// let name = currentUser || defaultUser || "unnamed";

// alert( name ); // выбирается "John" – первое истинное значение


//Сокращённое вычисление.

// let x;

// true || (x = 1);

// alert(x); // undefined, потому что (x = 1) не вычисляется


let x;

false || (x = 1);

alert(x); // 1



