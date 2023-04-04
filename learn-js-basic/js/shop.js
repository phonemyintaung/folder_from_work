const fruits = {
    apple : 100,
    orange : 120,
    mango : 200,
    banana: 30
}

let total = 0;

function tax(amount, taxRate = 5) {
    return amount * (taxRate / 100);
}

function buy(fruitName, quantity) {
    let cost = quantity * fruits[fruitName];
    // let actualCost = cost + tax(cost);
    // total += actualCost;
    total += cost;
    // return fruitName + " : " + quantity + " : " + cost + " mmk.";
    return `${fruitName} : ${quantity} = ${cost} mmk.`;
    // return actualCost + " MMK";
}

console.log(buy("orange", 5));
console.log(buy("banana", 8));
console.log(buy("mango", 2));
console.log(buy("banana", 30));

// console.log("Total : ", total, " MMK");

console.log("Total Cost : ", total , " mmk");
console.log("Tax : ", tax(total) , " mmk");
console.log("Net Total : ", total+tax(total), " mmk");
