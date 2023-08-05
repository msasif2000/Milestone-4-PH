//who will get the cake
const jim =84;
const dela=99;
const chinku=77;
const max = Math.max(jim,dela,chinku);
console.log(max);
console.log(Math.min(jim,dela,chinku));

//who is tall
function array(numbers){
    let largest = numbers[0];
    for (var i=0; i<numbers.length; i++){
        const index=i;
        const element =numbers[index];
        if(element>largest){
            largest=element;
        }
    }
    return largest;
}

const heights=[5.6,5.7,5.8,5.9,6.0];
const tallest = array(heights);
console.log(tallest);