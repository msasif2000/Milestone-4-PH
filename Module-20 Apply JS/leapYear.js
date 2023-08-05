function isLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}

const myYear = isLeapYear(2088);
console.log(myYear);