/*************************************/
  /*     Dirk L. Nicolaas              */
  /*    Masih dalam tahap proses       */ 
  /*  belajar dari yang sederhana      */
  /*   Sawangan - Minahasa Utara       */
  /*  Sulawesi Utara - Indonesia       */
  /*      15 November 2018             */
  /*************************************/
      
  var BCV = {
    "Gen":[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26],
    "Exod":[22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38],
    "Lev":[17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34],
    "Num":[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13],
    "Deut":[46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12],
    "Josh":[18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33],
    "Judg":[36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25],
    "Ruth":[22,23,18,22],
    "1Sam":[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13],
    "2Sam":[27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25],
    "1Kgs":[53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53],
    "2Kgs":[18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30],
    "1Chr":[54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30],
    "2Chr":[17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23],
    "Ezra":[11,70,13,24,17,22,28,36,15,44],
    "Neh":[11,20,32,23,19,19,73,18,38,39,36,47,31],
    "Esth":[22,23,15,17,14,14,10,17,32,3],
    "Job":[22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17],
    "Ps":[6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6],
    "Prov":[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31],
    "Eccl":[18,26,22,16,20,12,29,17,18,20,10,14],
    "Song":[17,17,11,16,16,13,13,14],
    "Isa":[31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24],
    "Jer":[19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34],
    "Lam":[22,22,66,22,22],
    "Ezek":[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35],
    "Dan":[21,49,30,37,31,28,28,27,27,21,45,13],
    "Hos":[11,23,5,19,15,11,16,14,17,15,12,14,16,9],
    "Joel":[20,32,21],
    "Amos":[15,16,15,13,27,14,17,14,15],
    "Obad":[21],
    "Jonah":[17,10,10,11],
    "Mic":[16,13,12,13,15,16,20],
    "Nah":[15,13,19],
    "Hab":[17,20,19],
    "Zeph":[18,15,20],
    "Hag":[15,23],
    "Zech":[21,13,10,14,11,15,14,23,17,12,17,14,9,21],
    "Mal":[14,17,18,6],
  
    "Matt":[25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20],
    "Mark":[45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20],
    "Luke":[80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53],
    "John":[51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25],
    "Acts":[26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31],
    "Rom":[32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27],
    "1Cor":[31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24],
    "2Cor":[24,17,18,18,21,18,16,24,15,18,33,21,14],
    "Gal":[24,21,29,31,26,18],
    "Eph":[23,22,21,32,33,24],
    "Phil":[30,30,21,23],
    "Col":[29,23,25,18],
    "1Thess":[10,20,13,18,28],
    "2Thess":[12,17,18],
    "1Tim":[20,15,16,16,25,21],
    "2Tim":[18,26,17,22],
    "Titus":[16,15,15],
    "Phlm":[25],
    "Heb":[14,18,19,16,14,20,28,13,28,39,40,29,25],
    "Jas":[27,26,18,17,20],
    "1Pet":[25,25,22,19,14],
    "2Pet":[21,22,18],
    "1John":[10,29,24,21,21],
    "2John":[13],
    "3John":[14],
    "Jude":[25],
    "Rev":[20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,20]
  };
