const country='Bangladesh';
const age=52;
const isIndependent=true;
const student ={id:14, class:15, name: 'Asif'};
const num=[12, 14, 16, 18, 20];
function sum(num1, num2){
    return num1+num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof num); //array could not checked by this method
console.log(Array.isArray(num)); //array should checked by this method
console.log(typeof sum);

const friends=[12, 15, 12, 13 , 14];
const allfriends=friends.concat(num);
console.log(allfriends);

