var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
  // mode buttons event listeners
  setupModeButtons();
  // square clicking behaviour and listeners
  setupSquares();
  // setting random colors / picking goal color
  reset();
}


function setupModeButtons(){
  for(var i = 0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        for(var j = 0; j<modeButtons.length; j++)
             modeButtons[j].classList.remove("selected");
      //modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      // ternary operator practise
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for(var i=0; i<squares.length; i++){
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of picked squares
      var clickedColor = this.style.backgroundColor;
      // compare color to picked one
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}

function reset(){
  // generate all new Colors
  colors = generateRandomColors(numSquares);
  // pick new random Color
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for(var i =0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else{
      squares[i].style.display = "none";
    }

  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
  reset();
});


function changeColors(color){
  // loop through all squares
  for(var i = 0; i < squares.length; i++){
    // change each colors
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

function generateRandomColors(num){
  // make an array
  var arr = [];
  // add num random colors to array
  for(var i = 0; i < num; i++){
    // get random colors and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  // pick red 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick green 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick blue 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}