// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let Name : string = "Abdul reHman"

console.log(`Lowercase: ${Name.toLowerCase()}`);
console.log(`Uppercase: ${Name.toUpperCase()}`);

let word : string[] = Name.split(" ")

let titleCase : string = ""

for (let i = 0; i < word.length; i++){
    titleCase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase()}
console.log(`TitleCase: ${titleCase}`);

