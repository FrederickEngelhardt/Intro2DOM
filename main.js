var pick = 0
function changePic (){
  var main = document.getElementById('image');
  if (pick === 1){
    main.src = 'images/monkey-2790452_1280.jpg';
    pick = 0
  }
  else if (pick === 0){
    console.log(main.src)
    main.src = 'images/fallow-deer-602253__480.jpg';
    console.log(main.src)
    pick = 1
  }
}


//Change the headings text color to blue
//HINT: it's a class!
var headings = document.getElementsByClassName('headings')
for (var i = 0; i < headings.length; i++){
  headings[i].style.color = 'blue';
}


//Change the button's background-color to green
var button = document.getElementById('button');
button.style.backgroundColor = 'green';
console.log(button);

//Change the paragraph font to 'Tahona'
var pChange = document.getElementsByClassName("paragraph")[0];
pChange.style.fontFamily = "Arial";

//Change the entire documents background color to yellow
var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'yellow';

// Create an listener that swaps the photo if you click on the imag
var image = document.getElementById('image')
image.addEventListener('click',changePic)

// Create a function that changes the backgroundColor of body every 3 seconds.
function bgChange(){
  console.log('bgChange was called')
  if (body.style.backgroundColor === 'blue'){
    body.style.backgroundColor = 'yellow'
  }
  else if (body.style.backgroundColor === 'yellow'){
    body.style.backgroundColor = 'blue'
  }
}
image.addEventListener('click',bgChange)

// This function calls itself
function changeBG() {
    console.log("1 seconds");
    bgChange()
    setTimeout(changeBG, 1000);
}

setTimeout(changeBG, 3000);

// function time(){
//   setTimeout(function(){
//     bgChange()
//     console.log('bgChange called through time');
//   }, 5000)
// }
// for(var i = 0; i < 2000; i++){
//   time()
// }
