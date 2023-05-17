let firstCard = 2
let secondCard = 10

let cards = [firstCard, secondCard]

let sum = firstCard + secondCard 

let hasBlackJack = false
let isAlive = true

let message = ""
let messageEl = document.getElementById("message-el")

 let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")

let cardEl = document.getElementById("card-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
        message ="Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "Bust! You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}



function newCard() {
    console.log("Drawing a new card from the deck...")
    let card = 4
    sum = sum + card 
    renderGame()
} 