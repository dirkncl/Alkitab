/*************************************/
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
  alkitab(ref_ayat,bible_version)
  bg()
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
    var query = [0,1];
    var result = [];
    var tmp;
    for (var i = 0; i< alkitabArray.length; i++){
      tmp = alkitabArray[i];
      result[0] = tmp.split('^')[0];
      result[1] = tmp.split('^')[1];
      if(referensi_diminta === result[query[0]]) {
        referensi_jawab = result[query[1]]
      };
    } 
    return referensi_jawab;
  };

  //document.getElementById('inputAlkitab').focus();
  var ayatToDisplay = document.getElementById('ayatToDisplay');
  ayatToDisplay.innerHTML = "";
  var Kitab_Pasal_Ayat = "";
  var hasil = [];
  var result = "";
  var inputAlkitab;
  if (verse_refrence !== ""){
    loadingKitab(ver);
    document.getElementById('version').innerHTML = versionName;
    document.getElementById('ref_ayat').innerHTML = verse_refrence+" "+version;
    document.title = versionName;
    inputAlkitab = verse_refrence
    proses(window.event);
    display();
  }
  function proses(e){
    e.preventDefault();
    result = "";
    Kitab_Pasal_Ayat = inputAlkitab;
    Kitab_Pasal_Ayat = PraParser(Kitab_Pasal_Ayat);
    var kitab = Kitab_Pasal_Ayat.kitab,
        pasal = Kitab_Pasal_Ayat.pasal,
        ayat = Kitab_Pasal_Ayat.ayat;
    if (ayat.length>1){
      for(var i = 0;i<ayat.length;i++){
        hasil[i] = toSemiOsis(kitab+" "+pasal+":"+ayat[i]+"")
      }
      //display();
    }  
    else {
      hasil[0] = toSemiOsis(kitab+" "+pasal+":"+ayat[0]+"")
      //display();
    }
    if(Kitab_Pasal_Ayat=="")ayatToDisplay.style.display = 'none';
    
  };

  function display(){
    ayatToDisplay.innerHTML = "";
    ayatToDisplay.style.display='block';
    ayatToDisplay.style.textAlign='left';
    var sup;
    if(hasil.length>1){
      for(var i=0;i<hasil.length;i++){
        sup = hasil[i].split(".").pop();
        if(getAyatAlkitab(hasil[i])!==""){
          result += "<sup>"+sup+"</sup>" + getAyatAlkitab(hasil[i])+"<br><br>";
        }
      }
      ayatToDisplay.innerHTML="<br>"+result;
    }  
    else{
      sup = hasil[0].split(".").pop();
      result = "<sup>"+sup+"</sup>" + getAyatAlkitab(hasil[0]);
      ayatToDisplay.innerHTML="<br>"+result;
    }
  };
  
  function clear(){
    for(var i=0;i<hasil.length;i++){
      hasil[i] = "";
    };
    ayatToDisplay.innerHTML = result = ""
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

var scrollbar = `
  ::-webkit-scrollbar {
      height: 8px;
      width: 8px;
      background: #104410;
  }
  
  ::-webkit-scrollbar-thumb {
      background: #106610;
      border-radius: 4px;
  }
  
  ::-webkit-scrollbar-corner {
      background: #000000;
  }
`;
(sty=document.createElement("style")).textContent=scrollbar,document.head.appendChild(sty)
