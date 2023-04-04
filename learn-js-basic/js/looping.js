// for(let i = 1; i <= 5; i++) {
//     console.log("a");
//     console.log("b");
//     console.log(i, "=========");
// }

// const mySelf = {
//     name: "Phone Myint Aung",
//     age: 27,
//     isSingle: true,
//     mark: [
//         {
//             id: 1,
//             subject: "Myanmar",
//             marks: 72,
//         },
//         {
//             id: 2,
//             subject: "English",
//             marks: 87,
//         },
//         {
//             id: 3,
//             subject: "Math",
//             marks: 38,
//         },
//         {
//             id: 4,
//             subject: "Chem",
//             marks: 22,
//         },
//         {
//             id: 5,
//             subject: "Phy",
//             marks: 64,
//         },
//         {
//             id: 1,
//             subject: "Bio",
//             marks: 58,
//         },
//     ]
// }


// mySelf.totalMark = 0;

// mySelf.result  = {};


// for(let i = 0; i < mySelf.mark.length; i++) {
//     mySelf.totalMark += mySelf.mark[i].marks;
//     // console.log(mySelf.result[mySelf.mark[i].subject] = mySelf.mark[i].marks >= 40 ? "Pass" : "Fail");

//     if(mySelf.mark[i].marks >= 40) {
//         console.log(mySelf.result[mySelf.mark[i].subject] = "Pass");
//     } else {
//         console.log(mySelf.result[mySelf.mark[i].subject] = "Fail");
//     }
// }

// console.log(mySelf);



// Half Pyramid
// for(let i = 1; i <= 6; i++) {
//     let star = "";
//     for(let x = 1; x <= i; x++) {
//         star += "* ";
//     }
//     console.log(star);
// }

// // Inverted Half Pyramid
// for(let i = 6; i > 1; i--) {
//     let equal = "";
//     for(let x = 1; x <= i; x++) {
//         equal += "= ";
//     }
//     console.log(equal);
// }


// function generator(count, element) {
//     let star = "";
//     for(let i = 1; i <= count; i++) {
//         star += element;
//     }
//     return star;
// }

// // Half Pyramid
// for(let i = 1; i <= 6; i++) {
//     // console.log(generator(i, i%2 === 0 ? "= " : "* "));    // Condition စစ်တာကို Ternary Operator နဲ့ Expression ပုံစံစဥ်းစားပုံ

//     if(i%2 === 0) { //Condition စစ်တာကို Statement နဲ့စဥ်းစားပုံ
//         console.log(generator(i, "= "));
//     } else {
//         console.log(generator(i, "* "));
//     }
// }

// // Inverted Half Pyramid
// for(let i = 6; i > 1; i--) {
//     console.log(generator(i, i%2 === 0 ? "X " : "Y "));
// }

//ကိုယ့်ဘာသာရေးထားတာ

// function outPut(qty, symbol = "* ") {
//     for(let x = 1; x <= qty; x++) {
//         console.log(generator(x, symbol));
//     }

//     return "hehe";
// }



//Rating

// for(let i=1; i<=5; i++) {
//     let result = "";
//     for(let x=1; x<=5; x++){
//         // if(x <= i) {             //Conditional Statement
//         //     result += "* ";
//         // } else {
//         //     result += "- ";
//         // }

//         result += x <= i ? "* " : "- ";     //Expression
//     }
//     console.log(result, i);
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

for(let i=0; i < ratings.length; i++) {
    let result = "";
    for(let x=1; x<=5; x++) {
        if(x <= ratings[i].rate) {
            result += "* ";
        } else {
            result += ". ";
        }
    }
    console.log("Id :", ratings[i].id, "Rating : ", result, "|", ratings[i].rate, "|", ratings[i].name);
}