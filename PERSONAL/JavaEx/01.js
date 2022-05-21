// document.getElementById('count-el').innerText = 5

// let count = 0 +   10

// console.log(count)


// let myAge = 30
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)


// let count = 5 

// count += 5

// console.log(count)



function increment() {
    console.log("I'm Optimistic")
}

 
function countDown() {
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countDown()



function goody() {
    console.log(42)
}

goody()
  
let lap1 = 34
let lap2 = 33
let lap3 = 36


function totalLap() {
    console.log(lap1 + lap2 + lap3)
}

totalLap()


let lapCompleted = 0

function increments() {
    lapCompleted += 1
    console.log(lapCompleted)
}

increments()
increments()
increments()


let countEl = document.getElementById('count-el')

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}

 let name = "Goke" 
 let greeting = "Hi, my name is"

 function Me() {
     console.log(greeting + name)
 }

Me ()