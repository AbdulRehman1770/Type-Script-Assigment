// Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array.

let magicianNames : string[] = ["Merlin Mystique", "Seraphina Spellcaster", "Maximus Mirage", "Celeste Enchantra"]
let new_Array : string[] = []


let makegreat = (L:string[]) : void => {
    for(let i = 0; i < magicianNames.length; i++){
       L[i] = `The Great Magician ${L[i]}`
    }
}
let showMagicians = (M:string[],L:string[]) => {
    console.log(`Magicians Names Are: ${M.join(", ")}`);
    console.log(`Magicians Names Are: ${L.join(", ")}`);}

makegreat(new_Array)
showMagicians(magicianNames,new_Array);