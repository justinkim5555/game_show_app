console.log("Game.js is running");

// Grab things wrapped in qwerty div and phrase by their ID and store them in variables
var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');

// Initalize missed attempts to 0
var missed = 0;

document.getElementsByClassName('btn__reset')[0].addEventListener("click", function(){
    document.getElementById("overlay").style.visibility = "hidden";
});

// Array of phrases
var phrases = ["monkey", "apple", "juice", "james bond", "camp fire"];

// Function to to generate random phrase
function getRandomPhraseArray(arr){
    console.log("Random word test: ", arr[Math.floor(Math.random() * arr.length)]);
    return arr[Math.floor(Math.random() * arr.length)];
}

// Invoke function
getRandomPhraseArray(phrases);

// Set the game display
function addPhraseToDisplay(arr){
  for (var i=0; i < arr.length; i++){
    var tempString = arr[i];
    for (char in tempString){
      if (tempString[char] == ' '){
        var list = document.createElement("li");
        console.log("This is a space!");
        list.textContent = " ";
        console.log(list);
        document.querySelector('#phrase ul').appendChild(list);
      }
      else{
        var list = document.createElement("li");
        list.textContent = tempString[char];
        list.className = "letter";
        console.log(list.textContent = tempString[char]);
        console.log(list);
        document.querySelector('#phrase ul').appendChild(list);
      }
    }
  }
}

const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);

// console.log("What is this?", phraseArray);
const currentLetterList = document.getElementsByClassName('letter');


// Check function will be used inside event listener
function checkLetter(buttonClicked){  // console.log("what is in here?", buttonClicked.target.textContent);
  //   if (buttonClicked.textContent){
      for (var i=0; i < currentLetterList.length; i++){
        console.log("what is this?", currentLetterList[1].textContent);
        if (currentLetterList[i].textContent == buttonClicked.target.textContent){
          currentLetterList[i].classList.add("show");
        }
      }
    // }
}

document.getElementById("qwerty").addEventListener("click", function(event){
  const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
      return;
    }
    else{
      console.log(event);
      event.target.classList.add("chosen");
      checkLetter(event);
      console.log("why", checkLetter(event));

    }
});
