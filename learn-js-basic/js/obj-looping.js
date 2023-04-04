const fruits = [ "apple" , "orange", "mango", "banana", "strawberry", "lemon", "watermelon" ]; 

// for(fruit of fruits) {
//     console.log(fruit);
// }

// for(index in fruits) {
//     console.log(index, fruits[index]);
// }

// const mgmgInfo = {
//     name: "mg mg",
//     age: 15,
//     job: "student",
// }

// for(key in mgmgInfo) {
//     console.log(key, mgmgInfo[key]);
// }


const ratings = [
    {
        id: 1,
        name: "mg mg",
        rate: 3,
    },
    {
        id: 2,
        name: "zaw zaw",
        rate: 2,
    },
    {
        id: 3,
        name: "maw maw",
        rate: 5,
    },
    {
        id: 4,
        name: "aung aung",
        rate: 3,
    },
    {
        id: 5,
        name: "hla hla",
        rate: 4,
    },
    {
        id: 6,
        name: "ko ko",
        rate: 2,
    },
];

// for(rating of ratings) {
//     for(key in rating) {
//         console.log(key, rating[key]);
//     }
//     console.log("----------");
// }



//ကိုယ့်ဘာသာရေးထားတာ

// for(rating of ratings) {
//     let star = "";
//     for(let x=0; x<rating.rate; x++) {
//         star += "* ";
//     }
//     console.log(star, rating.name);
// }