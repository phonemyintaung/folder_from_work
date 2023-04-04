const mySelf = {
    name: "Phone Myint Aung",
    age: 27,
    isSingle: true,

    //method
    learning: function(what, whom) {
        return this.name+ " learning " + what + " from " + whom;
    },

    //method ES6 Version
    learn(anything = "anything") {
        return `${this.name} can learn ${anything}`;
    },

    showThis: function() {
        console.log(this, this.name, this.age, this.learn());                //this ကို obj တစ်ခုထဲမှာကြေငြာရင် အဲ့ဒီ့ obj ကိုပဲ ကိုယ်စားပြုတယ်
        console.log(mySelf);                                 //mySelf ကိုလည်းပြန်ခေါ်လို့ရ ကိုယ့် obj ထဲမှာ ကိုယ့် obj ပြန်ခေါ်မယ့်အစား this ကိုသုံးလိုက်လို့ရ
    }
}

console.log(mySelf.showThis());

console.log(mySelf.learning("JavaScript", "Teacher.Hein Htet Zan"));

console.log(mySelf.learn("backend"));

// console.log(mySelf);

// console.log(this);                            //this ကို ဘယ်ထဲမှမထည့်ထားပဲ console.log ထုတ်ရင် window obj ကိုကိုယ်စားပြုတယ်