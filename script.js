var wins = 0;
var ties = 0;
var losses = 0;
// define the global var variable to log response in console
var response;

// define function getInput
function getInput() {
    response = window.prompt("Enter R, P, S for Rock, Paper, Scissors");
    response = response.toUpperCase();

    // either use Upper or Lower 
    // if specifies output
    // better to do all LC

    if (response !== "R" && response !== "P" && response !== "S") {
        alert("You need to enter either R, P, or S");
        return getInput();
    } else {
        alert("You responded " + response);
    }
}


function generateInput() {
    var options = ["R", "P", "S"];
    var random = Math.floor(Math.random() * options.length);
    return options[random];
}

// round( ( 0.6*3)) = round(1)= "R"
// call prompt
getInput();

var computerInput = generateInput();
window.alert("The computer chose " + computerInput);

if (response === computerInput) {
    ties++;
    window.alert("You have tied! 😑");
} else if (
    (response === "R" && computerInput === "S") || (response === "P" && computerInput === "R") || (response = "S" && computerInput === "P")
) {
    wins++;
    window.alert("You won!");
} else {
    losses++;
    window.alert("You lost. 😬");
}

window.alert(
    "STATS: \nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

var playAgain = window.confirm("Thanks for playing, I had fun. Would you like to play again?");

if (!playAgain) {
    window.alert("You suck. 🤫")
}


// take response out of local function into console with "."
// console.log(response);

// RULES: 
// paper beats rock
// scissors beats paper
// rock beats scissors


// OUTCOMES:
// win
// loose
// tie

// variables compared: response vs computerInput