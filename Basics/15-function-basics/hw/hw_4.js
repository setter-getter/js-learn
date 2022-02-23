// Функция pow(x,n)
// важность: 4

// Напишите функцию pow(x,n), которая возвращает x в степени n. 
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// function pow(x,n){
//     return x ** n;
// }

// alert(pow(3, 2)) //3 * 3 = 9
// alert(pow(3, 3))  //3 * 3 * 3 = 27
// alert(pow(1, 100))  //1 * 1 * ...* 1 = 1

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  


  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }

  alert(pow(x,n));