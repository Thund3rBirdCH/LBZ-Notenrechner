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
  
  function notenschnitt() {
    let schnitt = 0
    notenGewichtung.forEach((value, key) =>{
      let field = document.getElementById(key)
      let note = field.value
      schnitt += note * value
      }); 
      return schnitt
  }
  
  function round2(val) {
    return Math.round(100 * val + 0.5) / 100;
  }
  
  function calculate(){
    let schnitt = notenschnitt()
    schnitt = round2(schnitt);
    document.getElementById("gesamtnotenschnitt").value=schnitt
  }
  
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
  
  function reverseCalculate() {
    let sollSchnitt = document.getElementById("gesamtnotenschnitt").value;
    let schnittLeer = notenschnitt();
    let delta = sollSchnitt - schnittLeer;
    let key = findEmptyFieldKey();
    let sollNote = delta / notenGewichtung.get(key);
    let field = document.getElementById(key);
    field.value = round2(sollNote);
  }
  
  