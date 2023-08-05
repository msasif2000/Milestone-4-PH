function getSum(numbers){
    var sum=0;
   for(var i=0;i<numbers.length;i++){
    if(numbers[i]%2==1)
    sum+=numbers[i];
   }
   return sum;
}

const myNum=[12, 45, 67, 89, 90, 34, 56, 78, 98, 76, 54, 3];
console.log('odd Sum: ',getSum(myNum));


function oddNum(num){
    var odd=[];

    for(var i=0;i<num.length;i++){
        if(num[i]%2==1){
            odd.push(num[i]);
        }
    }
    return odd;
}

const num=[12, 45, 67, 89, 90, 34, 56, 78, 98, 76, 54, 3];
console.log('odd numbers are: ',oddNum(num));
console.log('odd numbers Sum: ',getSum(num));