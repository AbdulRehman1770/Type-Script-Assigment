// Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this:"Lahore, Pakistan"
let City_Country = (City:string, Country:String) => {
        return `"${City}, ${Country}"`
    }

console.log(City_Country("Kashmir", "Pakistan"));
console.log(City_Country("Islamabad", "Pakistan"));
console.log(City_Country("Swat", "Pakistan"));
