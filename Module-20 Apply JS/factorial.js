function factorial(n){
    let mul=1;
    for(var i=1;i<=n;i++)
    {
        mul=mul*i;
    }
    return mul;
}

const n=7;
console.log('factorial of ',n,' is: ',factorial(n));