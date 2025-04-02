var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var newGame = false;
var level = 0;
$(".green").click(function (event) {
  newGame === true ? handler(event) : null;
});
$(".red").click(function (event) {
  //   handler(event);
  newGame === true ? handler(event) : null;
});
$(".blue").click(function (event) {
  //   handler(event);
  newGame === true ? handler(event) : null;
});
$(".yellow").click(function (event) {
  //   handler(event);
  newGame === true ? handler(event) : null;
});
$("body").keypress(function () {
  if (newGame === false) {
    newGame = true;
    nextSequence();
  }
});
function handler(event) {
  console.log(event);
  playSound(event.target.id);
  animate(event);
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  validate();
  console.log(userClickedPattern);
}
function validate() {
  var i = 0;
  for (i = 0; i < userClickedPattern.length; i++) {
    if (gamePattern[i] !== userClickedPattern[i]) {
      gameOver();
    }
  }
  if (i === gamePattern.length) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
}
function gameOver() {
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  newGame = false;
  $("h1").text("Game Over, Press Any Key to Restart");
}
function animate(event) {
  event.target.classList.add("pressed");
  setTimeout(function () {
    event.target.classList.remove("pressed");
  }, 200);
}
function playSound(color) {
  var audio = new Audio("./sounds/" + color + ".mp3");
  audio.play();
}
function nextSequence() {
  level++;
  $("h1").text("Level " + level);
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("." + randomChosenColour).addClass("pressed");
  playSound(randomChosenColour);
  setTimeout(function () {
    $("." + randomChosenColour).removeClass("pressed");
  }, 200);
}
