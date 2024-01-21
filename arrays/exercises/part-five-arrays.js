let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
let str1 = str.split('e');
console.log(str1);
//not having a parameter splits it after each letter - I,n, (even spaces) ' ' 

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));
//3) Do split or join change the original string/array?
// no they do not, the results must be assigned to a new array or string
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let arrCargo = cargoHold.split(",");
console.log(arrCargo);
arrCargo.sort();
let alphabetizeCargo = arrCargo.join(',');
console.log(alphabetizeCargo);