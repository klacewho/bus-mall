'use strict'

var imageArray = [];
var imgElOne = document.getElementById("image-one")
var imgElTwo = document.getElementById("image-two")
var imgElThree = document.getElementById("image-three")

// Image inputs //
new Image('bag','./images/bag.jpg');
new Image('banana','./images/banana.jpg');
new Image('bathroom','./images/bathroom.jpg');
new Image('boots','./images/boots.jpg');
new Image('breakfast','./images/breakfast.jpg');
new Image('bubblegum','./images/bubblegum.jpg');
new Image('chair','./images/chair.jpg');
new Image('cthulhu','./images/cthulhu.jpg');
new Image('dog-duck','./images/dog-duck.jpg');
new Image('dragon','./images/dragon.jpg');
new Image('pen','./images/pen.jpg');
new Image('pet-sweep','./images/pet-sweep.jpg');
new Image('scissors','./images/scissors.jpg');
new Image('shark','./images/shark.jpg');
new Image('sweep','./images/sweep.jpg');
new Image('tauntaun','./images/tauntaun.jpg');
new Image('unicorn','./images/unicorn.jpg');
new Image('usb','./images/usb.gif');
new Image('water-can','./images/water-can.jpg');
new Image('wine-glass','./images/wine-glass.jpg');
// Image Constructor //
function Image(name, src){
  this.viewed = 0;
  this.clicked = 0;
  this.src= src;
  this.name = name;
  imageArray.push(this)
}
function postImages (){
  var imgOne = imageArray[getNumber(imageArray.length)];
  var imgTwo = imageArray[getNumber(imageArray.length)];
  var imgThree = imageArray[getNumber(imageArray.length)];

  imgElOne.src = imageArray[getNumber(imageArray.length)].src;
  imgElTwo.src = imageArray[getNumber(imageArray.length)].src;
  imgElThree.src = imageArray[getNumber(imageArray.length)].src;

  while (imgElOne.src === imgElTwo.src){
    imgElTwo + imageArray[getNumber(imageArray.length)].src;
  }
  while (imgElTwo.src === imgElThree.src){
    imgElTwo + imageArray[getNumber(imageArray.length)].src;
  }
  while (imgElThree.src === imgElOne.src){
    imgElThree + imageArray[getNumber(imageArray.length)].src;
  }

  imgElOne.src = imgOne.src;
  imgElTwo.src = imgTwo.src;
  imgElThree.src = imgThree.src;

  imgElOne.alt = imgOne.name;
  imgElTwo.alt = imgTwo.name;
  imgElThree.alt = imgThree.name;

  imgOne.viewed++;
  imgTwo.viewed++;
  imgThree.viewed++;
}
function getNumber(max){
  return Math.floor(Math.random() * max)
} 
//// Above posts images to page ///
imgElOne.addEventListener('click', eventHandler);
imgElTwo.addEventListener('click', eventHandler);
imgElThree.addEventListener('click', eventHandler); 

function eventHandler(e){
  console.log(e.target.alt)
}
postImages();
