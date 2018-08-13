// como saber si un objecto esta vacio

// if ( object.key({}).length ) {
//     console.log('do');
// }
//     else {
//         console.log('no can do');
//     }


    // if ( !(3 > 4 ) && (4 > 5 || 6 > 2) ) {
    //     console.log('true');
    // }
    //     else {
    //         console.log('false');
    //     }
  



// !(a && b)  ===  !a || !b
// !(a || b)  ===  !a && !b

// corollaries:
// !(a && b && c && d)   ===   !a || !b || !c || !d
// !(a || b || c || d)   ===   !a && !b && !c && !d


//   a       b        !(a && b)       !a || !b
// true     false       true            true
// false    true        true            true
// true     true        false           false
// false    false       true            true


// !(a > b) === (a <= b)

// n > 8          n <= 8

// n >= 2         n < 2




//1) Can you restate the conditional more simply?
if ((isMichaelPhelps || isMerman) && (isMichaelPhelps || hasGills))
winGoldMedals();

if (isMichaelPhelps || (isMerman && hasGills))



//2) Can you restate the conditional to use only one negation?
if (!rich && !happy) 
    killSelf();
else 
    liveOn();

// if !(rich || happy)

//3) Can you restate the condition to use two negations and be more legible?
if (!urgent && !important) 
usePostOfice();
else 
useFedex();

// (! urgent || !important)

//4) Under which circumstances will doSomething run?
if (x > 5 && x <= -5) 
doSomething();

//never

//4b) Under which circumstances will doSomething run?
if (x > 5 || x <= -5) 
doSomething();

//never

//5) Can you restate the conditional to use no negations?
if ( !(x > 10 && y < 15))
    alert("You got it!");
else
    prompt("What you need?");

  //  x <= 10 && y =>  15    
//6) Can you restate the conditional to use only one negation?
if (!(x < 10) || y <= 10 || z <= 25 || !dead) {
    console.log("You know your DeMorgan's Laws");
}

// !(x < 10) || y <= 10 || z <= 25 || dead)

//7) Can you distribute the negation across the expression in parens?
if (!(!alive || distance > 1000 || trapped || enemies < 0)) {
    alert("game goes on");
}

!alive && !distance && !trapped && !enemies < 0


//8) Can you distribute the negation across the expression in parens?
if (!(dead && level < 99 && world == "Earth")) {
    alert ("Life goes on");
}

//!dead|| !level || < 99 || !world == "Earth"

// 9) Generate a random number between 0 and 1 in Javascript
var random = Math.floor(Math.random()*1);

// 10) Generate a random number between 0 and 10 in Javascript
var num = Math.floor(Math.random() * 10);

// 11) Generate a random integer between 0 and 10 (inclusive)
Math.floor(Math.random() * 10);  

// 12) Generate a random number between 5 and 10
Math.floor(Math.random() * 10) + 1

// 12b) Generate a random integer between 5 and 10



// 13) Generate a random integer between -10 and 30


// 14) Write a coin flip function. It should return the string "heads" half the time and the string "butts" the other half
// function coinFlip(){

// }
// 15) Write a card picking function that outputs cards from a standard deck: ex 'Ace of Clubs', 'Queen of Hearts', '10 of Diamonds', '8 of Spades'
// There are 4 suits: Hearts, Diamonds, Clubs, Spades
// There are 13 cards for each suit: Ace, 2-10, Jack, King, Queen
// steps:
// generate a random number between 1-4 for suit
// set the value of a string variable depending on that 1-4 number
// generate a random number between 1-13 for the card's number
// put the number and the suit string together and return it

// function pickCard(){
//     var suit = Math.round(Math.random()*3);
//     if (suit === 0) suit = "Hearts";
//     else if (suit === 1) suit = "Diamonds";
//     else if (suit === 2) suit = "Clubs";
//     else suit = "Spades";

//     //your code here

//     return suit;

// }
// 16) In programming, what is the opposite of black?

//not black

// 17) In programming, what is the opposite of x > y ?

// true

// 18) Given an array of numbers, add up all the elements
// var a = [5,6,7,5433,543,53,535,53,543,543,23,412,34,45];
// 19) Write a function has1337s() which takes an array and returns true if the array contains the number 1337
// function has1337s(arr){
// for (var i =0; i <arr.length; i++) {
// if (arr[i] == 1337) return true;
//   	}
// return false;
// }




  
