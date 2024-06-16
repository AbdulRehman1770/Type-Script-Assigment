// Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
let magician_Names : string[] = ["Merlin Mystique", "Seraphina Spellcaster", "Maximus Mirage", "Celeste Enchantra"]

let show_Magicians = (M:string[]) => {
    console.log(`Magicians Names Are: ${M.join(", ")}`);}

show_Magicians(magician_Names);

// Question 42
/* Start with a copy of your program from Exercise 39. Write a function called make_great() 
that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/

let magician_Namess : string[] = ["Merlin Mystique", "Seraphina Spellcaster", "Maximus Mirage", "Celeste Enchantra"]


let make_great = (M:string[]) => {
    for(let i = 0; i < magician_Namess.length; i++){
       M[i] = `The Great Magician ${M[i]}`
    }
}
let show_Magicianss = (M:string[]) => {
    console.log(`Magicians Names Are: ${M.join(", ")}`);}

make_great(magician_Namess)
show_Magicianss(magician_Namess);
