// Повторять цикл, пока ввод неверен
// важность: 5

// Напишите цикл, который предлагает prompt ввести число, большее 100. 
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, 
// большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. 
// Предусматривать обработку нечисловых строк в этой задаче необязательно.



// let number;

// while (number = prompt("ввести число, большее 100", 0))
// {
//     if (number < 100){
//         continue;
//     }
//     else{
//         break;
//     }
// }


let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);