var normBookName = {
  "EN" : {"Gen":"Genesis","Exod":"Exodus","Lev":"Leviticus","Num":"Numbers","Deut":"Deuteronomy","Josh":"Joshua","Judg":"Judges","Ruth":"Ruth","1Sam":"1 Samuel","2Sam":"2 Samuel","1Kgs":"1 Kings","2Kgs":"2 Kings","1Chr":"1 Chronicles","2Chr":"2 Chronicles","Ezra":"Ezra","Neh":"Nehemiah","Esth":"Esther","Job":"Job","Ps":"Psalm","Prov":"Proverbs","Eccl":"Ecclesiastes","Song":"Song of Solomon","Isa":"Isaiah","Jer":"Jeremiah","Lam":"Lamentations","Ezek":"Ezekiel","Dan":"Daniel","Hos":"Hosea","Joel":"Joel","Amos":"Amos","Obad":"Obadiah","Jonah":"Jonah","Mic":"Micah","Nah":"Nahum","Hab":"Habakkuk","Zeph":"Zephaniah","Hag":"Haggai","Zech":"Zechariah","Mal":"Malachi","Matt":"Matthew","Mark":"Mark","Luke":"Luke","John":"John","Acts":"Acts","Rom":"Romans","1Cor":"1 Corinthians","2Cor":"2 Corinthians","Gal":"Galatians","Eph":"Ephesians","Phil":"Philippians","Col":"Colossians","1Thess":"1 Thessalonians","2Thess":"2 Thessalonians","1Tim":"1 Timothy","2Tim":"2 Timothy","Titus":"Titus","Phlm":"Philemon","Heb":"Hebrews","Jas":"James","1Pet":"1 Peter","2Pet":"2 Peter","1John":"1 John","2John":"2 John","3John":"3 John","Jude":"Jude","Rev":"Revelation"},
  "ID" : {"Gen":"Kejadian","Exod":"Keluaran","Lev":"Imamat","Num":"Bilangan","Deut":"Ulangan","Josh":"Yosua","Judg":"Hakim-hakim","Ruth":"Rut","1Sam":"1 Samuel","2Sam":"2 Samuel","1Kgs":"1 Raja-raja","2Kgs":"2 Raja-raja","1Chr":"1 Tawarikh","2Chr":"2 Tawarikh","Ezra":"Ezra","Neh":"Nehemia","Esth":"Ester","Job":"Ayub","Ps":"Mazmur","Prov":"Amsal","Eccl":"Pengkhotbah","Song":"Kidung Agung","Isa":"Yesaya","Jer":"Yeremia","Lam":"Ratapan","Ezek":"Yehezkiel","Dan":"Daniel","Hos":"Hosea","Joel":"Yoel","Amos":"Amos","Obad":"Obaja","Jonah":"Yunus","Mic":"Mikha","Nah":"Nahum","Hab":"Habakuk","Zeph":"Zefanya","Hag":"Hagai","Zech":"Zakharia","Mal":"Maleakhi","Matt":"Matius","Mark":"Markus","Luke":"Lukas","John":"Yohanes","Acts":"Kisah Para Rasul","Rom":"Roma","1Cor":"1 Korintus","2Cor":"2 Korintus","Gal":"Galatia","Eph":"Efesus","Phil":"Filipi","Col":"Kolose","1Thess":"1 Tesalonika","2Thess":"2 Tesalonika","1Tim":"1 Timotius","2Tim":"2 Timotius","Titus":"Titus","Phlm":"Filemon","Heb":"Ibrani","Jas":"Yakobus","1Pet":"1 Petrus","2Pet":"2 Petrus","1John":"1 Yohanes","2John":"2 Yohanes","3John":"3 Yohanes","Jude":"Yudas","Rev":"Wahyu"}
}
var FilterKitab = [
  [/^G[en]\D*/i,      "Gen"],[/^K[e]?j\D*/i,      "Gen"],       //Kej.
  [/^Ex\D*/i,      "Exod"], [/^K[e]?l\D*/i,      "Exod"],       //Kel.
  [/^L[ev]\D*/i,      "Lev"],[/^I[ma]\D*/i,      "Lev"],        //Ima.
  [/^Nu\D*/i,      "Num"],[/^B[il]\D*/i,      "Num"],           //Bil.
  [/^D[eu]\D*/i,      "Deut"],[/^U[la]\D*/i,      "Deut"],      //Ula.
  [/^J[o]s\D*/i,      "Josh"],[/^Y[o]s\D*/i,      "Josh"],      //Yos.
  [/^Ys\D*/i,      "Josh"],                                     //Yos.
  [/^Judg\D*/i,      "Judg"],[/^Hk\D*/i,      "Judg"],          //Hak.
  [/^Hak\D*/i,      "Judg"],                                    //Hak.
  [/^R[ut]\D*/i,      "Ruth"],                                  //Rut.
  [/^1\s*S[am]\D*/i,    "1Sam"],                                //1Sam.
  [/^2\s*S[am]\D*/i,    "2Sam"],                                //2Sam.
  [/^1\s*Kg\D*/i,  "1Kgs"],[/^1\s*R\D*/i,  "1Kgs"],             //1Raj.
  [/^2\s*Kg\D*/i,  "2Kgs"],[/^2\s*R\D*/i,  "2Kgs"],             //2Raj.
  [/^1\s*C[hr]\D*/i,  "1Chr"],[/^1\s*T[aw]\D*/i,  "1Chr"],      //1Taw.
  [/^2\s*C[hr]\D*/i,  "2Chr"],[/^2\s*T[aw]\D*/i,  "2Chr"],      //2Taw.
  [/^E[z]?r\D*/i,      "Ezra"],                                 //Ezr.
  [/^N[eh]\D*/i,      "Neh"],                                   //Neh.
  [/^E?st\D*/i,      "Esth"],                                   //Est.
  [/^J[o]?b\D*/i,      "Job"],[/^Ay[u]?b\D*/i,      "Job"],     //Ayb.
  [/^P[s]\D*/i,      "Ps"],[/^Ma?z\D*/i,      "Ps"],            //Maz.
  [/^P[r]?o\D*/i,      "Prov"],[/^A[m]?s\D*/i,      "Prov"],    //Ams.
  [/^E[cc]\D*/i,      "Eccl"],[/^Pkh\D*/i,      "Eccl"],        //Pkh.
  [/^Pen\D*/i,      "Eccl"],                                    //Pkh.
  [/^S[o]n\D*/i,      "Song"],[/^Kid\D*/i,      "Song"],        //Kid.
  [/^I[s?a]\D*/i,      "Isa"],[/^Yes\D*/i,      "Isa"],         //Yes.
  [/^J[er]\D*/i,      "Jer"],[/^Ye[r?]\D*/i,      "Jer"],       //Yer.
  [/^L[am]\D*/i,      "Lam"],[/^R[a]t\D*/i,      "Lam"],        //Rat.
  [/^E[zek]\D*/i,      "Ezek"],[/^Y[ehz]\D*/i,      "Ezek"],    //Yeh.
  [/^D[a]?n\D*/i,      "Dan"],                                  //Dan.
  [/^H[os]\D*/i,      "Hos"],                                   //Hos.
  [/^Joe\D*/i,      "Joel"],[/^Yl\D*/i,      "Joel"],           //Yoe.
  [/^Yoe\D*/i,      "Joel"],                                    //Yoe.
  [/^A[m?o]\D*/i,      "Amos"],                                 //Amo.
  [/^O[ba]\D*/i,      "Obad"],                                  //Oba.
  [/^Jo?[n]a\D*/i,      "Jonah"],[/^Yu?[n]\D*/i,      "Jonah"], //Yun.
  [/^Mi\D*/i,      "Mic"],                                      //Mik.
  [/^Nah?\D*/i,      "Nah"],                                    //Nah.
  [/^Ha?[b]\D*/i,      "Hab"],                                  //Hab.
  [/^Ze[p]\D*/i,      "Zeph"],[/^Ze[f]\D*/i,      "Zeph"],      //Zef.
  [/^H?a[g]\D*/i,      "Hag"],                                  //Hag.
  [/^Z[e]?c\D*/i,      "Zech"],[/^Z[a]?k\D*/i,      "Zech"],    //Zak.
  [/^Ma?l\D*/i,      "Mal"],                                    //Mal.
  [/^Ma?t?t\D*/i,    "Matt"],                                   //Mat.
  [/^Ma?[rk]\D*/i,  "Mark"],                                    //Mar.
  [/^L[uk]\D*/i,      "Luke"],                                  //Luk.
  [/^Jo?[hn]\D*/i,  "John"],[/^Yo?[h]\D*/i,  "John"],           //Yoh.
  [/^Act\D*/i,      "Acts"],[/^Kis*/i,      "Acts"],            //Kis.
  [/^Ras?/i,      "Acts"],                                      //Kis.
  [/^R[om]\D*/i,    "Rom"],                                     //Rom.
  [/^1\s*C\D*/i,    "1Cor"],[/^1\s*Kor\D*/i,    "1Cor"],        //1Kor.
  [/^2\s*C\D*/i,    "2Cor"], [/^2\s*Kor\D*/i,    "2Cor"],       //2Kor.
  [/^Gal\D*/i,      "Gal"],                                     //Gal.
  [/^Eph\D*/i,      "Eph"],[/^Ef[ef]\D*/i,      "Eph"],         //Efe.
  [/^Phlp\D*/i,      "Phil"], [/^P[h]il?i\D*/i,      "Phil"],   //Flp.
  [/^Flp\D*/i,      "Phil"],[/^Fil[i]\D*/i,      "Phil"],       //Flp.
  [/^C\D*/i,      "Col"],[/^Kol\D*/i,      "Col"],              //Kol.
  [/^1\s*Th\D*/i,    "1Thess"],[/^1\s*Te\D*/i,    "1Thess"],    //1Tes.
  [/^2\s*Th\D*/i,    "2Thess"],[/^2\s*Te\D*/i,    "2Thess"],    //2Tes.
  [/^1\s*T[im]\D*/i,  "1Tim"],                                  //1Tim.
  [/^2\s*T[im]\D*/i,  "2Tim"],                                  //2Tim.
  [/^Tit\D*/i,      "Titus"],                                   //Tit.
  [/^Ph\w*m\D*/i,    "Phlm"],[/^Phil?e\D*/i,    "Phlm"],        //Flm.  
  [/^Fl\w*m\D*/i,    "Phlm"],[/^Fi[l]\w*e\D*/i,    "Phlm"],     //Flm.
  [/^Heb\D*/i,      "Heb"],[/^Ibr\D*/i,      "Heb"],            //Ibr.
  [/^J[ams]\D*/i,    "Jas"],[/^Y?ak\D*/i,    "Jas"],            //Yak.
  [/^1\s*Pet\D*/i,    "1Pet"],[/^1\s*Ptr\D*/i,    "1Pet"],      //1Pet.
  [/^2\s*Pet\D*/i,    "2Pet"],[/^2\s*Ptr\D*/i,    "2Pet"],      //2Pet.
  [/^1\s*J\D*/i,    "1John"],[/^1\s*Yo?[h]\D*/i,    "1John"],   //1Yoh.
  [/^2\s*J\D*/i,    "2John"],[/^2\s*Yo?[h]\D*/i,    "2John"],   //2Yoh.
  [/^3\s*J\D*/i,    "3John"],[/^3\s*Yo?[h]\D*/i,    "3John"],   //3Yoh.
  [/^Jud\D*/i,      "Jude"],[/^Yu\D*/i,      "Jude"],           //Yud.
  [/^R[ev]\D*/i,    "Rev"],[/^W[ah]\D*/i,    "Rev"],            //Wah.
  [/^Why\D*/i,    "Rev"]                                        //Wah.
];

