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
   