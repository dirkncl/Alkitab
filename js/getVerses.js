﻿/*************************************/
/*     Dirk L. Nicolaas              */
/*    Masih dalam tahap proses       */ 
/*  belajar dari yang sederhana      */
/*   Sawangan - Minahasa Utara       */
/*  Sulawesi Utara - Indonesia       */
/*      15 November 2018             */
/*************************************/
/* ********************************************* */

var ref_ayat ="";
var bible_version;
var InputString = decodeURIComponent(location.search).replace(/\+/g, " ").replace('?','');
var inputs;
if(InputString.includes("&")){
  inputs = InputString.split("&")
  InputString = inputs[0]
}

if(InputString.includes("[")){
  InputString = InputString.split("[")
  ref_ayat = InputString[0].trim()
  bible_version = InputString[1].replace("]","")
}
else if(InputString.includes("(")){
  InputString = InputString.split("(")
  ref_ayat = InputString[0].trim()
  bible_version = InputString[1].replace(")","")
}
else if(InputString.includes("--")){
  InputString = InputString.split("--")
  ref_ayat = InputString[0].trim()
  bible_version = InputString[1].trim()
}
else{
    ref_ayat = InputString
    bible_version = ""
}  
window.onload= function(){
  bg()
  alkitab(ref_ayat,bible_version)
}

function alkitab(verse_refrence, version){
  version = version||"TB"
  var ver;
  var alkitabDB;
  alkitabDB={
    id_TB:"data/alkitab-tb",
    en_kjv:"data/bible-kjv",
    en_akjv:"data/bible-akjv"
  };
  var versionName
  switch (version.toUpperCase()){
    case "": 
    case "TB-LAI":
    case "TB": ver = alkitabDB.id_TB;   versionName = "Alkitab (TB - LAI)";break;
    case "AV":
    case "KJV":ver = alkitabDB.en_kjv; versionName = "Bible (KJV - 1769)";break;
    case "A-KJV":
    case "AKJV":ver = alkitabDB.en_akjv; versionName = "Bible (American - KJV)";break;
  }
  
  var alkitabArray=[]; 
  function loadingKitab(alk){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", alk,false);
    xhr.onload = parse;
    xhr.send();
  };
  function parse() {
      alkitabArray = this.response;
      alkitabArray.trim();
      alkitabArray = alkitabArray.split('\n').join('\n');
      alkitabArray = alkitabArray.split('\n');
    
  };
 
  function getAyatAlkitab(referensi){
    var referensi_diminta = referensi;
    var referensi_jawab = "";
    var result = [];
    var tmp;
    for (var i = 0; i< alkitabArray.length; i++){
      tmp = alkitabArray[i];
      result[0] = tmp.split('^')[0];
      result[1] = tmp.split('^')[1];
      if(referensi_diminta === result[0]) {
        referensi_jawab = result[1]
      };
    } 
    
    return referensi_jawab;
  };

  var ayatToDisplay = document.getElementById('ayatToDisplay');
  var content = document.getElementById('content');
  content.innerHTML = "";
  var Kitab_Pasal_Ayat = "";
  var hasil = [];
  var result = "";
  var inputAlkitab;
  if (verse_refrence !== ""){
    loadingKitab(ver);
    document.getElementById('version').className = "blink";
    document.getElementById('version').innerHTML = versionName;
    document.getElementById('ref_ayat').innerHTML = verse_refrence+" "+version;
    //document.title = versionName;
    document.title = verse_refrence+" "+version;
    inputAlkitab = verse_refrence
    var check = toSemiOsis(inputAlkitab).split(".")
    if(check.length>1){
      proses(window.event);
    }
    else{
      prosesBook(window.event)
    }
    display();
  }

  function proses(e){
    e.preventDefault();
    result = "";

    Kitab_Pasal_Ayat = inputAlkitab;
    Kitab_Pasal_Ayat = PraParser(Kitab_Pasal_Ayat);
    
    console.log(Kitab_Pasal_Ayat)
    var kitab = Kitab_Pasal_Ayat.kitab,
        pasal = Kitab_Pasal_Ayat.pasal,
        ayat = Kitab_Pasal_Ayat.ayat;
    if (ayat.length>1){
      for(var i = 0;i<ayat.length;i++){
        hasil[i] = toSemiOsis(kitab+" "+pasal+":"+ayat[i]+"")
      }
      
    }  
    else {
      hasil[0] = toSemiOsis(kitab+" "+pasal+":"+ayat+"")
    }
    if(Kitab_Pasal_Ayat=="")ayatToDisplay.style.display = 'none';
  };

  function prosesBook(e){
    e.preventDefault();
    result = "";
    Kitab_Pasal_Ayat = inputAlkitab;
    Kitab_Pasal_Ayat = PraParser(Kitab_Pasal_Ayat);
    var kitab = Kitab_Pasal_Ayat.kitab,
        pasal = Kitab_Pasal_Ayat.pasal,
        ayat = Kitab_Pasal_Ayat.ayat;
    var pas=0;
    for(var i = 0;i<ayat.length;i++){
       if(ayat[i]==="1") pas +=1;
       //console.log(kitab[0]+" "+pas+":"+ayat[i])
        hasil[i] = toSemiOsis(kitab[0]+" "+pas+":"+ayat[i]+"")
    }
    if(Kitab_Pasal_Ayat=="")ayatToDisplay.style.display = 'none';
  };

  function display(){
    content.innerHTML = "";
    ayatToDisplay.style.display='block';
    content.style.textAlign='left';
    var sup,sup2;
    if(hasil.length>1){
      for(var i=0;i<hasil.length;i++){
        var osisSplit = hasil[i].split(".");
        sup = osisSplit.pop();
        sup2 = osisSplit.pop();
        if(sup==="1") {
          //sup = '<font size="6" color="ivory">'+sup2+'</font>';//+":"+sup
          sup = '<span class="blink" style="opacity:0.8;color:ivory;float:left;font-size:2.2em;padding: 5px 20 5px 40px;margin-right: 9px;">'+sup2+'</span>';
          //sup = '<span style="float:left;padding: 10px 20 10 40px;margin-right: 9px;"><font size="6" color="ivory">'+sup2+'</font></span>';
          sup = "<span>"+sup+"</span>&nbsp;"
          addbreak = '<br><br><br><br>'
          
        }else{
          sup = sup.sup()
          //sup = "<span style='color:'"+supColor+"';font-size:'"+supFont+"'em;opacity:'"+supOpa+"'>"+sup+"</span>&nbsp;"
          sup = "<span style='opacity:0.8'>"+sup+"</span>&nbsp;"
          addbreak = ''
        };

        if(getAyatAlkitab(hasil[i])!==""){
          result += sup + getAyatAlkitab(hasil[i])+"<br><br>";
        }
      }
      
      content.innerHTML=addbreak+"<br>"+result+"<br><br>";
    }  
    else{
      sup = hasil[0].split(".").pop();
      sup = sup.sup()
      sup = "<span  style='opacity:0.8'>"+sup+"</span>&nbsp;"
      //"<span style='font-size:0.8em;opacity:0.7'>"+sup+"</span>&nbsp;"
      //console.log(sup)
      result = sup + getAyatAlkitab(hasil[0]);
      content.innerHTML="<br>"+result+"<br><br>";
    }
  };
  
  function clear(){
    for(var i=0;i<hasil.length;i++){
      hasil[i] = "";
    };
    content.innerHTML = result = ""
  };
 
  document.addEventListener("keydown",function(e){
    if(13 === e.keyCode||!(e.ctrlKey||e.metaKey))
      switch(e.keyCode){
        case 13:display();break;//[enter]
        case 27:clear();break;  //[Esc]
      }
  });
};

