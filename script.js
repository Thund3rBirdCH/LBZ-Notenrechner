/** ############ Logik Rechner ############ */

/** Tabelle für Notenberechnung mit der jeweiligen Gewichtung */
const notenGewichtung = new Map([
    ['vornoteMathematik', 1.0/15],
    ['geometrie', 1.0/30],
    ['deutsch', 1.0/10],
    ['französisch', 1.0/10],
    ['englisch', 1.0/10],
    ['naturtechnik', 1.0/10],
    ['prüfungsnoteMathematik', 1.0/4],
    ['deutschAufsatz', 1.0/8],
    ['deutschTextverständnis', 1.0/8]
  ]);

/** Notenschnitt berechnen = Notenschnitt */

  function notenschnitt() {                       /** Name der Funktion */
    let schnitt = 0                               /** Schnitt auf 0 setzen */
    notenGewichtung.forEach((value, key) =>{      /** Notengewichtung anhand der Map oben */
      let field = document.getElementById(key)    /** Variable "field" für jedes Eingabefeld anhand des Keys */
      let note = field.value                      /** Variable "note" für den eingegeben Wert pro Feld */
      schnitt += note * value                     /** Berechnung des schnitts anhand "Note" x Wert in der Map */
      }); 
      return schnitt                              /** Schnitt Wert ausgabe */
  }

  /** Runden auf zwei stellen */
  
  function round2(val) {
    return Math.round(100 * val + 0.5) / 100;
  }

/** Berechnen */
  
  function calculate(){
    let schnitt = notenschnitt()
    schnitt = round2(schnitt);
    document.getElementById("gesamtnotenschnitt").value=schnitt
    ctrlMsg()
  }
  
/** Funktion um leeres Fled zu finden für Reverse */

  function findEmptyFieldKey() {
    let result = null;
    notenGewichtung.forEach((value, key) =>{
      let field = document.getElementById(key);
      if (field.value.length == 0) {
        result = key;
      }
    })
    return result;
  }
  
/** Reverse Rechnen wenn ein Feld leer bleibt */

  function reverseCalculate() {
    let sollSchnitt = document.getElementById("gesamtnotenschnitt").value;
    let schnittLeer = notenschnitt();
    let delta = sollSchnitt - schnittLeer;
    let key = findEmptyFieldKey();
    let sollNote = delta / notenGewichtung.get(key);
    let field = document.getElementById(key);
    field.value = round2(sollNote);
  }

/** Radio Buttons Wert in Gesamtnotenschnitt */

function radioButtonSchnitt() {
  document.getElementsByName("radioButtonClass")
    .forEach(radio => {
      if (radio.checked) {
        console.log(radio.value)
      }
    })
}


/** Steuerung Modal Text */

function ctrlMsg(){
  let checkBox = document.getElementById("windowhide");
  let schnitt = document.getElementById("gesamtnotenschnitt").value
  
  if (checkBox.checked == false){
    if (schnitt >= 4.75){
      dialogGymnasiumtext = document.getElementById("gymnasiumtext");{
      dialogGymnasiumtext.showModal();}
    }
    if (schnitt >= 4.5){
      dialogHandelsschuletext = document.getElementById("handelsschuletext");{
        dialogHandelsschuletext.showModal();}
    }
    else{
      dialoglehretext = document.getElementById("lehretext");{
      dialoglehretext.showModal();}
    }
  }

}

//** Reset Button / Alle Felder leeren */

  function reset() {
    notenGewichtung.forEach((value, key) =>{
    document.getElementById(key).value = '';
    })
    document.getElementById("gesamtnotenschnitt").value = '';
  }

/** ############ Dialoge und Texte ############ */

/** Steuerung Gymnasiumtext */

document.getElementById("gymnasiumtext").onclick = function(){
  dialogGymnasiumtext.close();
}

/** Steuerung Handelschuletext */

document.getElementById("handelsschuletext").onclick = function(){
  dialogHandelsschuletext.close();
}

/** Steuerung Lehretext */

document.getElementById("lehretext").onclick = function(){
  dialoglehretext.close();
}