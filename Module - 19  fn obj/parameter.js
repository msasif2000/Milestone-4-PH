//1

function bringSingara(money){
    console.log('Singara khamu');
    console.log('singarar dam',money);
}

bringSingara(100);

//2
function add(num1, num2){
    console.log('going to add: ', num1, num2);
}
add(65, 89);


//3
function sum(a, b, c, d){
    var result = a+b+c+d;
    console.log(result);
}

sum(10, 20, 30, 40);

//4
function summ(num1, num2){
    console.log(num1, num2);
    var sum=num1+num2;
    return sum;
}

var total=summ(10, 20);
console.log(total);

//5
function getAverage(ass1, ass2, ass3){
    const total=ass1+ass2+ass3;;
    const avg=total/3;
    return avg;
}

const assM1=60;
const assM2=58;
const assM3=59;
var myAvg=getAverage(assM1, assM2, assM3);
console.log('amar avg number: ', myAvg);

//6
