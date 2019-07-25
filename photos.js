let imageArray = [ 
	"amusement-amusement-park-amusement-ride-2128165.jpg", 
	"amusement-park-amusement-ride-architecture-2532568.jpg", 
	"architecture-art-blur-2521470.jpg", 
	"carnival-carousel-circus-2350518.jpg" ];

let img = document.createElement("img");
img.alt = "Park Image";
img.width=480;

img.src=imageArray[0];

let body = document.querySelector("body");
body.appendChild(img);

let x = 0;

function prevImg() {
	if(x==0){
		x = imageArray.length-1;
	}
	else{
		x--;
	}
  img.setAttribute("src", imageArray[x % imageArray.length]);
	console.log("After prevImg, viewing image " + x);
}

function nextImg() {
	x = (x+1) % imageArray.length;
	img.setAttribute("src", imageArray[x % imageArray.length]);
	console.log("After nextImg, viewing image " + x);
}

/*
https://www.pexels.com/photo/photo-of-ferris-wheel-in-amusement-park-2128165/
amusement-amusement-park-amusement-ride-2128165.jpg

https://www.pexels.com/photo/photo-of-roller-coaster-on-amusement-park-2532568/
amusement-park-amusement-ride-architecture-2532568.jpg

https://www.pexels.com/photo/lit-ferris-wheel-at-night-2521470/
architecture-art-blur-2521470.jpg

https://www.pexels.com/photo/white-and-blue-horse-carousel-2350518/
carnival-carousel-circus-2350518.jpg
*/

let minusButton = document.getElementById("minusButton");
let plusButton = document.getElementById("plusButton");

minusButton.addEventListener("click", prevImg);
plusButton.addEventListener("click", nextImg);
