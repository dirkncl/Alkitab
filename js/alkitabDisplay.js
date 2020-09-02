/*************************************/
/*     Dirk L. Nicolaas              */
/*    Masih dalam tahap proses       */ 
/*  belajar dari yang sederhana      */
/*   Sawangan - Minahasa Utara       */
/*  Sulawesi Utara - Indonesia       */
/*      15 November 2018             */
/*************************************/
/* ********************************************* */
window.onload=function(){
  var alkitabDB;
  alkitabDB = "data/alkitab-tb";
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
  loadingKitab(alkitabDB);

  function getAyatAlkitab(referensi){
    var referensi_diminta = referensi;
    var referensi_jawab = "";
    var query = [0,1];
    var result = [];
    var tmp;
    for (var i = 0; i< alkitabArray.length; i++){
      tmp = alkitabArray[i];
      result[0] = tmp.split('^')[0];
      result[1] = tmp.slice(tmp.indexOf('^')+1);
      if(referensi_diminta === result[query[0]]) {
        referensi_jawab = result[query[1]]
      };
    } 
    return referensi_jawab;
  };

  document.getElementById('inputAlkitab').focus();
  var ayatToDisplay = document.getElementById('ayatToDisplay');
  ayatToDisplay.innerHTML = "";
  var Kitab_Pasal_Ayat = "";
  var ls = location.search;
  var par ="";
  var hasil = [];
  var result = "";
  par = decodeURIComponent(ls).replace(/\+/g, " ").replace('?','');
  if (par !== ""){
    document.getElementById('inputAlkitab').value = par;
    proses(window.event);
    display();
  }
  function proses(e){
    e.preventDefault();
    result = "";
    Kitab_Pasal_Ayat = document.getElementById('inputAlkitab').value;
    Kitab_Pasal_Ayat = PraParser(Kitab_Pasal_Ayat);
    var kitab = Kitab_Pasal_Ayat.kitab,
        pasal = Kitab_Pasal_Ayat.pasal,
        ayat = Kitab_Pasal_Ayat.ayat;
    if (ayat.length>1){
      for(var i = 0;i<ayat.length;i++){
        hasil[i] = toSemiOsis(kitab+" "+pasal+":"+ayat[i]+"")
      }
    }  
    else {
      hasil[0] = toSemiOsis(kitab+" "+pasal+":"+ayat[0]+"")
    }
    if(Kitab_Pasal_Ayat=="")ayatToDisplay.style.display = 'none';
    
  };
  
  document.getElementById('inputAlkitab').onchange = function(e){
    for(var i=0;i<hasil.length;i++){
      hasil[i] = "";
    };
    document.getElementById('inputAlkitab').focus();
   
    
    proses(e)
  };

  
  function display(){
     ayatToDisplay.innerHTML = "";
    ayatToDisplay.style.display='block';
    ayatToDisplay.style.textAlign='left';
    var sup;
    if(hasil.length>1){
      for(var i=0;i<hasil.length;i++){
        sup = hasil[i].split(".").pop();
        result += "<sup>"+sup+"</sup>" + getAyatAlkitab(hasil[i])+"<br><br>";
      }
      ayatToDisplay.innerHTML="<br>"+result;
    }  
    else{
      sup = hasil[0].split(".").pop();
      console.log(sup)
      result = "<sup>"+sup+"</sup>" + getAyatAlkitab(hasil[0]);
      ayatToDisplay.innerHTML="<br>"+result;
    }
  };
  
  function clear(){
    for(var i=0;i<hasil.length;i++){
      hasil[i] = "";
    };
    document.getElementById('inputAlkitab').value = "";
    document.getElementById('inputAlkitab').focus();
    ayatToDisplay.innerHTML = result = ""
  };
 
  document.addEventListener("keydown",function(e){
    if(13 === e.keyCode||!(e.ctrlKey||e.metaKey))
      switch(e.keyCode){
        case 13:display();break;//[enter]
        case 27:clear();break;  //[Esc]
      }
  });
  
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
};

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
