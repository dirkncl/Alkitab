var OsisToGen = {
  "Gen":   ["Kejadian",         "Genesis"],
  "Exod":  ["Keluaran",         "Exodus"],
  "Lev":   ["Imamat",           "Leviticus"],
  "Num":   ["Bilangan",         "Numbers"],
  "Deut":  ["Ulangan",          "Deuteronomy"],
  "Josh":  ["Yoshua",           "Joshua"],
  "Judg":  ["Hakim-hakim",      "Judges"],
  "Ruth":  ["Rut",              "Ruth"],
  "1Sam":  ["1Samuel",          "1Samuel"],
  "2Sam":  ["2Samuel",          "2Samuel"],
  "1Kgs":  ["1Raja-raja",       "1Kings"],
  "2Kgs":  ["2Raja-raja",       "2Kings"],
  "1Chr":  ["1Tawarikh",        "1Chronicles"],
  "2Chr":  ["2Tawarikh",        "2Chronicles"],
  "Ezra":  ["Ezra",             "Ezra"],
  "Neh":   ["Nehemia",          "Nehemiah"],
  "Esth":  ["Ester",            "Esther"],
  "Job":   ["Ayub",             "Job"],
  "Ps":    ["Mazmur",           "Psalms"],
  "Prov":  ["Amsal",            "Proverbs"],
  "Eccl":  ["Pengkothbah",      "Ecclesiastes"],
  "Song":  ["Kidung",           "Song"],
  "Isa":   ["Yesaya",           "Isaiah"],
  "Jer":   ["Yeremia",          "Jeremiah"],
  "Lam":   ["Ratapan",          "Lamentations"],
  "Ezek":  ["Yehezkiel",        "Ezekiel"],
  "Dan":   ["Daniel",           "Daniel"],
  "Hos":   ["Hosea",            "Hosea"],
  "Joel":  ["Yoel",             "Joel"],
  "Amos":  ["Amos",             "Amos"],
  "Obad":  ["Obaja",            "Obadiah"],
  "Jonah": ["Junus",            "Jonah"],
  "Mic":   ["Mikha",            "Micah"],
  "Nah":   ["Nahum",            "Nahum"],
  "Hab":   ["Habakuk",          "Habakkuk"],
  "Zeph":  ["Zefanya",          "Zephaniah"],
  "Hag":   ["Hagai",            "Haggai"],
  "Zech":  ["Zakaria",          "Zechariah"],
  "Mal":   ["Maleakhi",         "Malachi"],
  "Matt":  ["Matius",           "Matthew"],
  "Mark":  ["Markus",           "Mark"],
  "Luke":  ["Lukas",            "Luke"],
  "John":  ["Yohanes",          "John"],
  "Acts":  ["Kisah",            "Acts"],
  "Rom":   ["Roma",             "Romans"],
  "1Cor":  ["1Korintus",        "1Corinthians"],
  "2Cor":  ["2Korintus",        "2Corinthians"],
  "Gal":   ["Galatia",          "Galatians"],
  "Eph":   ["Efesus",           "Ephesians"],
  "Phil":  ["Filipi",           "Philippians"],
  "Col":   ["Kolose",           "Colossians"],
  "1Thess":["1Tessalonika",     "1Thessalonians"],
  "2Thess":["2Tessalonika",     "2Thessalonians"],
  "1Tim":  ["1Timotius",        "1Timothy"],
  "2Tim":  ["2Timotius",        "2Timothy"],
  "Titus": ["Titus",            "Titus"],
  "Phlm":  ["Filemon",          "Philemon"],
  "Heb":   ["Ibrani",           "Hebrews"],
  "Jas":   ["Yakobus",          "James"],
  "1Pet":  ["1Petrus",          "1Peter"],
  "2Pet":  ["2Petrus",          "2Peter"],
  "1John": ["1Yohanes",         "1John"],
  "2John": ["2Yohanes",         "2John"],
  "3John": ["3Yohanes",         "3John"],
  "Jude":  ["Yudas",            "Jude"],
  "Rev":   ["Wahyu",            "Revelation"]
};

function osisToName(osisString, bookVersion){
  var lang;
  var id = 0, eng = 1;
  bookVersion = bookVersion||"TB"
  bookVersion = bookVersion.toUpperCase();
  switch(bookVersion){
    case "TB":
    case "TB-LAI":lang = id;break;
    case "KJV":
    case "AV":
    case "AKJV":
    case "A-KJV":lang = eng;break;
    default:lang = id;break;
  }
  var book,chapter,verse;
  var osis = osisString.split(".");
  verse   = osis.pop();
  chapter = osis.pop();
  book    = osis.pop();
  book = OsisToGen[book][lang];
  return book + " " + chapter +":"+ verse +"."+ bookVersion
}    

function search(wordToSearch, BookVersion){
  var bookURL;
  switch(BookVersion){
   case "KJV":
   case "AV":    bookURL = '../data/bible-kjv';break;
   case "AKJV":
   case "A-KJV": bookURL = '../data/bible-akjv';break;
   case "TB":
   case "TB-LAI":
   default:      bookURL = '../data/alkitab-tb';break;
  }
  var reader = new XMLHttpRequest();
  reader.open('get', bookURL, true);
  reader.onreadystatechange = function () {
    if (reader.readyState === 4 && reader.status === 200||reader.status === 0) {
      display_Contents(wordToSearch, BookVersion, reader.responseText);
    }
  };
  reader.send();
}


function display_Contents(wordToFind, BookVersion, content) {
    var count;
    var wanted = wordToFind;
    content.trim();
    words = content.split('\n').join('\n');
    words = words.split('\n');
    
    var found = [];
    for(var i=0;i<words.length;i++){
      if(words[i].includes(wanted)){
        var verseRef = osisToName(words[i].split("^")[0], BookVersion)
        var verseContent = words[i].split("^")[1].replace(new RegExp(wanted,"g"),"<i style='font-weight:bold'>"+wanted+"</i>")
        var html = "<div><a target='_page' href='../index.html?"+verseRef+"'>"+verseRef+"</a><br><div>"+verseContent+"</div></div>"
        found.push(html)
      }
       
    }
    var search_result = document.getElementById("search_result");
    var counter = document.getElementById("counter");
    count = found.length;
    if(found.length){
      counter.style.display = ""
      search_result.style.display = ""
      counter.innerHTML = "<span> found: "+count+" items</span>"
      search_result.focus()
      search_result.innerHTML = found.join('<br>')
    }
    else{
      counter.style.display = ""
      counter.style.display = "none"
    }
}
var search_result_scrollbar = `
  #search_result::-webkit-scrollbar {
      height: 8px;
      width: 8px;
      /*background: #333330;*/
      background: rgba(36, 36, 28,1);
      border-radius: 8px;
  }
  
  #search_result::-webkit-scrollbar-thumb {
      background: rgba(136, 136, 128,1);
      border-radius: 4px;
  }
  
  #search_result::-webkit-scrollbar-corner {
      /*background: #000000;*/
      background: rgba(0, 0, 0, 0.5);
  }
`;
(sty=document.createElement("style")).textContent=search_result_scrollbar,document.head.appendChild(sty)  
