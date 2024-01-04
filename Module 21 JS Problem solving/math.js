const result=Math.pow(3,8);
console.log(result);

//abs function
const num1=5;
const num2=10;
if(Math.abs(num1-num2)<5)
{
    console.log("u guys can be friends");
}
else {
    console.log("u guys can't be friends");
}

//round function
const number= 5.678;
const rNumb= Math.round(number);
console.log(rNumb);
console.log(Math.ceil(number));
console.log(Math.floor(number));

//random function
var random=Math.round(Math.random()*100);
console.log(random);

//swap function
let a=5;
let b=7;
console.log(a,b);
let temp=a;
a=b;
b=temp;
console.log(a,b);

//swap function using destructuring
let x=6;
let y=9;
console.log(x,y);
[x,y]=[y,x];
console.log(x,y);


function add(a, b){
    return a + b;
   }
   console.log(add("adam" + "eve"))
   

   ///confusion about round function :

//    round(4.5)
// The number 4.5 is exactly halfway between 4 and 5.
// round will round to the nearest even integer, so it rounds to 4.
// round(5.5)

// The number 5.5 is exactly halfway between 5 and 6.
// round will again round to the nearest even integer, so it rounds to 6.
// Here are some additional examples to illustrate the behavior:

// round(4.1)

// The number 4.1 is closer to 4 than 5.
// round will round down to 4.
// round(4.9)

// The number 4.9 is closer to 5 than 4.
// round will round up to 5.