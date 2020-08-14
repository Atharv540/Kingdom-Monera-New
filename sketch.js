var speech, input, slider, voiceL, voicesr, para, button, back, sizeS, para2, drop;
var startB, classL, ccB, randomP, colorI, fontI, bgColour, pass, enaB, count, hideB;
var database, ref, tryes, fullB, smallB, filesC, divs;
function setup(){
//canvas = createCanvas(400,200);
//canvas.position(900,110);
speech = new p5.Speech("Microsoft David - English (United States)",voiceReady);
input = select("#Input");
enaB = select("#enable");
hideB = select("#Hide");
hideB.position(950,410);
hideB.hide();
enaB.position(850,410);
enaB.hide();
colorI = select("#colorL");
colorI.position(550,190);
bgColour = select("#myColor");
bgColour.position(550,225);
//para = createP();
pass = select("#Pass");
pass.position(640,410);
para2 = createP();
para2.position(550,270);
//para.position(550,320);
//slider = createSlider(0,29,0);
sizeS = createSlider(1,50,20);
sizeS.position(550,250);
//slider.position();
//button = createButton("Speak");
button = select("#speak");
//startB = createButton("Start the Q&A");
//startB.position(950,250);
count = 0;
button.position(560,400);
drop = select("#things");
drop.position(550,360);
ccB = select("#ccB");
ccB.position(900,315);
randomP = createP("");
randomP.position(1040,305);
fontI = select("#font");
fontI.position(550,160);
tryes = select("#change");
tryes.position(760,320);
filesC = createFileInput(fileSelected);
filesC.position(650,290);
fullB = select("#fullscreen");
fullB.position(550,320);
marqueeF = select("#man");
//marqueeF.loop =2;
funfactL = ["Almost one million bacteria can be 'created' by one person on a school day ", "Bacteria 40 years old have been extracted and succesfully grown from a fossilized bee!"];
//smallB = select("#smallscreen");
//smallB.position(650,320);
//smallB.hide();
var firebaseConfig = {
    apiKey: "AIzaSyB_L17enBzXdLw-N6UHbrFUy1Yn5lzOI3k",
    authDomain: "textarea-56430.firebaseapp.com",
    databaseURL: "https://textarea-56430.firebaseio.com",
    projectId: "textarea-56430",
    storageBucket: "textarea-56430.appspot.com",
    messagingSenderId: "316817616979",
    appId: "1:316817616979:web:8f58a5e9dab70ec02196a6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();
  //console.log(firebase);
  ref = database.ref("textinfo");
  ref.on('value', gotData);
  pixRef = database.ref("pixelsize");
  pixRef.on('value', gotPix);
  fontRef = database.ref("font-type");
  fontRef.on('value', gotFont);
  colRef = database.ref('font-color');
  colRef.on('value', gotCol);
  bgRef = database.ref('bgColor');
  bgRef.on('value', gotBg);

classL = ["Abhi", "Agastya", "Ahan", "Ahana", "Ananya", "Anika", "Anagha", "Atharva", "Avyukt", "Basant", "Chiranthana", "Dhananya","Eesha","Govind", "Hansika", "Hitayu","Harini","Ishaan", "Kaavish", "Leisha", "Myra", "Parthiv","Seerat","Tharika","Yukhthikar"]
function voiceReady(){
    speech.listVoices();
    //console.log(speechL[0]);



}
//input.mousePressed(function(){
    //if(input.value()=== " Text "){
    //input.value("");
  //  }
//})


}
function gotData(data){
  let infos = data.val();
  let keys = Object.keys(infos);
  for(let i=0; i<keys.length; i++){
    let k = keys[i];
    input.value(infos[k].info);
  }
}
function gotPix(pix){
  let infos = pix.val();
  let keys = Object.keys(infos);
  for(let i=0; i<keys.length; i++){
    let k = keys[i];
    sizeS.value(infos[k].pixSize);
  }
}
function gotFont(font){
  let infos = font.val();
  let keys = Object.keys(infos);
  for(let i=0; i<keys.length; i++){
    let k = keys[i];
    fontI.value(infos[k].Fontype);
  }
}
function gotCol(col){
  let infos = col.val();
  let keys = Object.keys(infos);
  for(let i=0; i<keys.length; i++){
    let k = keys[i];
    colorI.value(infos[k].ColType);
  }
}
function gotBg(bgcol){
  let infos = bgcol.val();
  let keys = Object.keys(infos);
  for(let i=0; i<keys.length; i++){
    let k = keys[i];
    bgColour.value(infos[k].byCol);
  }
}
function fileSelected(file){
input.value(file.data);
}
function draw(){
  fullB.mousePressed(function(){
    input.position(0,0);
    input.size(displayWidth-20, displayHeight);
    bgColour.hide();
    fullB.hide();
    ccB.hide();
    sizeS.hide();
    drop.hide();
    button.hide();
    fontI.hide();
    colorI.hide();
    tryes.hide();
    para2.hide();
    filesC.hide();
  })

tryes.mousePressed(function(){
  displayData();
  displayPix();
  displayFont();
  displayCol();
  displaybgCol();
})
    //background("red");
input.style("font-size", sizeS.value()+"px");
para2.html(sizeS.value()+"px");
para2.style("color", "red");
para2.style("background-color", "yellow");
input.style("color", colorI.value());
input.style("font-family", fontI.value());
input.style("background-color", bgColour.value());
fontI.style("font-family", fontI.value());
fontI.style("font-size", "20px");
fontI.style("color", "black");
fontI.style("border", "none");
colorI.style("font-size", "20px");
colorI.style("font-family", "Agency Fb")

    //voiceL = ["Microsoft David - English (United States)","Microsoft Ravi - English (India)","Microsoft Heera - English (India)","Microsoft Mark - English (United States)","Microsoft Zira - English (United States)","Microsoft Katja Online (Natural) - German (Germany)","Microsoft Natasha Online (Natural) - English (Australia)","Microsoft Clara Online (Natural) - English (Canada)","Microsoft Mia Online (Natural) - English (United Kingdom)","Microsoft Neerja Online (Natural) - English (India)","Microsoft Aria Online (Natural) - English (United States)","Microsoft Guy Online (Natural) - English (United States)","Microsoft Elvira Online (Natural) - Spanish (Spain)","Microsoft Dalia Online (Natural) - Spanish (Mexico)","Microsoft Sylvie Online (Natural) - French (Canada)","Microsoft Denise Online (Natural) - French (France)","Microsoft Swara Online (Natural) - Hindi (India)","Microsoft Elsa Online (Natural) - Italian (Italy)","Microsoft Nanami Online (Natural) - Japanese (Japan)","Microsoft SunHi Online (Natural) - Korean (Korea)","Microsoft Colette Online (Natural) - Dutch (Netherlands)","Microsoft Zofia Online (Natural) - Polish (Poland)","Microsoft Francisca Online (Natural) - Portuguese (Brazil)","Microsoft Dariya Online (Natural) - Russian (Russia)","Microsoft Emel Online (Natural) - Turkish (Turkey)","Microsoft Xiaoxiao Online (Natural) - Chinese (Mainland)","Microsoft Yunyang Online (Natural) - Chinese (Mainland)","Microsoft HiuGaai Online (Natural) - Chinese (Hong Kong)","Microsoft HiuGaai Online (Natural) - Chinese (Hong Kong)","Microsoft HsiaoYu Online (Natural) - Chinese (Taiwan)"]
    //para.html(drop.value());
    voicesr = drop.value();
    button.mousePressed(function(){
        speech.setVoice(drop.value());
        speech.speak(input.value());
    })
    //input.changed(function(){
        //if(input.value() !== "Text"){
            //speech.setVoice(voicesr);
        //speech.speak(input.value());
        //}
    //})
    ccB.mousePressed(function(){
        randomP.style("background-color", "yellow");
        randomP.html("This Question goes to "+classL[Math.floor(Math.random()*classL.length)]);
    })
    inputL = input.value().split();

    pass.changed(function(){
        keyPressed();
    })
    hideB.mousePressed(function(){
        pass.hide();
        enaB.hide();
        hideB.hide();
    })


}

function displayData(){
  var data={
    info:input.value()
  }
  ref.push(data);
  input.value();
}
function displayPix(){
  var pix={
    pixSize:sizeS.value()
  }
  pixRef.push(pix);
  sizeS.value();
}
function displayFont(){
  var font={
    Fontype:fontI.value()
  }
  fontRef.push(font);
  fontI.value();
}
function displayCol(){
  var cols={
    ColType:colorI.value()
  }
  colRef.push(cols);
  colorI.value();
}
function displaybgCol(){
  var bgcols={
    byCol:bgColour.value()
  }
  bgRef.push(bgcols);
  bgColour.value();
}
function keyPressed(){
  let paras = createP("");
  if(keyCode === 18){
    input.size(200,200);
    input.position(0,500);
    bgColour.show();
    fullB.show();
    ccB.show();
    drop.show();
    button.show();
    sizeS.show();
    para2.show();
    fontI.show();
    colorI.show();
    tryes.show();
    filesC.show();
  }
  else if(keyCode === 13){
      if(pass.value() === "annarbor3"){
          count = 1;
      enaB.show();
      paras.html("");
      hideB.show();
     //drop.disabled=false;
  }
  }
}
//}
