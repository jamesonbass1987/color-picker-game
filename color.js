let numSquares = 6;
let pickedColor;
let colors = [];

let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset")
let modeButtons = document.querySelectorAll(".mode")

init();

function init(){
  setModeButtons();
  setSquares();
  reset();
}

function setModeButtons(){
  for(let i =0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected")
      modeButtons[1].classList.remove("selected")
      this.classList.add("selected");
      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
      reset();
    })
  }
}

function setSquares(){
  for(let i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      let clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!"
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "Try Again"
      }
    })
  }
}

function reset(){
  colors = generateRandomColors(numSquares)
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor
  // remove text from messageDisplay
  messageDisplay.textContent = "";;
  //change color of squares
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  //change backgroundcolor of top div
  h1.style.backgroundColor = "steelblue";
  //change button content to 'new colors'
  resetButton.textContent = "New Colors"
}

resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color){
  //loop through all squares and change each color to match given color
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  const random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

function generateRandomColors(num){
  //make an array
  let arr = []
  //add num random colors to arr
  for(let i =0; i < num; i++){
      //get random color and push into array
      arr.push(randomColor());
  }

  //return array
  return arr
}

function randomColor(){
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`
}
