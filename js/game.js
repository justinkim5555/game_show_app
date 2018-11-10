console.log("Game.js is running");

// Grab things wrapped in qwerty div and phrase by their ID and store them in variables
var qwerty = document.getElementById('qwerty');
var phrase = document.getElementById('phrase');

// Initalize missed attempts to 0
var missed = 0;

document.getElementsByClassName('btn__reset')[0].addEventListener("click", function(){
    document.getElementById("overlay").style.visibility = "hidden";
});

var phrases = ["monkey", "apple", "juice", "james bond", "camp fire"];


function getRandomPhraseArray(arr){
    //do stuff to any arr that is passed in
    console.log("Random word test: ", arr[Math.floor(Math.random() * arr.length)]);
    return arr[Math.floor(Math.random() * arr.length)];
}

getRandomPhraseArray(phrases);

//set the game display

function addPhraseToDisplay(arr){
  for (var i=0; i < arr.length; i++){
    var tempString = arr[i];
    for (char in tempString){
      if (tempString[char] == ' '){
        var list = document.createElement("li");
        console.log("issa space!");
        list.textContent = " ";
        console.log(list);
        document.querySelector('#phrase ul').appendChild(list);
      }
      else{
        var list = document.createElement("li");
        list.textContent = tempString[char];
        console.log(list.textContent = tempString[char]);
        console.log(list);
        document.querySelector('#phrase ul').appendChild(list);
      }
    }
  }
}

const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);

// check function will be used inside event listener

function checkLetter(buttonClicked){

}

document.getElementById("qwerty").addEventListener("click", function(){

});