function bg()  {
  var body = document.body;
  
  var backgrounds = [ 
    "imgs/air-kehidupan-by-rumi-source_assets-a2_kompasiana_com.jpg",
    "imgs/alkitab_source_assets-a2_kompasiana_com.jpg"
   ]
  
  var current = parseInt(Math.random()*backgrounds.length)%backgrounds.length;
  function nextBackground() {
    body.background = backgrounds[parseInt(Math.random()*backgrounds.length)%backgrounds.length];
    body.background.repeat = 'no-repeat';
    body.background.size = 'cover';
    setTimeout(nextBackground, 10000);
  }
  setTimeout(nextBackground, 10000);
  body.background = backgrounds[current];
  body.background.repeat = 'no-repeat';
  body.background.size = 'cover';
}

var scrollbarAndBlink = `
  ::-webkit-scrollbar {
      height: 8px;
      width: 8px;
      background: #104410;
      border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
      background: #106610;
      border-radius: 4px;
  }
  
  ::-webkit-scrollbar-corner {
      background: #000000;
  }
  @keyframes blink {  
    0% { color: gold; }
    25% { color: ivory; }
    50% { color: lightgray; }
    75% { color: gray; }
    100% { color: black; }
  }
  @-webkit-keyframes blink {
    0% { color: gold; }
    25% { color: ivory; }
    50% { color: lightgray; }
    75% { color: gray; }
    100% { color: black; }
  }
  .blink {
    -webkit-animation: blink 3s linear infinite;
    -moz-animation: blink 3s linear infinite;
    animation: blink 3s linear infinite;
  }
`;
(sty=document.createElement("style")).textContent=scrollbarAndBlink,document.head.appendChild(sty)