function toSemiOsis(ref){
  var parts = ref.replace(/^\s+|\s+$/g, '').replace(/\u2013|\u2014/g, '-').split(/\s*-+\s*/);
  //"[regEx for deteksiMasukanNamaKitab, targetOsis]"
  var formatOsis;
  var kitabAwal,
      pasalAwal,
      ayatAwal,
      kitabAkhir,
      pasalAkhir,
      ayatAkhir;
  
  //                                                         e[0]                         e[1]
  Array.prototype.forEach.call(FilterKitab,function(e){//"[regEx for deteksiMasukanNamaKitab, targetOsis]"
    if(e[0].test(parts[0])){
      kitabAwal = e[1];
      parts[0] = parts[0].replace(e[0], '');
      var pasal_ayat = parts[0].match(/(\d+)(?:\D+(\d+)(?:\s*,\s*(\d+))?)?/);
      if(pasal_ayat){
        pasalAwal = parseInt(pasal_ayat[1], 10);
        if(pasal_ayat[2])
          ayatAwal = parseInt(pasal_ayat[2], 10);
        if(pasal_ayat[3]){
          kitabAkhir = kitabAwal;
          pasalAkhir = pasalAwal;
          ayatAkhir = parseInt(pasal_ayat[3], 10);
          if(ayatAkhir != ayatAwal+1)
            ayatAkhir = null;
        }
      }
      
      return false;
    }
    return true;
  });
  if(!kitabAwal)
    return '';
  
  formatOsis = kitabAwal;
  
  if(pasalAwal) formatOsis += '.' + pasalAwal;
  
  if(ayatAwal) formatOsis += '.' + ayatAwal;
  
  if(parts[1]){
     Array.prototype.forEach.call(FilterKitab,function(e){
      if(e[0].test(parts[1])){
        kitabAkhir = e[1];
        parts[1] = parts[1].replace(e[0], '');
        return false;
      }
      return true;
    });
    var pasal_ayat = parts[1].match(/(\d+)(?:\D+(\d+))?/);
    if(pasal_ayat){
      if(!pasal_ayat[2] && !kitabAkhir){
        if(ayatAwal){
          pasalAkhir = pasalAwal;
          ayatAkhir = parseInt(pasal_ayat[1], 10);
        }
        else if(pasalAwal){
          pasalAkhir = parseInt(pasal_ayat[1], 10);
        }
      }
      else {
        pasalAkhir = parseInt(pasal_ayat[1], 10);
        if(pasal_ayat[2])
          ayatAkhir = parseInt(pasal_ayat[2], 10);
      }
    }
    
    if(!kitabAkhir)
      kitabAkhir = kitabAwal;
  }
  if(kitabAkhir){
    formatOsis += '-' + kitabAkhir;
    if(pasalAkhir)
      formatOsis += '.' + pasalAkhir;
    if(ayatAkhir)
      formatOsis += '.' + ayatAkhir;
  }
  return formatOsis;
};



