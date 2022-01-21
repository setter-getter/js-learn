// Строковое преобразование
//когда нужно представить что-то в виде строки

let value = true;
// alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
// alert(typeof value); // string


//Численное преобразование
// alert( "6" / "2" ); //тут будет 3


let str = "123";
// alert(typeof str); // string

let num = Number(str); // становится числом 123

// alert(typeof num); // number

//Если строка не может быть явно приведена к числу, то результатом преобразования будет NaN. 

let age = Number("Любая строка вместо числа");

// alert(age); // NaN, преобразование не удалось



// alert( Number("   123   ") ); // 123
// alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
// alert( Number(true) );        // 1
// alert( Number(false) );       // 0


// Логическое преобразование

// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false

// alert( Boolean("Привет!") ); // true
// alert( Boolean("") ); // false


// alert( Boolean(0) );//false
// alert( Boolean(211) );//true
// alert( Boolean(-1) );//true

alert( Boolean(false) );//false




