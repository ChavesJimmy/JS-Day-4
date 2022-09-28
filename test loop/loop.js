let array1  = ["A", "b", "c", "D", 1, 2 , 3 ,"false", true ,"223"];

// for loop
/* for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    document.write(array1[i]);
 }
 */
 //foreach loop
/*  array1.forEach(function(value, index) {
    console.log(value);
    console.log(index);
    document.write(value);
    document.write(index);

 }); */
 
 //for in loop
 /* for (let index in array1) {
    console.log(index);
    console.log(typeof(index)); //doesn't work
    document.write(index);
    document.write(typeof(index));

 }; */

 // for of loop
 for (let value of array1) {
    console.log(value);
    console.log(typeof(value));
    document.write(`The value is ${value} and the index is a ${typeof(value)}<br>`);
 }

 //while loop
let x = 1;
let msg = '';
while (x <= 10) {
   msg = `${x} x 5 = ${x*5} <br>`;
   x++;
   document.write(msg);
}

// do while loop
var i = 1;
var mesg = '';
do {
   mesg = `${i} x 5 = ${i*5} <br>`;
   i++;
   document.write(mesg);
} while (i <= 3);