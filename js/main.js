console.log("Hello, this is a console message");

let price1=5;
console.log(price1);

let price2=6;
console.log(price2);

let total = price1 + price2;
console.log(total);

let name;
console.log(name);

const age = 44;
console.log(age);

const valami="Más valami";
console.log(valami);

let car = "VW";
console.log(car);
car = "Volvo";
console.log(car);

let num = 4;

let active = true;

name = "almafa";
console.log(name);
name= name.replace("a" , "b");
console.log(name);

let userAge = 33;
console.log(userAge);
userAge = userAge + 5;
console.log(userAge);
userAge = userAge * 2;
console.log(userAge);
userAge = userAge / 5;
console.log(userAge);
userAge = 70/2;
console.log(userAge);
let szamolas = 6 % 4;
console.log(szamolas);  /* maradékot adja vissza, 6/4 =>1 maradék 2*/ 
szamolas = 3**2;    /*hatványozáa: 3 a másodikon*/
console.log(szamolas);

let userName ="Kiss Piroska";
console.log(userName);
userName = 'Nagy Géza';
console.log(userName);


/*Formok*/
let amountInput = document.querySelector("input[name='amount-input']");
console.log(amountInput.value);

/* Eseménykezelés*/
function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
        showSumPrice(price, amountNumber)
}

// fv-ek paraméterezése
function showSumPrice(price, amountNumber) {
        let showAmount = document.querySelector("span.show-amount");
    if ( amountNumber > 10 ) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if ( amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}
