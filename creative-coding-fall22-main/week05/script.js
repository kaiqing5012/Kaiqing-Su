
// let toggle = false;
// function setup() {
//   createCanvas(windowWidth, windowHeight)

//   setTimeout(doThisLater, 4000);//delay 4000ms then run
//   setTimeout(doThisEvenLater, 6000);
//   setTimeout(()=>{
//     console.log("Hello Again!")
//     toggle = true;
//   }, 8000)//8000ms run
// }

// function draw() {
//   background(100)

//   if(toggle) ellipse(100,100,100)
// }

// function doThisLater(){
//   console.log("Hello, world!")//4000ms run
//   toggle = true;
// }

// const doThisEvenLater = () => {
//   console.log("Goodbye!")//6000ms run
//   toggle = false;
// }

//const sum = (a,b) => a+b //do not necessarily need the function syntax

// async function getDog(url){
//   const response = await fetch(url);
//   const data = await response.json();
//   dogImg = loadImage(data.message);
// }

let dogImg;

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
    console.log("response received.")
    console.log(response.body)
    return response.json()
  }).then((data) => {
    console.log("json parsed")
    console.log(data)

    dogImg = loadImage(data.message)
  })
  .catch((err) =>{
    console.log("it didn't work")
    console.log(err)
  })
  //alternative above
  // getDog("https://dog.ceo/api/breeds/image/random")
}
  
function draw() {
  background(100)
  if(dogImg != undefined){
  let dogWidth = dogImg.width;
  let dogHeight = dogImg.height;
  if(dogImg.width > windowWidth || dogImg.height > windowHeight){
    dogHeight /= 2;
    dogWidth /= 2;
  }
  image(dogImg, 0, 0)
  // console.log(dogHeight,dogWidth)
  }
}