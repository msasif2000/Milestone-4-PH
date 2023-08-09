function cubeNumber(number) {
    if(typeof number !== 'number'){
        return 'invalid input';
    }
    else return number*number*number;
}

const number = 4;
const result1 = cubeNumber(number);
console.log(result1); 


function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string") {
        return "Input is not a string";
    }
    var matchStr;
    matchStr=string1.includes(string2);
    return matchStr;
}

const string1="Peter Parker";
const string2="pet";
console.log(matchFinder(string1, string2));

function sortMaker(arr) {
    if(arr[0]<0 || arr[1]<0){
        return "Invalid Input";
    }
    if(arr[0]===arr[1]){
        return "equal";
    }
    if(arr[0]>arr[1]){
        return arr;
    }
    return arr.reverse();
}

const arr=[2, 4];
const result2 = sortMaker(arr);
console.log(result2);


function findAddress(obj) {
    var str="";
    if(obj.street == undefined)
    {
        obj.street="__";
    }
    if(obj.house == undefined)
    {
        obj.house="__";
    }
    if(obj.society == undefined)
    {
        obj.society="__";
    }
    return str=obj.street+","+obj.house+","+obj.society;

}

const obj = {
    street:10,
    house:"15A",
    society:"Earth Perfect"
}
const result3=findAddress(obj);
console.log(result3);


function canPay(changeArray, totalDue) {
    
    if(changeArray.length==0){
        return "I have no money";
    }

    let sum=0;
    for(let i=0;i<changeArray.length;i++){
        sum+=changeArray[i];
    }
    if(sum<totalDue){
        return false;
    }
    else return true;
}

const changeArray = [1, 5, 5];
const totalDue = 10;
const result4 = canPay(changeArray, totalDue);
console.log(result4);