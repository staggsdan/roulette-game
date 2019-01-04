// var croupier is the casino/the target number for a round. use the variables defined on table-numbers.js

var croupier = "";

// wagers is a collection of user bets pushed to a database for the duration of the round. 
var wagers = {}

// the following is the comparison logic charted out. it does not yet include functions and it's very raw.

// the wager is red
if (croupier.isRed == true && croupier.isZero == false) {
    console.log("win 1:1");
    // function to pay out winnings to player bank goes here
    } else {
        console.log("lose");
    }

// the wager is black
if (croupier.isRed == false && croupier.isZero == false) {
    console.log("win 1:1");
} else {
    console.log("lose");
}

// the wager is evens
if (croupier.isEven == true && croupier.isZero == false) {
    console.log("win 1:1");
} else {
    console.log("lose");
}

// the wager is odds
if (croupier.isEven == false && croupier.isZero == false) {
    console.log("win 1:1");
} else {
    console.log("lose");
}

// wager is lower half
if (croupier.value <= 18 && croupier.isZero == false){
    console.log("win 1:1");
} else {
    console.log("lose");
}

// wager top half
if (croupier.value >= 19 && croupier.isZero == false){
    console.log("win 1:1");
} else {
    console.log("lose");
} 

// wager column A: if croupier.value matches any of the 12 values on the chart of numbers from combo-bets.js, then it needs to log a victory condition
if (columns.columnA.indexOf(croupier.value) > -1 && croupier.isZero == false){
    console.log("win 2:1");
} else {
    console.log("lose");
} 

// wager column B: if croupier.value matches any of the 12 values on the chart of numbers from combo-bets.js, then it needs to log a victory condition
if (columns.columnB.indexOf(croupier.value) > -1 && croupier.isZero == false){
    console.log("win 2:1");
} else {
    console.log("lose");
}; 

// wager column C: if croupier.value matches any of the 12 values on the chart of numbers from combo-bets.js, then it needs to log a victory condition
if (columns.columnC.indexOf(croupier.value) > -1 && croupier.isZero == false){
    console.log("win 2:1");
} else {
    console.log("lose");
} 

// wager first dozen
if (dozens.firstDoz.indexOf(croupier.value) > -1 && croupier.isZero == false){
    console.log("win 2:1");
} else {
    console.log("lose");
} 

// wager second dozen
if (dozens.middleDoz.indexOf(croupier.value) > -1 && croupier.isZero == false){
    console.log("win 2:1");
} else {
    console.log("lose");
} 

// wager third dozen
if (dozens.topDoz.indexOf(croupier.value) > -1 && croupier.isZero == false){
    console.log("win 2:1");
} else {
    console.log("lose");
} 

// wager on streetA
if (streets.streetA.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetB
if (streets.streetB.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetC
if (streets.streetC.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetD
if (streets.streetD.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetE
if (streets.streetE.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetF
if (streets.streetF.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetG
if (streets.streetG.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetH
if (streets.streetH.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetI
if (streets.streetI.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetJ
if (streets.streetJ.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetK
if (streets.streetK.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on streetL
if (streets.streetL.indexOf(croupier.value) > -1){
    console.log("win 11:1");
} else {
    console.log("lose");
} 

// wager on double1
if (doubleStreets.double1.indexOf(croupier.value) > -1){
    console.log("win 5:1");
} else {
    console.log("lose");
} 