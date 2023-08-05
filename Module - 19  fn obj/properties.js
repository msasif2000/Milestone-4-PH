var shoppingCart={
    books:3,
    pen: 4,
    mouse:1,
    laptop:1
}

var penCount=shoppingCart.pen;
console.log(shoppingCart);


var penCount2=shoppingCart['pen'];
var properties=Object.keys(shoppingCart);
var propertyValues=Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);

//set object property value
var propertyName ="mouse";
var propertyValue=shoppingCart[propertyName];
console.log(propertyName, propertyValue)

//change property value
shoppingCart['mouse']=5;
console.log(shoppingCart);