// Выведите чётные числа
// важность: 5

// При помощи цикла for выведите чётные числа от 2 до 10.

// Запустить демо


// for (let i = 2; i <= 10; i++) {

//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 != 0) continue;
  
//     alert(i); // 1, затем 3, 5, 7, 9
//   }

  for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }