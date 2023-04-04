// function inchesToFeet(input) {
//     let unitConversion = 1/12;

//     return showResult(input * unitConversion + " ft");
// }

// function showResult(text) {
//     return "The result is " + text;
// }

// console.log(inchesToFeet(120));
// console.log(inchesToFeet(50));
// console.log(inchesToFeet(70));

// let fruits = [ "Apple", "Orage", "Lemon", "Watermelon", "Peach" ];


// console.log(fruits);
// console.log(fruits[2]);
// console.log(fruits[fruits.length-1]);


// let fruits = [];
// let name = "Phone Myint Aung";

// fruits[fruits.length] = "Strawberry";
// fruits[fruits.length] = "Papaya";

// console.log(fruits);
// console.log(fruits.length);
// console.log(`My name is ${name} and i love ${fruits[0]}.`)


// Object 

// let person = {
//     name: "Phone Myint Aung",
//     age: 27,
//     gf: false,
//     skills: [ "html", "css", "js", "php", "laravel", "react", "sql" ]
// };

// console.log(person.name);
// console.log(person.skills);
// console.log(person.skills[3]);
// console.log(person["skills"][5]);

// let personSkills = [ "html", "css", "js" ];
// let money = 500;
// money -= 50;

// let person = {
//     name: "Kyaw Kyaw",
//     age: 31,
//     skills: personSkills,
//     money,
// }



// console.log(person);
// console.log(money);

// let person = {
//     name: "PMA",
//     age: 27,
//     gf: true,
//     money: null,
//     skills: [ "html", ["hello", "world"], "css", "js" ],
// }

// console.log(person);


// let num = 5;

// num = num + 1;
// num = num + 1;
// num = num + 1;
// num = num + 1;

// num += 1;
// num += 1;
// num += 1;
// num += 1;

// ++num;
// ++num;
// ++num;
// ++num;


// console.log(num--);
// console.log(num);



// let condition = true;

// condition = !condition;
// condition = !condition;

// console.log(condition); 

// console.log(!(condition));

// && || * +

//more than one condition

// let condition = false || false || false || false

// console.log(condition);


// let x = "";
// let y = " ";
// let a = 0;
// let b = "0";

//ternary operator
//conditional expression
// console.log(x ? true : false);
// console.log(y ? true : false);
// console.log(a ? true : false);
// console.log(b ? true : false);

// let haveUFinishYourDinner = true;

// let result = haveUFinishYourDinner ? "စားပြီးပါပြီ" : "မစားရသေးပါ";

// console.log(result);

// console.log(`example ${5 ? true : false}`);


// function dog(something = "meat") {
//     return "This is Rambo and he loves "+ something + ".";
// }

// console.log(dog("fruits"));



//function expression

// const dog = function(someone = "Owner") {
//     return "Rambo love his " + someone + " so much.";
// }

// console.log(dog("Hooman"));


//IIFE

// (function(someone = "hooman") {
//     let text = "Rambo love his " + someone + " so much.";
//     console.log(text);
//     return text;
// })(); 

