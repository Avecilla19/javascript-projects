let num = 1001;

//Returns 'undefined'.

//Use type conversion to print the length (number of digits) of an integer.
console.log( String(num).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let decimalNum = 123.45;
console.log(typeof decimalNum);
let decimalStr = String(decimalNum);
console.log(typeof decimalStr);

let numWithOutDeciaml = decimalStr.replace('.', '');
console.log(numWithOutDeciaml);



//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(decimalNum).includes('.')){
    console.log(String(decimalNum).length-1)
} else {console.log(String(decimalNum).length);
}