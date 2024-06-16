// Add an if test to Exercise 28 to make sure the list of users is not empty.

let user_List : string[] = ["John Wick", "Tyler Rake", "Ethen"]

// check list if its is empty or not
if(user_List.length === 0){
    console.log("We need to Find Some Users");}
else{let Age:number = 19;
    if (Age < 2){console.log("Person is Baby");}
    else if ( Age === 2 && Age < 4 ){console.log("Person is Toddler");}
    else if ( Age === 4 && Age < 13){console.log("Person is Kid");}
    else if ( Age === 13 && Age < 20){console.log("Person is teenager");}
    else if ( Age === 20 && Age < 65){console.log("Person is Adult");}
    else { console.log("Person is an elder");}}

    // Remove all of the usernames from your array
user_List = []
console.log(user_List);