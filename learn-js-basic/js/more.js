// function canIPass(examMark, viperMark) {
//     if(examMark >= 65 && viperMark >= 65) {
//         return "Pass";
//     }
//     return "Fail";
// }

// console.log(canIPass(70,85));
// console.log(canIPass(50,90));


// function canICome(busNo) {
//     if(busNo === 22 || busNo === 94) {
//         return "Right Bus";
//     }
//     return "Wrong Bus";
// }

// console.log(canICome(41));
// console.log(canICome(94));  


// let a = "pma";
// console.log(a);
// a = !a;
// console.log(a);
// a = !a;
// console.log(a);
// a = !a;
// console.log(a);


// let a = true;

// a && (function() {
//     console.log("Hello");
//     return true;
// })() && console.log("Hi");


// function showMyName(name) {
//     if(typeof name === "string") return name;
//     return false;
// }

// console.log(showMyName(28));
// console.log(showMyName("PMA"));
// console.log(showMyName(["a", "b", "c"]));
// console.log(showMyName({a: "a", b: "b", c: "c"}));


// function run(a, b, c) {
//     console.log(arguments);      // function ထဲမှာပဲ arguments ဆိုတာကိုသုံးလို့ရတယ် function မှာပါလာတဲ့ prototype
// }

// console.log(run("e", "f", "g"));


// console.log(window);

// console.log(document);

// console.dir(document);    // property တွေ method တွေကို အသေးစိတ်မြင်ချင်ရင် dir ကိုသုံး

// prototype
// console.log([]);         //Array ကလည်း Object ပဲ သူ့ prototype ကသာ Array ဖြစ်တာ
// console.log({});
// console.dir(NodeList);


//JavaScript Data Type ၂ဖွဲ့ရှိတယ် Primitive Data Type ‌တွေအကုန်လုံးက Call Stack ‌ပေါ်မှာအလုပ်လုပ်တယ် Object, Array, Function တို့က Memory Heap ပေါ်မှာသိမ်းတယ်
//Call Stack က Memory တစ်ခုပဲ လုပ်နေတဲ့ code line တွေ တစ်လိုင်းချင်းစီ ဝင်လာတာ 

//primitive vs reference data types ဆိုပြီးရှာကြည့်လို့ရ

//Call Stack သဘောတရား
// let a = "a";
// console.log(a);
// let c = a;
// console.log(c);
// a = "aaa";
// console.log(a);
// console.log(c);


//Memory Heap သဘောတရား       
let b = [];
console.log(b);
let c = b;
console.log(c);

b[0] = "a";
b[1] = "b";
console.log(b);
console.log(c);