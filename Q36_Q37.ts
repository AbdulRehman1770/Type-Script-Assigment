// Write a function called make_shirt() that accepts a size and the text of a message that 
// should be printed on the shirt.

let make_Shirt = (s:string,m:string) => {
   return `The Size OF Shirt is : ${s} & \nThe Message Printed on T Shirt is : ${m}`
}

console.log(make_Shirt("Large", "John Wick"))

// Question 38
console.log(make_Shirt("Large", "I Love Python"))
console.log(make_Shirt("Medium", "I love Type Script"))
console.log(make_Shirt("Small", "I Love Html & CSS"))
