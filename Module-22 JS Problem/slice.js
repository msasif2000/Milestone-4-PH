const friends=[10,  12, 14,15, 19, 7, 17];
const partial = friends.slice(3, 6);

console.log(partial);


//Splice: removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
const friends2=[10,  12, 14,15, 19, 7, 17];
const removed = friends2.splice(2, 5, 77, 88, 99); // 2nd index theke 3 ta element remove korbe and 3 ta element (77, 88, 99) add korbe
console.log(removed);
console.log(friends2);