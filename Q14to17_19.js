"use strict";
// Question 14
// Make a list that includes at least three people you’d like to invite to dinner
let GuestList = ["Abd 17", "Harry", "Usman"];
console.log(`Welcome ${GuestList[0]} To joined Dinner`);
console.log(`Welcome ${GuestList[1]} To joined Dinner`);
console.log(`Welcome ${GuestList[2]} To joined Dinner`);
// Question 15
/*You just heard that one of your guests can’t make the dinner, so you need to send out a new set of
invitations. You’ll have to think of someone else to invite.*/
console.log(`${GuestList[2]} will not be able to joined Dinner`);
// Replacing Friend in List
GuestList.splice(1, 1, "Talah");
console.log(`Welcome ${GuestList[0]} To joined Dinner`);
console.log(`Welcome ${GuestList[1]} To joined Dinner`);
console.log(`Welcome ${GuestList[2]} To joined Dinner`);
// Question 16
/*You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.*/
console.log("I found a Bigger Table Now more space is available");
// Add New Friends
GuestList.unshift("Ebad");
GuestList.splice(2, 0, "Nadeem");
GuestList.push("Bilal");
let i = 0;
while (i < GuestList.length) {
    console.log(`Welcome ${GuestList[i]} To joined Dinner`);
    i++;
}
// Question 17
/*ou just found out that your new dinner table won’t arrive in time
for the dinner, and you have space for only two guests.*/
console.log("Sorry Everyone! I can Invite only two people At Dinner");
// Removing Firends
GuestList.splice(1, 1);
GuestList.splice(2);
console.log(`Welcome ${GuestList[0]} To joined Dinner`);
console.log(`Welcome ${GuestList[1]} To joined Dinner`);
// Clearing List
// GuestList.pop()
// GuestList.pop()
console.log(GuestList);
// Question 19
console.log(GuestList);
