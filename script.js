// Чтобы проверить работает ли решение раскаментируйте!

// **************************Task1**************************
// var name = prompt("Input your name", "");
// alert("Hello, " + name + "!");

// **************************Task2**************************
// const year = 2019;
// var birth = prompt("Input your birth year", "");
// if (birth <= 0 || birth > year)
//   alert("Wrong input!")
// else
//   alert("Now you have " + (year - birth) + "!");

// **************************Task3**************************
// var side = prompt("Input length of square's side");
// if (side<=0)
//   alert ("Wrong input")
// else alert (side*4);

// **************************Task4**************************
// var r = prompt("Input radius of circle");
// if (r <= 0)
//   alert("Wrong input")
// else alert(Math.PI * Math.pow(r, 2));

// **************************Task5**************************
// var length = prompt("Input length");
// var time = prompt("Input time");
// if (length <= 0 || time <= 0)
//   alert("Wrong input")
// else alert("Your speed must be: " + (length/time) + "km/h");

// **************************Task6**************************
// const conv = 1.14
// var dollar = prompt("Input sum of dollars");
// if (dollar <= 0)
//   alert("Wrong input")
// else alert("It's " + (dollar / conv) + "euro");

// **************************Task7**************************
// const file = 820;
// var flash = prompt("Input flashcard size", "");
// var res = Math.floor(flash / file);
// if (flash <= 0)
//   alert("Wrong input");
// else
//   alert("You can write " + res + " files on this flashcard");

// **************************Task8**************************
// var sum = prompt("How much money you have in your pocket?", "");
// var choco = prompt("How much cost chocolate", "");
// if (sum <= 0 || choco <= 0)
//   alert("Wrong input");
// else
//   alert("You can buy " + (Math.floor(sum / choco)) + " chocolates");

// **************************Task9**************************
// var num = prompt("Input three digit number", "");
// var res = ((num % 10) * 100) + (Math.floor((num % 100) / 10) * 10) + (Math.floor(num / 100));
// if ((num / 100) < 1 || (num / 100) >= 10) {
//   alert("Wrong input, it's not a three digit number");
// } else
//   alert(res);

// **************************Task10*************************
// var num = prompt("Input integer number", "");
// num % 2 == 0 || alert("Не четное");
// num % 2 == 0 && alert("четное");