let current_Users = ["ALi", "Rehman", "Talah", "Usman", "Ayan"]
let new_Users = ["Rehman", "Wick", "Ethen", "Usman", "Aliya"]

for(let i = 0; i < new_Users.length; i++){
    
    if(current_Users.includes(new_Users[i])){
        console.log(`${new_Users[i]} You Have To Enter New User Name`);}
    else{
        console.log(`${new_Users[i]} That UserName is Available`);}}