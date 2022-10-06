var playerWins = 0
var computerWins = 0
var ties = 0

var rounds = prompt("How many rounds do you want to play?")
var numberOfRounds = parseInt(rounds, 10)


for (var i = 1; i <= numberOfRounds; i++) {
  var choice = prompt("r, p or s")
  if (choice == "r" || choice == "p" || choice == "s"){
    var randomNumber = Math.floor(Math.random() * 3)
    var computerChoice;

    if (randomNumber == 0 ) {
      computerChoice = "r"
    }
    else if (randomNumber == 1 ) {
      computerChoice = "p"
    }
    else if (randomNumber == 2 ) {
      computerChoice = "s"
    }

    if (choice == computerChoice ) {
      ties++
      alert("It´s a tie !")
    }
    else if (choice == "r" && computerChoice == "s") {
      playerWins++
      alert("It´s a win !")
    }
    else if (choice == "r" && computerChoice == "p") {
      computerWins++
      alert("It´s a loss !")
    }
    else if (choice == "p" && computerChoice == "r") {
      playerWins++
      alert("It´s a win !")
    }
    else if (choice == "p" && computerChoice == "s") {
      computerWins++
      alert("It´s a loss !")
    }
    else if (choice == "s" && computerChoice == "r") {
      computerWins++
      alert("It´s a loss !")
    }
    else if (choice == "s" && computerChoice == "p") {
      playerWins++
      alert("It´s a win !")
    }
  }
  else {
    numberOfRounds++
    alert("Wrong Choice")
  }
}

alert(`You won ${playerWins} times, tied ${ties} times and lost ${computerWins} times `)