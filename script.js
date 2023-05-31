//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count element in the HTML to reflect the new count

// let countEl = document.getElementByI("count-el");

// let count = 0;

// function increment(){
//     count = count + 1;
//     countEl.innerText = count;
// }

// function save(){
//     console.log(count)
// }

// save()



// function logOut() {
//     console.log("42")
// }

// logOut;

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function laps(){
//     console.log(lap1 + lap2 + lap3)
// }

// laps();

// let lapsCompleted = 0;

// function lapsComplete(){
//     lapsCompleted = lapsCompleted + 1
// }

// lapsComplete()
// lapsComplete()
// lapsComplete()

// console.log(lapsCompleted)

let countEL = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment(){
    count += 1;
    countEL.textContent = count;
}

function save(){
    let enteries = count + " - ";
    saveEl.textContent += enteries;

    countEL.textContent = 0
    count = 0

}















// function increment(){
//     count += 1
//     countEL.textContent = count
// }

// function save(){

//     let enteries = count + " - "
//     saveEl.textContent += enteries

//     countEL.textContent = 0
//     count = 0

// }










let username = "per"
let message = "you have three new notifications"

// let messageToUser = message + ", " + username

// console.log(messageToUser)

// let name = "Ebunoluwa"
// let greetings = "Hi, my name is "

// let myGreetings = greetings + name;
// console.log(myGreetings);

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Ebunoluwa";
// let greeting = "what's good "

// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText = welcomeEl.innerText + "emoji"
