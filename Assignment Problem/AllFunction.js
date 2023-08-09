function cubeNumber(number) {
    if(typeof number !== 'number'){
        return 'Input is not a number';
    }
    else return number*number*number;
}


function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string") {
        return "Input is not a string";
    }
    var matchStr;
    matchStr=string1.includes(string2);
    return matchStr;
}


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