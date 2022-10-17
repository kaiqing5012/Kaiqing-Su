//fetch the cat images from APIs
//fetch the cat facts from APIs
//since there is an array, fetch the length of the array and draw something with it
//https://www.youtube.com/watch?v=6mT3r8Qn1VY&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=4

let catFacts = null;
let catFactsNum;
let factURL = "https://meowfacts.herokuapp.com/?count=3";
let catImg;
let imageURL = "https://api.thecatapi.com/v1/images/search";
let Header = {'x-api-key':'live_UX3PgVG9M8uzoET4iJZ1S6VV7Ke1328WTeHTVthh0oDSPZxCwOSWNa6MkQz85NB4'};

// async function getCatFacts(url){
//   const response = await fetch(url);
//   console.log(url);
//   const data = await response.json();
//   console.log(response);
//   catFacts = loadJSON(data.data);
//   console.log(data)
// }

// async function getCatFactsNum(url){
//   const response = await fetch(url);
//   console.log(url);
//   const data = await response.json();
//   console.log(response);
//   catFactsNum = loadJSON(data.data.length);
// }

function setup() {
  createCanvas(700,500)
  loadURL();
  
  fetch(imageURL)
  .then((response) => {
      console.log("response received.")
      console.log(response)
      return response.json()
    }).then((data) => {
      console.log("json parsed")
      console.log(data)
      catImg = loadImage(data[0].url)
    })
    .catch((err) =>{
      console.log("it didn't work in image")
      console.log(err)
    })

  //getCatFacts(factURL)
  //getCatFactsNum(factURL)
}


function draw() {
  background(100)
  
  if(catImg != undefined){
    let catWidth = catImg.width;
    let catHeight = catImg.height;
    if(catWidth > 300 || catHeight > 200){
      catWidth /=4;
      catHeight /=4;
      //console.log("The pic size is too big!!!")
    }
    image(catImg,350,300)
    imageMode(CENTER)
    //console.log(catHeight)
    stroke(223,246,156)
    strokeWeight(2)
    fill(0)
    textSize(18)
    if(catFacts != undefined){
    text(catFacts.data[0], 20, 20);
    textAlign(LEFT)
    textWrap(WORD)
    // text(catFacts.data[1], 30, 60, width);
    // text(catFacts.data[2], 30, 100, width);
    }
  }
  
  // if(catFacts != undefined){
  //   text(catFacts, 10, 100)
  //   stroke(255)
  //   strokeWeight(3)
  //   fill(0)
  //   textSize(20)
  // }

  // if(catFactsNum > 0){
  //   for(catFactsNum = 0; catFactsNum < 3; catFactsNum ++){
  //      ellipse(100+ 5 * catFactsNum, 250,10,10)
  //   }
  // }
}

function loadURL() {
  catFacts = loadJSON(factURL, gotData);
  //console.log(catFacts)
}
  
function gotData() {
}
