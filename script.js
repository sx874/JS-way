//CH 6 AND BANK ACCOUNT

function circle() {
    const r = Number(prompt("enter circle radius"));
    const circle = {
        radius: r,
        circumference() {
            return 2 * this.radius * Math.PI;
        },
        area () {
            return this.radius ** 2 * Math.PI;
        }
    };
    console.log(`the circle's circumference is ${circle.circumference()}`);
    console.log(`the circle's area is ${circle.area()}`);
}

function dog() {
    const dog = {
        name: "Fang",
        species: "boarhound",
        size: 75,
        bark() {
            return "Grrr! Grrr!";
        }
    }
    console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
    console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
}

function bank() {
    const account = {
        owner: 'Alex',
        balance = 0,
        credit(amount) {
            this.balance += amount;
        },
        describe() {
            return `owner: ${this.owner}, balance: ${this.balance}`;
        }
    }
    console.log(account.describe());
    account.credit(250);
    account.credit(-80);
    console.log(account.describe());
}


//CH 7
// musketeers
function musketeers() {
    const musketeers = ["Athos", "Porthos", "Aramis"];

    console.log("Here are the three musketeers:");
    for (let i = 0; i < musketeers.length; i++) {
        console.log(musketeers[i]);
    }
    musketeers.push("D'Artagnan");
    console.log("Now there are four of them:");
    musketeers.forEach(musketeer => {
        console.log(musketeer);
    });
    musketeers.splice(2, 1);
    console.log("Poor Aramis has died!");
    for (const musketeer of musketeers) {
        console.log(musketeer);
    }
}
// list of words --> stop
const words = [];

let word = "";
while (word !== "stop") {
  word = prompt("Enter a word or stop to quit:");
  if (word !== "stop") {
    words.push(word);
  }
}

console.log("You have entered the following words:");
words.forEach(w => {
  console.log(w);
});


//CH 8
// word info
function wordInfo(word) {
    console.log(`The word ${word} is ${word.length} characters long`);
    console.log(`Its lowercase value is ${word.toLowerCase()}`);
    console.log(`Its uppercase value is ${word.toUpperCase()}`);
//palindrome add-on
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[length - 1 - i]) {
            return 'it is not a palindrome'
        } else {
            return 'it is a palindrome'
        }
    }
}

