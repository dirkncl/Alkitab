/*************************************/
/*     Dirk L. Nicolaas              */
/*    Masih dalam tahap proses       */ 
/*  belajar dari yang sederhana      */
/*   Sawangan - Minahasa Utara       */
/*  Sulawesi Utara - Indonesia       */
/*      15 November 2018             */
/*************************************/


 var FilterKitab = [                                            //standard singkatan
  [/^G[en]\D*/i,      "Gen"],[/^K[e]?j\D*/i,      "Gen"],       //Kej.
  [/^Ex\D*/i,      "Exod"], [/^K[e]?l\D*/i,      "Exod"],       //Kel.
  [/^L[ev]\D*/i,      "Lev"],[/^I[ma]\D*/i,      "Lev"],        //Ima.
  [/^Nu\D*/i,      "Num"],[/^Bi\D*/i,      "Num"],              //Bil.
  [/^D[eu]\D*/i,      "Deut"],[/^U[l]\w*a\D*/i,      "Deut"],   //Ula.
  [/^J[o]s\D*/i,      "Josh"],[/^Y[o]s\D*/i,      "Josh"],      //Yos.
  [/^Judg\D*/i,      "Judg"],[/^H?a[k]\D*/i,      "Judg"],      //Hak.
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
  [/^J[o]?b\D*/i,      "Job"],[/^Ayb\D*/i,      "Job"],         //Ayb.
  [/^P[s]\D*/i,      "Ps"],[/^Ma?z\D*/i,      "Ps"],            //Maz.
  [/^P[r]?o\D*/i,      "Prov"],[/^A[m]?s\D*/i,      "Prov"],    //Ams.
  [/^E[cc]\D*/i,      "Eccl"],[/^Pkh\D*/i,      "Eccl"],        //Pkh.
  [/^S[o]n\D*/i,      "Song"],[/^Kid\D*/i,      "Song"],        //Kid.
  [/^I[s?a]\D*/i,      "Isa"],[/^Ye[s]\D*/i,      "Isa"],       //Yes.
  [/^J[er]\D*/i,      "Jer"],[/^Ye[r?]\D*/i,      "Jer"],       //Yer.
  [/^L[am]\D*/i,      "Lam"],[/^R[at]\D*/i,      "Lam"],        //Rat.
  [/^E[zek]\D*/i,      "Ezek"],[/^Y[e?h]\D*/i,      "Ezek"],    //Yeh.
  [/^D[a]?n\D*/i,      "Dan"],                                  //Dan.
  [/^H[os]\D*/i,      "Hos"],                                   //Hos.
  [/^Joe\D*/i,      "Joel"],[/^Yoe\D*/i,      "Joel"],          //Yoe.
  [/^Am?o\D*/i,      "Amos"],                                   //Amo.
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
  [/^L\D*/i,      "Luke"],                                      //Luk.
  [/^Jo?[hn]\D*/i,  "John"],[/^Yo?[ha]\D*/i,  "John"],          //Yoh.
  [/^Act\D*/i,      "Acts"],[/^Kis*/i,      "Acts"],            //Kis.
  [/^R[om]\D*/i,    "Rom"],                                     //Rom.
  [/^1\s*C\D*/i,    "1Cor"],[/^1\s*Kor\D*/i,    "1Cor"],        //1Kor.
  [/^2\s*C\D*/i,    "2Cor"], [/^2\s*Kor\D*/i,    "2Cor"],       //2Kor.
  [/^Gal\D*/i,      "Gal"],                                     //Gal.
  [/^Eph\D*/i,      "Eph"],[/^Efe\D*/i,      "Eph"],            //Efe.
  [/^P[h]il\D*/i,      "Phil"],[/^Fl\D*/i,      "Phil"],        //Flp.
  [/^C\D*/i,      "Col"],[/^K[o]l\D*/i,      "Col"],            //Kol.
  [/^1\s*Th\D*/i,    "1Thess"],[/^1\s*Te\D*/i,    "1Thess"],    //1Tes.
  [/^2\s*Th\D*/i,    "2Thess"],[/^2\s*Te\D*/i,    "2Thess"],    //2Tes.
  [/^1\s*T[im]\D*/i,  "1Tim"],                                  //1Tim.
  [/^2\s*T[im]\D*/i,  "2Tim"],                                  //2Tim.
  [/^Tit\D*/i,      "Titus"],                                   //Tit.
  [/^Ph\w*m\D*/i,    "Phlm"],[/^F\w*m\D*/i,    "Phlm"],         //Flm.
  [/^Heb\D*/i,      "Heb"],[/^Ibr\D*/i,      "Heb"],            //Ibr.
  [/^J[mas]\D*/i,    "Jas"],[/^Y[ak]\D*/i,    "Jas"],           //Yak.
  [/^1\s*P\D*/i,    "1Pet"],                                    //1Pet.
  [/^2\s*P\D*/i,    "2Pet"],                                    //2Pet.
  [/^1\s*J\D*/i,    "1John"],[/^1\s*Y\D*/i,    "1John"],        //1Yoh.
  [/^2\s*J\D*/i,    "2John"],[/^2\s*Y\D*/i,    "2John"],        //2Yoh.
  [/^3\s*J\D*/i,    "3John"],[/^3\s*Y\D*/i,    "3John"],        //3Yoh.
  [/^Jud\D*/i,      "Jude"],[/^Yu\D*/i,      "Jude"],           //Yud.
  [/^R[ev]\D*/i,    "Rev"],[/^W[ah]\D*/i,    "Rev"]             //Wah.

];


//KITAB Pasal:Ayat k_p_a
var PraParser = function (k_p_a) {
    var Alkitab = {
        kitab: null,
        pasal: null,
        ayat: []
    };
      
    // k_p_a = "kitab pasal:ayat1[[-],]ayat2"
    // ambil sebelah kanan dari hitungan 0 sampai batas spasi didapat "kitab"
    Alkitab.kitab = k_p_a.substring(0, k_p_a.lastIndexOf(" "));//"{kitab} pasal:ayat1[[-],]ayat2"
    //Alkitab.kitab =  {kitab} 
    //
    //preoses berikut ambil sebelah kanan dihitung mulai dari spasi + 1 sampai akhir didapat "pasal:ayat1[[-],]ayat2"
    var k_p_a = k_p_a.substring(k_p_a.lastIndexOf(" ") + 1),////k_p_a = "pasal:ayat1[[-],]ayat2"
    KPA = k_p_a.split(":");  //k_p_a dipisahkan pada batas tanda ":"  menjadi "pasal" dan "ayat1[[-],]ayat2"
    //KPA bebentuk array KPA[0]="pasal" dan KPA[1]= "ayat1[[-],]ayat2"
    switch (KPA.length) { 
        
        case 2:
            Alkitab.pasal = KPA[0];
            var _ayat = KPA[1].split(/\-|\,/), //KPA[1] dipisahkan lagi dengan tanda "-" atau tanda "," 
              ayat1 = parseInt(_ayat[0]),
              ayat2 = parseInt(_ayat[1]);
              

            // e.g. 1-10
            if (KPA[1].indexOf("-") !== -1) {
              for (var i = ayat1; i <= ayat2; ++i) {
                Alkitab.ayat.push(i.toString());
              }
            } 
            else {
               Alkitab.ayat = _ayat;
            }
            break;
        case 1:
            Alkitab.pasal = KPA[0];
            Alkitab.ayat = "ALL";
            break;
        default:
            return null;
    }

    return Alkitab;
};

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
  if(pasalAwal)
    formatOsis += '.' + pasalAwal;
  if(ayatAwal)
    formatOsis += '.' + ayatAwal;
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
