// Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function 
// call provides, and it should print a summary of the sandwich that is being ordered

let items : string[] = []
let Func3 = (...item : string[]) => {
    // for(let i = 0; i < item.length; i++){
        console.log(`Man Want Items on Sandwiches are : ${item.join(", ")}`);}

Func3("Chicken", "Turkey", "Egg")
Func3("Lettuce", "Tomato", "Onion")
Func3("salad", "Turkey", "Cheese ")
