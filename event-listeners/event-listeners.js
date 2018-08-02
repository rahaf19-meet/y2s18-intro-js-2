// YOUR TASK: Add more pictures!
var pictures = ['daisy.jpeg','donald_duck.png','goofy.png','mickey.jpeg','minnie_mouse.jpeg','/imgs/dog.jpg'];
var currentIndex = 0;

document.getElementsByTagName("img")[0].addEventListener("click", function (event) {
	showNextPicture();
});

function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  else if (currentIndex<pictures.length){
  	var img1=document.getElementsByTagName("img")[0];
  	img1.src=pictures[currentIndex];
  }

  // YOUR TASK: Finish this function!
}