/*Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user after they log in to a website*/
let Arry: string[] = ["Admin", "Tyler", "Wick", "Eric", "Spike"]

for(let z = 0;  z < Arry.length; z++){
    // Check If the user is Admin
    if(Arry[z] == "Admin"){
        console.log("Hello admin, would you like to see a status report");}
    else{
        console.log(`${Arry[z]} Thank You For Login Again`); }}