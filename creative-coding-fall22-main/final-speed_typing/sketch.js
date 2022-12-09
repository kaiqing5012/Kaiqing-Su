//https://www.youtube.com/watch?v=R-7eQIHRszQ use html and css to build a page with the help of javascript
//
let quote;
let url = 'https://api.quotable.io/random';
let quoteDisplay = document.getElementById('quote-display');
let quoteInput = document.getElementById('quote-input');
let timer = document.getElementById('timer');


quoteInput.addEventListener('input', () => {
    const arrayQuote = quoteDisplay.querySelectorAll('span')
    const arrayValue = quoteInput.value.split('')
    // The codes above are borrowed from Web Dev Simplified from YouTube
   
    let correct = true
    arrayQuote.forEach((characterSpan, index) => {
      const character = arrayValue[index]

 // if nothing typed in, do nothing on the quote
      if (character == null) {
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct = false 
// if character typed in matches the quote, show green on the quote
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
 // if character typed in doesn't match the quote, show red on the quote
    } else {
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
        correct = false
      }
    })
// when finished typing, if all correct, show you did great.
    if (correct) {
        alert("You did great!👍");
// then call the function to confirm if user wants to continue.
        checker()
    }
  })

async function getQuote(){
    const response = await fetch(url);//fetch the quotes from quote API
    const data = await response.json();//load the data into json file
    console.log(data.content);
    quote =  data.content;//assign the data to elements

    // ↓ The following codes are borrowed from Web Dev Simplified from YouTube
    quoteDisplay.innerHTML = '';
    quote.split('').forEach(character =>{
        const characterSpan = document.createElement('span');
        characterSpan.innerText = character;
        quoteDisplay.appendChild(characterSpan)
    })//convert each character of the quote into an array
    quoteInput.value = null; // set the type-in box to empty
    startTimer();
}

//https://www.youtube.com/watch?v=bNtyTGBtbK4 
//confirm function for html to popup an alert and given choices of yes or no to the users;
function checker(){
    let result = confirm("Do you want to try another one?");
    if (result == true){
        getQuote();
    }
    else if(result == false){
        return;
    }
}

// let startTime
// let timeLeft = 60;

// function startTimer() {
//   timer.innerText = 60 // timer.html('0')
//   startTime = new Date()
//   setInterval(() => {
//     timer.innerText = getTimerTime() // 60 - seconds passed = the time left
//     if (timeLeft == 0) {
//         clearInterval(interval);
//         timer.innerHTML = "Time's up!";// stop interval and print message
//    // alert("Refresh the page to try again.");
//     }
//   }, 1000)
        //couldn't stop at timeleft = 0 ???
// }

// function getTimerTime() {
//     return Math.floor(timeLeft-((new Date() - startTime) / 1000)) // use the current date time - the start time to get the exact one second
// } // borrowed from here: https://www.youtube.com/watch?v=R-7eQIHRszQ


let interval;
function startTimer(){
    let time = 60;
    clearInterval(interval);
// use setInterval function to decrement time by 1 every second
    interval = setInterval(() => {
    timer.innerHTML = time;
    time--;
    // check if time is up
    if (time == 0) {
        clearInterval(interval);
        timer.innerHTML = "Time's up! Refresh to try again.";// stop interval and print message
            // alert("Refresh the page to try again.");//alert makes the timer to continue countdown???
    }
    }, 1000);
}

function setup() {
    getQuote(url);
}

