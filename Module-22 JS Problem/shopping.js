const shoppingCart=[
    {name:"laptop",price:1000, quantity:1},
    {name:"shirt",price:100, quantity:3},
    {name:"watch",price:500, quantity:2},
    {name:"phone",price:10000, quantity:2},
    {name:"bag",price:500, quantity:5},
]

function totalCost(products){
    let total=0;
    for(let i=0;i<products.length;i++){
        let product =products[i];
        const productTotal = product.price*product.quantity;
        total=total+productTotal;
        
    }
    return total;
}

const expense=totalCost(shoppingCart);
console.log(expense);