var shoppingCart={
    books:3,
    pen: 4,
    mouse:1,
    laptop:1,
    shoes:3
}
console.log(shoppingCart);
const keys = Object.keys(shoppingCart);
for(var i=0; i<keys.length; i++)
    {
        var propertyValue=shoppingCart[keys[i]];
        console.log(keys[i], propertyValue);
    }


//another structure of for loop
for(var propertyName in shoppingCart)
    {
        var propertyValue=shoppingCart[propertyName];
        console.log(propertyName, propertyValue);
    }