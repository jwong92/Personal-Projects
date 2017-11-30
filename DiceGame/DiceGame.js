//JavaScript Dice Game (Rigged)

//Idea of game is to roll double 12

//Assign a random number to each image
//Create a function to spit out a random number for dice 1
$(document).ready(function(){

  function randomNum() {
    var num1 = Math.floor((Math.random() * 6) +1);
    var num2 = Math.floor((Math.random() * 5) +1);

//Assign the numbers to the outputs
    $("#output1").html(num1);
    $("#output2").html(num2);

//Capture all the dice into a variable (array of dice classes)
  var allDice1 = document.querySelectorAll(".dice1");
  var allDice2 = document.querySelectorAll(".dice2");
  console.log(allDice1);
  console.log(allDice2);

//Loop through each dice
  //Dice1
  for (var i=0; i<allDice1.length; i++) {
    //Clear the dice on the page
    allDice1[i].style.display = "none";

    //if random number is equal to the number in the loop, then display that number in the array to the block.
    //Random number generated is from 1-6, loop and arrray have a 0 index - hence num1/num2-1.
    if(num1-1 === i) {
      allDice1[i].style.display = "block";
    }
  }

  //Dice2
  for (var i=0; i<allDice2.length; i++) {
    //Clear the dice on the page
    allDice2[i].style.display = "none";

    if (num2-1 === i) {
      allDice2[i].style.display = "block";
    }
  }

  }

$("#click").on("click", function(){
  randomNum();
})



})
