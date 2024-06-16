"use strict";
// Choose two of the programs you’ve written, and add at least one comment to each
// Program 1
/* Using arrow function and switch statment person can choose their favourite food item using switch statment
 and also choose quantity then using math operator total price will calculated */
let calculatePrice = (product, quantity) => {
    switch (product) {
        case "Apple":
            let z = quantity * 0.5; // Calculated Total Apple Price
            console.log(`Total Price is ${z}$`);
            break;
        case "Banana":
            let p = quantity * 0.4;
            console.log(`Total Price is ${p}$`);
            break;
        case "Orange":
            let q = quantity * 0.6;
            console.log(`Total Price is ${q}$`);
            break;
        default:
            console.log("Item not Available");
    }
};
calculatePrice("Apple", 12);
// Program 2
// guess user number using if else condition 
let guessNumber = 10; // declare and define variable
let findNumber = 10;
if (guessNumber > findNumber) {
    console.log("you guess High Number");
}
else if (guessNumber < findNumber) {
    console.log("you guess Small Number");
}
else {
    console.log("you guess right number");
}
