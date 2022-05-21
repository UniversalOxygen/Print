// // document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// // // let myAge = 26

// // console.log(myAge)

// let myAge = 26
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)



// let count = 5 
// // count + 1
// count = count +1
// console.log(count)


// let bonuspoint = 50 
// bonuspoint = bonuspoint + 50
// console.log(bonuspoint)
// bonuspoint = bonuspoint - 75
// console.log(bonuspoint)
// bonuspoint = bonuspoint + 53
// console.log(bonuspoint)


// function increment() {
//     console.log("the button was clicked")
// }


// setting up the race 
// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// let dude = 42

// function dude() {
//     console.log(dude)
// }

// dude()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLaps() {
//     console.log(lap1 + lap2 + lap3)
// }

// totalLaps()

// lapcompleted = 0
// function incrementLap() {
//     lapcompleted = lapcompleted + 1
// } 

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapcompleted)


//camelcase
// let countEl = document.getElementById("count-el")

// console.log(countEl)


// let count = 0
// function increment(){
//     count = count + 1
//     countEl.innerText = count
// }


//  let countEl = document.getElementById("count-el")

//  let count = 0

//  function increment(){
//      count = count + 1
//      countEl.innerText = count
//  }


//  function save() {
//      console.log(count)
//  }


// let username = "per"
// console.log(username)

// let message = "you have three new notifications"
// console.log(message)

// let messageToUser = message + ", "  + username + '!'
// console.log(messageToUser)

// let Name = "Goke"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + Name
// console.log(myGreeting)

// let point = 4
// let bonusPoints = "10"
// let totalPoints = point + bonusPoints
// console.log(totalPoints)



// let welcomeEl = document.getElementById("welcome-el")


// let name = "Goke"
// let greeting = "welcome back "
// welcomeEl.innerText = greeting + name


//  welcomeEl.innerText += emoji


// let saveEl = document.getElementById("save-el")



////////******PRACTICE*****////////////


// let firstName = "Tunde "
// let lastName = "Olagoke"
// let fullName = firstName + lastName
// console.log(fullName)

// let name = "Linda"
// let greeting = "Hi there"
// let myGreeting = greeting + ", " + name + "!"

// function greetLinda() {
//     console.log(myGreeting)
// }

// greetLinda()



// let myPoint = 3
//  function add3Points() {
//      console.log(myPoint += 3)
//  }

// add3Points()
// add3Points()
// add3Points()

//  function remove1Point() {
//      console.log(myPoint -= 1)
//  }

//  remove1Point()
//  remove1Point()

//  console.log(myPoint)

// let Error = document.getElementById("error")
//  function error() {
//     Error.innerText = "something went wrong, please try again"
//  }


// let num1 = 8 
// let num2 = 2


// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// let sumEl = document.getElementById("sum-el")



// function add() {
//     sum = num1 + num2
//     sumEl.textContent = sum
// }


// function subtract() {
//     subtract = num1 - num2
//     sumEl.textContent = subtract
// }

// function divide() {
//     divide = num1 / num2
//     sumEl.textContent = divide
// }

// function multiply() {
//     multiply = num1 * num2
//     sumEl.textContent = multiply
// }


/////***BLACKJACK***///////

// let firstcard = 9
// let secondcard = 14

// let sum = firstcard + secondcard

// if (sum < 21) {
//     console.log("Do you want to draw a new card?")
// } else if (sum === 21) {
//     console.log("wohoo! You've got Blackjack! ")
// } else {
//     console.log("You're out of the game! ")
// }

// let age = 22

// if (age < 21 ) {
//     console.log("You can not enter the club! ")
// } else {
//     console.log("Welcome! ")
// }

//*********************//

