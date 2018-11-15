/*************************************/
/*     Dirk L. Nicolaas              */
/*    Masih dalam tahap proses       */ 
/*  belajar dari yang sederhana      */
/*   Sawangan - Minahasa Utara       */
/*  Sulawesi Utara - Indonesia       */
/*      15 November 2018             */
/*************************************/
/*
  program ini masih sederhana
  tidak mempunyai limit jumlah kitab, jumlah pasal dan jumlah ayat
  hanya sebatas "kitab pasal:ayat" dan "kitab pasal:ayat_awal-ayat_akhir"
  contoh : "mat. 3:2", "mat 3:2", "matt. 3:2", "Yoh. 3:16", "Kej. 3:2-20"
  masukan bisa dari kotak input atau dari parameter seperti namaFileIni?ayatSepertiContoh
  jika nama file ini adalah Alkitab.html maka parameter adalah :
  Alkitab.html?Kej. 3:2-20
  Alkitab.html?Yoh. 3:16
  Alkitab.html?mat. 3:2
  Alkitab ini hanya sebagai experimen belajar Javascript dengan referensi dari berbagai sumber dan dirakit seperti ini
  dan sudah tentu banyak sekali kekurangan misalnya pengetahuan regExp yang sangat buta, regex yang ada didalam hanya dilakukan
  trial and error(diuji berulang-ulang), namun karena jumlah kitab dalam alkitab cukup banyak (66 kitab) maka cukup memakan waktu
  dan melelahkan.
  yang paling lama proses perakitan adalah membuat matching input nama kitab agar bersesuaian dengan standard singkatan ayat alkitab
  dalam bahasa inggris dan bahasa Indonesia;
  Jika ada beberapa kesalahan input ayat dengan hasil alkitab maka mohon maaf dan akan diperbaiki jika ada waktu 
  namun saat ini sudah sangat jenuh.
  juga dalam hal tampilan atau montage penampilan layar bagi saya banyak kekurangan
  akan tetapi jika tidak pernah mencoba, kapan bisa berhasil?...
  standar singkatan dengan/atau tanpa tanda titik dan perpanjangan menjadi kata serta variasi huruf besar/kecil
  singkatan bahasa Indonesia 
  Kej.,Kel.,Ima.,Bil.,Ula.,Yos.,Hak.,Rut.,1Sam.,2Sam.,1Raj.,2Raj.,1Taw.,2Taw.,Ezr.,Neh.,Est.,Ayb.,Maz.,Ams.,Pkh.,Kid.,Yes.,Yer.,
  Rat.,Yeh.,Dan.,Hos.,Yoe.,Amo.,Oba.,Yun.,Mik.,Nah.,Hab.,Zef.,Hag.,Zak.,Mal.,Mat.,Mar.,Luk.,Yoh.,Kis.,Rom.,1Kor.,2Kor.,Gal.,
  Efe.,Flp.,Kol.,1Tes.,2Tes.,1Tim.,2Tim.,Tit.,Flm.,Ibr.,Yak.,1Pet.,2Pet.,1Yoh.,2Yoh.,3Yoh.,Yud.,Wah.
  singkatan memungkinkan bahasa Indonesia
  Kej,Kel,Ima,Bil,Ula,Yos,Hak,Rut,1Sam,2Sam,1Raj,2Raj,1Taw,2Taw,Ezr,Neh,Est,Ayb,Maz,Ams,Pkh,Kid,Yes,Yer,Rat,Yeh,Dan,Hos,Yoe,
  Amo,Oba,Yun,Mik,Nah,Hab,Zef,Hag,Zak,Mal,Mat,Mar,Luk,Yoh,Kis,Rom,1Kor,2Kor,Gal,Efe,Flp,Kol,1Tes,2Tes,1Tim,2Tim,Tit,Flm,
  Ibr,Yak,1Pet,2Pet,1Yoh,2Yoh,3Yoh,Yud,Wah
  singkatam bahasa Inggris
  GEN,EXO,LEV,NUM,DEU,JOS,JDG,RUT,1SA,2SA,1KI,2KI,1CH,2CH,EZR,NEH,EST,JOB,PSA,PRO,ECC,SNG,ISA,JER,LAM,EZK,DAN,HOS,
  JOL,AMO,OBA,JON,MIC,NAM,HAB,ZEP,HAG,ZEC,MAL,MAT,MRK,LUK,JHN,ACT,ROM,1CO,2CO,GAL,EPH,PHP,COL,1TH,2TH,1TI,2TI,TIT,
  PHM,HEB,JAS,1PE,2PE,1JN,2JN,3JN,JUD,REV
  Uraian diatas untuk dokumen pribadi saya juga sendiri karena masih proses belajar
  bisa di embed pada program lain sebagai widget

*/
/* ********************************************* */
window.onload=function(){
  var alkitabDB;
  alkitabDB="data/alkitab-tb";
  var alkitabArray=[]; 
  function loadingKitab(alk){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", alk,false);
    xhr.onload = parse;
    xhr.send();
  };
  function parse() {
      alkitabArray=this.response;
      alkitabArray.trim();
      alkitabArray=alkitabArray.split('\n').join('\n');
      alkitabArray=alkitabArray.split('\n');
    
  };
  loadingKitab(alkitabDB);
  /*
    memparsing model masukan referensi ayat berbentuk :
     - kitab pasal:ayat1-ayat2
     - kitab pasal:ayat1ayat2
  */  
  function getAyatAlkitab(referensi){
    var referensi_diminta = referensi;
    var referensi_jawab="";
    var query=[0,1];
    var result=[];
    var tmp;
    for (var i=0; i< alkitabArray.length; i++){
      tmp = alkitabArray[i];
      result[0]=tmp.split('^')[0];
      result[1]=tmp.slice(tmp.indexOf('^')+1);
      if(referensi_diminta == result[query[0]]) {
        referensi_jawab = result[query[1]]
      };
    } 
    return referensi_jawab;
  };

  document.getElementById('inputAlkitab').focus();
  var ayatToDisplay=document.getElementById('ayatToDisplay');
  ayatToDisplay.textContent= "";
  var Kitab_Pasal_Ayat= "";
  var ls=location.search;
  var par="";
  var hasil =[];
  var result = "";
  par = decodeURIComponent(ls).replace(/\+/g, " ").replace('?','');
  if (par!=""){
    document.getElementById('inputAlkitab').value=par;
    proses(window.event);
    display();
  }
  function proses(e){
    e.preventDefault();
    result="";
    Kitab_Pasal_Ayat=document.getElementById('inputAlkitab').value;
    Kitab_Pasal_Ayat = PraParser(Kitab_Pasal_Ayat);
    var kitab = Kitab_Pasal_Ayat.kitab,
        pasal = Kitab_Pasal_Ayat.pasal,
        ayat = Kitab_Pasal_Ayat.ayat;
    if (ayat.length>1){
      for(var i=0;i<ayat.length;i++){
        hasil[i]=toSemiOsis(kitab+" "+pasal+":"+ayat[i]+"")
      }
    }  
    else {
      hasil[0]=toSemiOsis(kitab+" "+pasal+":"+ayat[0]+"")
    }

    /* console untuk proses debuging */
    /************************/
    /*
    if (ayat.length>1){
      for(var i=0;i<ayat.length;i++){
        console.log(hasil[i]+" = "+getAyatAlkitab(hasil[i]))
      }
    }  
    else{
      console.log(hasil[0]+" = "+getAyatAlkitab(hasil[0]))
    }
    */
    /************************/
    if(Kitab_Pasal_Ayat=="")ayatToDisplay.style.display='none';
  };//proses
  
  document.getElementById('inputAlkitab').addEventListener("keyup",proses);
  function display(){
    ayatToDisplay.style.display='block';
    if(hasil.length>1){
      for(var i=0;i<hasil.length;i++){
        result +=getAyatAlkitab(hasil[i]);
      }
      ayatToDisplay.textContent=result;
    }  
    else{
      result= getAyatAlkitab(hasil[0]);
      ayatToDisplay.textContent=result;
    }
  };
  function clear(){
    for(var i=0;i<hasil.length;i++){
      hasil[i]="";
    };
    document.getElementById('inputAlkitab').value = "";
    document.getElementById('inputAlkitab').focus();
    ayatToDisplay.textContent=result=""
  };
  document.getElementById("clear").addEventListener("click",function(e){
    clear()
  });
  
  document.addEventListener("keydown",function(e){
    if(13==e.keyCode||!(e.ctrlKey||e.metaKey))
      switch(e.keyCode){
        case 13:display();break;//[enter]
        case 27:clear();break;  //[Esc]
      }
  });//keyboard detect
  
  function mover(obj){
    return document.getElementById('inputAlkitab').value = obj.textContent, proses(window.event),display()
  };
  
  function m_over(id){
    document.getElementById(id).addEventListener("mouseover",function(){
      return document.getElementById('inputAlkitab').value = (this).textContent, proses(window.event),display()
    });
  };
  
  function m_out (id){
    document.getElementById(id).addEventListener("mouseout",function(){
      return clear()
    });
  };

  /* ***************************************** */
  /*  berguna untuk referensi dalam tulisan    */
  document.getElementById("mover").addEventListener("mouseover",function(){
    return document.getElementById('inputAlkitab').value = (this).textContent, proses(window.event),display()
  });
  document.getElementById("mover").addEventListener("mouseout",function(){
    return clear()
  });
  /* list for mouseover/mouseout otomatis */
  (function(){
    m_over("Mat. 3:12"); m_out ("Mat. 3:12");
    m_over("Tit. 1:2");  m_out ("Tit. 1:2");
    /*tambahkan list disini "id" bisa apa saja */
    /*  m_over("id0");  m_out ("id0"); */
    /*  m_over("id1");  m_out ("id1"); */
    /*          ----                   */
    /*          ----                   */
    /*          ----                   */
    
  }
  )();//auto execute
  
  /* ***************************** */
  /*    background handling        */
  /*     agar ada variasi          */
  /* juga untuk menggelapkan layar */
  
  var body = document.body;
  var backgrounds =[
    "imgs/air-kehidupan-by-rumi-source_assets-a2_kompasiana_com.jpg",
    "imgs/alkitab_source_assets-a2_kompasiana_com.jpg"
   ]
  
  var current = parseInt(Math.random()*backgrounds.length)%backgrounds.length;
  //console.log(current);
  function nextBackground() {
    body.background = backgrounds[parseInt(Math.random()*backgrounds.length)%backgrounds.length];
    body.background.repeat='no-repeat';
    body.background.size = 'cover';
    setTimeout(nextBackground, 10000);
  }
  setTimeout(nextBackground, 10000);
  body.background = backgrounds[current];
  body.background.repeat='no-repeat';
  body.background.size = 'cover';
};//window.onload
