"use strict";
// Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array.
let magicianNames = ["Merlin Mystique", "Seraphina Spellcaster", "Maximus Mirage", "Celeste Enchantra"];
let new_Array = [];
let makegreat = (L) => {
    for (let i = 0; i < magicianNames.length; i++) {
        L[i] = `The Great Magician ${L[i]}`;
    }
};
let showMagicians = (M, L) => {
    console.log(`Magicians Names Are: ${M.join(", ")}`);
    console.log(`Magicians Names Are: ${L.join(", ")}`);
};
makegreat(new_Array);
showMagicians(magicianNames, new_Array);
