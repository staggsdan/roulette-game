var targetNumber = "";
const activeBets = [];
const playerMoney = "";

// for testing purposes
var test1 = process.argv[2];
var test2 = process.argv[3];
var test3 = process.argv[4];

function main(){
    placeBets();
    roulette();
    // compareSuccess();
    playAgain();
};

// constructor to define every bet pushed to the activeBets array
function Bets(insideOutside, dollars) {
    this.betTable = insideOutside,
    this.betValue = dollars
};

// welcomes player to this game and displays the graphics and options (inside & outside bets)
function placeBets(){
    if (process.argv[2] === "inside") {
        console.log(process.argv[2])
        placeInsideBets();
    } else if (process.argv[2] === "outside") {
        placeOutsideBets();
    }
    
};

// submenu to place inside bets
function placeInsideBets(){
    var insidePlacement = process.argv[3];
    console.log("inside bet: " + insidePlacement)
};

// submenu to place outside bets
function placeOutsideBets(){};

// function to run a math.random and then send to results
function roulette(){
    var targetNumber = Math.floor(Math.random() * 37);
    console.log("target number " + targetNumber);
    compareSuccess();
};

// function to determine payout and losses
function compareSuccess(){
    if (insidePlacement === targetNumber) {
        console.log("you win!")
    } else if (targetNumber === 0 || targetNumber === 37){
        console.log("the house wins!")
    } else {
        console.log("you lose!")
    }
};

// function to change the players bank balance
function payouts(){};

// function to start over
function playAgain(){};

main();