// let age = 100

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100){
//     console.log("Here is your birthday card from the king! ")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }

//*********//

// let firstcard = 10
// let secondcard = 11
// let cards = [firstcard, secondcard]
// let sum = firstcard + secondcard
// let hasBlackJack = false
// let isAlive = true
// let message = ""

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardEl = document.getElementById("card-el")

// function startGame() {
//     renderGame()
// }

// function renderGame() { 
//     if (sum <= 20) {
//         message= "Do you want to draw a new card? "
//     } else if (sum === 21) {
//         message = "Wohoo! You've got Blackjack! "
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game! "
//         isAlive = false
//     }

//     messageEl.textContent = message
//     sumEl.textContent = "Sum: " + sum
//     cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]

// }

// function newCard() {
//     console.log("Drawing a new card!") 
//     let thirdcard = 6
//     sum += thirdcard
//     renderGame()
// }


//   let featurePosts = []


//   let mySelf = [
//       "My name is Goke",
//       "I'm in my 20s",
//       "true"
//     ]

//     console.log(mySelf[0])

// let cards = [7, 4]

// cards.push(6)

// console.log(cards)


// let messages = [
//     "Hey, how's it going",
//     "i'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "same here!"

// messages.push(newMessage)

// console.log(messages)

// messages.pop()
// console.log(messages)


// let firstcard = 10
// let secondcard = 11
// let cards = [firstcard, secondcard]
// let sum = firstcard + secondcard
// let hasBlackJack = false
// let isAlive = true
// let message = ""

// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardEl = document.getElementById("card-el")

// function startGame() {
//     renderGame()
// }

// function renderGame() { 
//     if (sum <= 20) {
//         message= "Do you want to draw a new card? "
//     } else if (sum === 21) {
//         message = "Wohoo! You've got Blackjack! "
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game! "
//         isAlive = false
//     }

//     messageEl.textContent = message
//     sumEl.textContent = "Sum: " + sum
//     cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]

// }

// function newCard() {
//     console.log("Drawing a new card!") 
//     let thirdcard = 6
//     sum += thirdcard
//     cards.push(thirdcard)
//     console.log(cards)
//     renderGame()
// }



// for (let count = 1;   count < 11; count += 1) {

//     console.log(count)
// }

// for ( let w = 10; w < 101; w += 10) {
//     console.log(w)
// }


// let messages = [
//     "Hey, how's it going",
//     "i'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// // console.log(messages[0])
// // console.log(messages[1])
// // console.log(messages[2])

// for (let w = 0; w = message.length ; w += 1 ) {
//     console.log(messages[w])
// }

// let cards = [7, 3, 9]

// for (let w = 0; w < cards.length; w += 1) {
//     console.log(cards[w])
// }



// let sentence = [ "Hello","my","name","is","Goke"]

// let greetingEl = document.getElementById("greeting-el")

// for (let w = 0; w < sentence.length; w++ ) {
//     greetingEl.textContent += sentence[w] + " "
// }



// let player = {
//     name: "Goke",
//     chips: 145 
// }
// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""




// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $"+ player.chips


// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardEl = document.getElementById("card-el")

// function getRandomCard() { 
//     let randomNumber = Math.floor(Math.random() * 13) + 1
//      if (randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//         return 11
//     } else {
//         return randomNumber
//     }
// }


// function startGame() {
//     isAlive = true
//     let firstcard = getRandomCard()
//     let secondcard = getRandomCard()
//     cards = [firstcard, secondcard]
//     sum = firstcard + secondcard
//     renderGame()
// }

// function renderGame() { 
//     cardEl.textContent = "Cards: " 

//     for (let w = 0; w < cards.length; w++) {
//         cardEl.textContent += cards[w] + " "
//     }
    

//     if (sum <= 20) {
//         message= "Do you want to draw a new card? "
//     } else if (sum === 21) {
//         message = "Wohoo! You've got Blackjack! "
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game! "
//         isAlive = false
//     }

//     messageEl.textContent = message
//     sumEl.textContent = "Sum: " + sum
    
// }

// function newCard() {

//     if (isAlive === true && hasBlackJack === false) {
//         console.log("Drawing a new card!") 
//        let thirdcard = getRandomCard()
//        sum += thirdcard
//        cards.push(thirdcard)
//        renderGame()
//     }

    
// }



// let player1Time = 102
// let player2Time = 107

// function totalRaceTime() {
//     return player1Time + player2Time
// }

// let newRaceTime = totalRaceTime()
// console.log(newRaceTime)



// let randomNumber = Math.random()
// console.log(randomNumber)

// let randomNumber = Math.random() * 6
// console.log(randomNumber)


// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)


// let randomNumber = Math.floor(Math.random() * 6) + 1

// function rollDice() {
//     return randomNumber
// }

// rollDice()

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true){
//         generateCertificate()
//     }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }



// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution.... ")
// }


// let likesDocumentaries = true
// let likesStartups = true

// if (likesDocumentaries === true || likesStartups === false) {
//     recommendMovies()
// }

// function recommendMovies() {
//     console.log("Hey, check out the new film we think you will like!")
// }



//////******OBJECTS********/

// let castle = {
//     name: "Simonic",
//     price: 400,
//     available: true
// }

// console.log(castle.name)
// console.log(castle.available)


 
////////*******RECAP****/////////

// let mySelf =  {
//     name: "Goke",
//     age: 20,
//     country: "Nigeria"
// }

// function logData() {
//     console.log (mySelf.name + ' is ' + mySelf.age + ' years old and lives in ' + mySelf.country)
// }
// logData()


// let age  = 15

// if (age < 6) {
//     console.log("free") 
// } else if (age === 6 || age <= 17) {
//     console.log("child discount") 
// } else if (age ===18 || age <= 26) {
//     console.log("student discount") 
// } else if (age === 27 || age <= 66) {
//     console.log("full price") 
// } else {
//     console.log("senior citizen discount") 
// }
    

// let largeCountry = ["China", "India", "USA", "Indonesia", "Pakistan" ]

// for (w = 0; w < largeCountry.length; w++) {
//     console.log("-" + largeCountry[w])
// }



// let largeCountry = ["Tuvalu", "India", "USA", "Indonesia", "Monaco" ]
// largeCountry.pop()
// largeCountry.push("Pakistan")
// console.log(largeCountry)
// largeCountry.shift()
// largeCountry.unshift("China")
// console.log(largeCountry)
// for (w = 0; w < largeCountry.length; w++) {
//     console.log("-" + largeCountry[w])
// }



// let dayOfMonth = 13
// let weekDay = "Friday"

// if (dayOfMonth === 13 && weekDay === "Friday"){
//     console.log("G")
// }

// let hands = ["rock", "paper", "scissor"]

// function getHand() {
//     let randomIndex = math.floor(Math.random(hands) * 3) 
//     return hand[randomIndex]
// }
//  console.log(getHand())


// let fruit = ["apple", "orange", "apple", "apple", "orange"]
// function fruitShelf() {
//     for (w=0; w < fruit.length; w++ )
//     if (fruit[w] === "apple") {
//         console.log("its an Apple")
//     } else if (fruit[w] === "orange") {
//         console.log("its an Orange")
//     }
// }

// fruitShelf()


 let myLeads = []
 const inputEl = document.getElementById("input-el")
 let buttonEl = document.getElementById("input-btn")

 buttonEl.addEventListener("click", function() {
     myLeads.push(inputEl.value)
     console.log(myLeads)
 })

 for(let w = 0; w < myLeads.length; w++) {
     console.log(myLeads[w])
 }





// let boxEl = document.getElementById("box")

// boxEl.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })




 
