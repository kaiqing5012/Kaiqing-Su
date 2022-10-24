let hue1;
let hue2;
let hue;

// let line1 = "The clouds look like hourse"
// let line2 = "the sky is shaking"

// let poem1 = RiTa.tokenize(line1);
// let poem2 = RiTa.tokenize(line2);
// poem1[1] = RiTa.randomWord()
// poem2[3] = RiTa.randomWord()

// let newPoem1 = poem1.join(' ')
// let newPoem2 = poem2.join(' ')


let sentence = "This is a long sentence"

let rData = RiTa.tokenize(sentence);
rData[3] = RiTa.randomWord()
rData[4] = RiTa.randomWord({
  pos:RiTa.pos(rData[4])[0]
})

let newSentence = rData.join(' ')//add the spaces
console.log(rData)

let sentences = [
  "This homework sucks",
  "This homework sucks",
  "This homework sucks",
  "This homework sucks"
];




function setup() {
  createCanvas(800, 600)
  // hue1 = chroma('pink').darken().saturate().hex()
  // hue2 = chroma.temperature(2500)
  // hue = chroma.mix(hue1, hue2, 0.5).rgb()
  // hue = chroma.random().rgb()
  // hue = chroma.scale(['red', 'blue'])
  hue = chroma.blend('#47af22','#043630','overlay').rgb()

}

function draw() {
  //background(hue(Math.sin(frameCount/100)+1/2).rgb())
  background(hue)
  text(newSentence, 100,100,80)
  // text(newPoem1, 100,250,60)
  // text(newPoem2, 100,400,70)
  textSize(20)
  fill("yellow")


  let sentenceData = [];
  sentences.forEach(sent => sentenceData.push(RiTa.tokenize(sentence)))
  sentenceData.forEach((data, i) =>{
    data[2] = RiTa.randomWord({
      pos:RiTa.pos(data[2])[0]
    })
  let newSentences = data.join(' ')
  text(newSentences, 300 ,100+ 50*i)
  })
}