//KITAB Pasal:Ayat k_p_a
var PraParser = function (k_p_a) {
    var Alkitab = {
        kitab: null,
        pasal: null,
        ayat: []
    };
    var k_p_a = k_p_a.replace(/^\s+|\s+$|(\s)+/g, "$1");
    var k_p_a = k_p_a.split(" ");
  if(k_p_a.length>1){
    //console.log(k_p_a.trim()) 
    // k_p_a = "kitab pasal:ayat1[[-],]ayat2"
    // ambil sebelah kanan dari hitungan 0 sampai batas spasi didapat "kitab"
    //Alkitab.kitab = k_p_a.substring(0, k_p_a.lastIndexOf(" "));//"{kitab} pasal:ayat1[[-],]ayat2"
    Alkitab.kitab = k_p_a[0];//"{kitab} pasal:ayat1[[-],]ayat2"
    //Alkitab.kitab =  {kitab} 
    //
    //proses berikut ambil sebelah kanan dihitung mulai dari spasi + 1 sampai akhir didapat "pasal:ayat1[[-],]ayat2"
    //var k_p_a = k_p_a.substring(k_p_a.lastIndexOf(" ") + 1);////k_p_a = "pasal:ayat1[[-],]ayat2"
    var kpa = k_p_a[1];////k_p_a = "pasal:ayat1[[-],]ayat2"
    //
    var KPA = kpa.split(":");  //k_p_a dipisahkan pada batas tanda ":"  menjadi "pasal" dan "ayat1[[-],]ayat2"
    //KPA bebentuk array KPA[0]="pasal" dan KPA[1]= "ayat1[[-],]ayat2"
    
    switch (KPA.length) { 
        
        case 2:
           
            Alkitab.pasal = KPA[0];
            var osisName = toSemiOsis(Alkitab.kitab)
            var pasalMin = 1;
            var pasalMax = BCV[osisName].length
            
            var _ayat = KPA[1].split(/\-|\,/); //KPA[1] dipisahkan lagi dengan tanda "-" atau tanda "," 
            var ayat1, ayat2;
            var ayatMin= 1;
            var ayatMax = BCV[osisName][Alkitab.pasal-1]
            //console.log(ayatMax)

            if(parseInt(_ayat[0])<ayatMin){
              ayat1 = ayatMin
            }
            else{
              ayat1 = parseInt(_ayat[0])
            }
            
            if(parseInt(_ayat[0])>ayatMax){
              ayat1=ayatMax
            }
            if(parseInt(_ayat[1])<ayatMin){
              ayat2=ayatMin
            }
            else{ayat2=parseInt(_ayat[1])}
            if(parseInt(_ayat[1])>ayatMax){
              ayat2=ayatMax
            }
            console.log("ayat1 ",ayat1)
            console.log("ayat2 ",ayat2)
            if(ayat1>ayat2){
              var temp=ayat1;
              ayat1 = ayat2
              ayat2 = temp
            }
            
            // e.g. 1-10
            if (KPA[1].indexOf("-") !== -1) {
              for (var i = ayat1; i <= ayat2; ++i) {
                Alkitab.ayat.push(i.toString());
              }
            } 
            else {
              if(_ayat>BCV[osisName][Alkitab.pasal-1])_ayat=BCV[osisName][Alkitab.pasal-1]
               Alkitab.ayat = _ayat;
            }
            
            break;
        case 1:
            Alkitab.pasal = KPA[0];
            var osisName = toSemiOsis(Alkitab.kitab)
            var ayatAwal = 1;
            var ayatAkhir = BCV[osisName][Alkitab.pasal-1]
            for (var i = ayatAwal; i <= ayatAkhir; ++i) {
                Alkitab.ayat.push(i.toString());
            }
            
            break;
            
        default:
            return null;
    }
    
  }

  else if(k_p_a.length===1){
    var dummy = " 1";
    alkitabdummy="";
    Alkitab.kitab = k_p_a;
    alkitabdummy = Alkitab.kitab;
    alkitabdummy += dummy
    var osisName = toSemiOsis(alkitabdummy)
    osisName = osisName.replace(".1","")
    var pasalLength = BCV[osisName].length;
    var ayatLength;
    for(var pas = 0; pas<pasalLength; pas++){
      Alkitab.pasal = pas+1;
      ayatLength = BCV[osisName][Alkitab.pasal-1]
      for(var ayt = 0; ayt<ayatLength; ayt++){
          Alkitab.ayat.push((ayt+1).toString())
        }
    }
  }
  return Alkitab;
};
