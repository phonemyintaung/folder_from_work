//conditional statement
//control structure
//flow control / control flow

// if(false) {
//     console.log("a");
//     console.log("b");
//     console.log("c");
// } else {
//     console.log("this is false");
// }


function lateOrNot(wakeUpTime) {

    // let result;
    
    // if( wakeUpTime <= 9 ) {
    //     result = "ရုံးချိန်မှီ";
    // } else {
    //     result = "ရုံးနောက်ကျ";
    // }

    // return result;

    if(wakeUpTime <= 9) {
        return "ရုံးချိန်မှီ";
    }

    return "ရုံးနောက်ကျ";
}

console.log(lateOrNot(8));
console.log(lateOrNot(10));
console.log(lateOrNot(9.15));
console.log(lateOrNot(9));


let mark = 40;

if(mark >= 80) {
    console.log("Distinction");
} else if(mark >= 40) {
    console.log("Pass");
} else if(mark < 40) {
    console.log("Fail");
}