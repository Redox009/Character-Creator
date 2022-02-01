const claseJSON = "dataLocal.json";

class AbilityStats {
    constructor (strength, dexterity, constitution, intelligence, wisdom, charisma, clase, raza){
        this.strength = strength
        this.dexterity = dexterity
        this.constitution = constitution
        this.intelligence = intelligence
        this.wisdom = wisdom
        this.charisma = charisma
        this.clase = clase
        this.raza = raza
        this.name1 =name1
    }
    showStats() { 
        console.log(this.strength, this.dexterity, this.constitution, this.intelligence, this.wisdom, this.charisma, this.clase, this.raza, this.name1);
    }
}




let botonName         = document.getElementById("bttn1");
botonName.onclick     = () => {
let name2 = document.getElementById("inputName").value;
$("#nameMain").replaceWith("Name: " + name2);
return name1 =name2}


function diceRoll(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
   }

function statGenerator () {
let rollSet1 = new Array ();
    rollSet1[0] = diceRoll(1, 6);
    rollSet1[1] = diceRoll(1, 6);
    rollSet1[2] = diceRoll(1, 6);
    rollSet1[3] = diceRoll(1, 6);
  
let set1Small = (Math.min(...rollSet1));

var stats = (rollSet1[0] + rollSet1[1] + rollSet1[2] + rollSet1[3] - set1Small);
return stats
}

document.getElementById("LanguageCommon").disabled  = true;
document.getElementById("LanguageElvish").disabled   = true;
document.getElementById("LanguageDwarvish").disabled = true;
document.getElementById("LanguageGiant").disabled  = true;
document.getElementById("LanguageGnomish").disabled  = true;
document.getElementById("LanguageInfernal").disabled  = true;
document.getElementById("LanguageHafling").disabled  = true;
document.getElementById("LanguageOrc").disabled  = true;
document.getElementById("LanguageCelestial").disabled  = true; 
document.getElementById("LanguageSylvan").disabled  = true; 
document.getElementById("LanguageGoblin").disabled  = true; 
document.getElementById("LanguagePrimordial").disabled  = true; 
document.getElementById("LanguageUndercommon").disabled  = true; 
document.getElementById("LanguageDeepSpeech").disabled  = true; 
document.getElementById("LanguageAbyssal").disabled  = true; 
document.getElementById("LanguageDraconic").disabled = true; 


document.getElementById("skillAcrobatics").disabled = true;
document.getElementById("skillAnimalHandling").disabled = true;
document.getElementById("skillAthletics").disabled = true;
document.getElementById("skillArcana").disabled = true;
document.getElementById("skillDeception").disabled = true;
document.getElementById("skillHistory").disabled = true;
document.getElementById("skillInsight").disabled = true;
document.getElementById("skillIntimidation").disabled = true;
document.getElementById("skillInvestigation").disabled = true;
document.getElementById("skillMedicine").disabled = true;
document.getElementById("skillNature").disabled = true;
document.getElementById("skillPerception").disabled = true;
document.getElementById("skillPerformance").disabled = true;
document.getElementById("skillPersuasion").disabled = true;
document.getElementById("skillReligion").disabled = true;
document.getElementById("skillSleightofHand").disabled = true;
document.getElementById("skillStealth").disabled = true;
document.getElementById("skillSurvival").disabled = true;

//        ELECCION DE STATS


let boton1         = document.getElementById("button1");
boton1.onclick     = () => {
    document.getElementById("e1").style.fontWeight = "900";
    let statFiller2 = document.createElement("div");
   statFiller2.innerHTML =
   `<p>Estos son Tus Stats: 15, 14, 13, 12, 10, 8 </p>`
   
   someplace1 = document.getElementById("statFiller2");
   someplace1.replaceWith(statFiller2);
    let standardStat0 = [15, 14, 13, 12, 10, 8];
    
    return stats = standardStat0
}



let boton2         = document.getElementById("button2");
boton2.onclick     = () => {
    document.getElementById("e2").style.fontWeight = "900";
    let standardStat1 = [];
    for (i = 0; i < 6; i++) {
      standardStat1[i] = statGenerator();
    }

    let standardStat2 = [];
    for (i = 0; i < 6; i++) {
      standardStat2[i] = statGenerator();
    }

   standardStat1.sort(function(a, b){return b-a});
   standardStat2.sort(function(a, b){return b-a});


   let statFiller0 = document.createElement("div");
   statFiller0.innerHTML =
   `<p>Ingrese sus Stats en orden de mayor a menor:</p>
   <br>
   <p>${standardStat1}</p>
   <button type="button" id="standardStat1" class="button">Elegir</button>
   <br>
   <p>${standardStat2}</p>
   <button type="button" id="standardStat2" class="button">Elegir</button>
   `
   ;
   someplace1 = document.getElementById("statFiller0");
   someplace1.replaceWith(statFiller0);

let ss1         = document.getElementById("standardStat1");
ss1.onclick     = () => {
    return stats = standardStat1
    
   }
let ss2         = document.getElementById("standardStat2");
    ss2.onclick     = () => {
    return stats = standardStat2
}

}

let boton3         = document.getElementById("button3");
boton3.onclick     = () => {
    document.getElementById("e3").style.fontWeight = "900";
    let statFiller = document.createElement("div");
    statFiller.innerHTML =
    `<p>Ingrese sus Stats:</p>
    <br>
    <input type="number" id="quantity1" name="quantity" min="1" max="20"></input>
    <input type="number" id="quantity2" name="quantity" min="1" max="20"></input>
    <input type="number" id="quantity3" name="quantity" min="1" max="20"></input>
    <input type="number" id="quantity4" name="quantity" min="1" max="20"></input>
    <input type="number" id="quantity5" name="quantity" min="1" max="20"></input>
    <input type="number" id="quantity6" name="quantity" min="1" max="20"></input>
    <br>
    <br>
    <button type="button" id="statFiller1" class="button">Aceptar</button>`
    ;
    

    someplace1 = document.getElementById("statFiller");
    someplace1.replaceWith(statFiller);

$("statFiller1").click( () => {
        let stats = [
             document.getElementById("quantity1").value ,
             document.getElementById("quantity2").value ,
             document.getElementById("quantity3").value ,
             document.getElementById("quantity4").value ,
             document.getElementById("quantity5").value ,
             document.getElementById("quantity6").value ,
        ];
        stats.sort(function(a, b){return b-a});
        return stats
    })
}
//Falta boton aceptar






// ELECCION DE CLASE

let btnC1         = document.getElementById("btnC1");
btnC1.onclick     = () => {
    let clase1 = 'Barbarian' 
    return clase = clase1
}

let btnC2         = document.getElementById("btnC2");
btnC2.onclick     = () => {
    let clase1 = 'Bard' 
    return clase = clase1
}

let btnC3         = document.getElementById("btnC3");
btnC3.onclick     = () => {
    let clase1 = 'Cleric' 
    return clase = clase1
}

let btnC4         = document.getElementById("btnC4");
btnC4.onclick     = () => {
    let clase1 = 'Druid' 
    return clase = clase1
}

let btnC5         = document.getElementById("btnC5");
btnC5.onclick     = () => {
    let clase1 = 'Fighter' 
    return clase = clase1
}

let btnC6         = document.getElementById("btnC6");
btnC6.onclick     = () => {
    let clase1 = 'Monk' 
    return clase = clase1
}

let btnC7         = document.getElementById("btnC7");
btnC7.onclick     = () => {
    let clase1 = 'Paladin' 
    return clase = clase1
}

let btnC8         = document.getElementById("btnC8");
btnC8.onclick     = () => {
    let clase1 = 'Ranger' 
    return clase = clase1
}

let btnC9         = document.getElementById("btnC9");
btnC9.onclick     = () => {
    let clase1 = 'Rogue' 
    return clase = clase1
}

let btnC10         = document.getElementById("btnC10");
btnC10.onclick     = () => {
    let clase1 = 'Sorcerer' 
    return clase = clase1
}

let btnC11         = document.getElementById("btnC11");
btnC11.onclick     = () => {
    let clase1 = 'Warlock' 
    return clase = clase1
}

let btnC12         = document.getElementById("btnC12");
btnC12.onclick     = () => {
    let clase1 = 'Wizard' 
    return clase = clase1
}

//boton aceptar
document.getElementById("accept1").onclick = () => {
 function profsByClass()  {
 $("#classMain").replaceWith('<li id="classMain"> Class: ' + clase +'</li>');
    
document.getElementById("skillAcrobatics").disabled = true;
document.getElementById("skillAnimalHandling").disabled = true;
document.getElementById("skillAthletics").disabled = true;
document.getElementById("skillArcana").disabled = true;
document.getElementById("skillDeception").disabled = true;
document.getElementById("skillHistory").disabled = true;
document.getElementById("skillInsight").disabled = true;
document.getElementById("skillIntimidation").disabled = true;
document.getElementById("skillInvestigation").disabled = true;
document.getElementById("skillMedicine").disabled = true;
document.getElementById("skillNature").disabled = true;
document.getElementById("skillPerception").disabled = true;
document.getElementById("skillPerformance").disabled = true;
document.getElementById("skillPersuasion").disabled = true;
document.getElementById("skillReligion").disabled = true;
document.getElementById("skillSleightofHand").disabled = true;
document.getElementById("skillStealth").disabled = true;
document.getElementById("skillSurvival").disabled = true;




if(clase=="Barbarian"){
    document.getElementById("skillAnimalHandling").disabled = false;
    document.getElementById("skillAthletics").disabled = false;
    document.getElementById("skillIntimidation").disabled = false;
    document.getElementById("skillNature").disabled = false;
    document.getElementById("skillPerception").disabled = false;
    document.getElementById("skillSurvival").disabled = false;
    let definedStats1 = [stats[0],stats[2],stats[1],stats[5],stats[3],stats[4]]
    return definedStats = definedStats1
}
else if(clase=="Bard"){
    document.getElementById("skillAcrobatics").disabled = false;
    document.getElementById("skillAnimalHandling").disabled = false;
    document.getElementById("skillAthletics").disabled = false;
    document.getElementById("skillArcana").disabled = false;
    document.getElementById("skillDeception").disabled = false;
    document.getElementById("skillHistory").disabled = false;
    document.getElementById("skillInsight").disabled = false;
    document.getElementById("skillIntimidation").disabled = false;
    document.getElementById("skillInvestigation").disabled = false;
    document.getElementById("skillMedicine").disabled = false;
    document.getElementById("skillNature").disabled = false;
    document.getElementById("skillPerception").disabled = false;
    document.getElementById("skillPerformance").disabled = false;
    document.getElementById("skillPersuasion").disabled = false;
    document.getElementById("skillReligion").disabled = false;
    document.getElementById("skillSleightofHand").disabled = false;
    document.getElementById("skillStealth").disabled = false;
    document.getElementById("skillSurvival").disabled = false;
    let definedStats1 = [stats[5],stats[3],stats[2],stats[4],stats[1],stats[0]]
    return definedStats = definedStats1
}
else if(clase=="Cleric"){
    document.getElementById("skillHistory").disabled = false;
    document.getElementById("skillInsight").disabled = false;
    document.getElementById("skillMedicine").disabled = false;
    document.getElementById("skillPersuasion").disabled = false;
    document.getElementById("skillReligion").disabled = false;
    let definedStats1 = [stats[5],stats[3],stats[1],stats[4],stats[0],stats[2]]
    return definedStats = definedStats1
}
else if(clase=="Druid"){
    document.getElementById("skillArcana").disabled = false;
    document.getElementById("skillAnimalHandling").disabled = false;
    document.getElementById("skillInsight").disabled = false;
    document.getElementById("skillMedicine").disabled = false;
    document.getElementById("skillNature").disabled = false;
    document.getElementById("skillPerception").disabled = false;
    document.getElementById("skillReligion").disabled = false;
    document.getElementById("skillSurvival").disabled = false;
    let definedStats1 = [stats[5],stats[3],stats[1],stats[4],stats[0],stats[2]]
    return definedStats = definedStats1
}
else if(clase=="Fighter"){
    document.getElementById("skillAcrobatics").disabled = false;
    document.getElementById("skillAnimalHandling").disabled = false;
    document.getElementById("skillAthletics").disabled = false;
    document.getElementById("skillHistory").disabled = false; 
    document.getElementById("skillInsight").disabled = false;
    document.getElementById("skillIntimidation").disabled = false;
    document.getElementById("skillPerception").disabled = false;
    document.getElementById("skillSurvival").disabled = false;
    let definedStats1 = [stats[0],stats[2],stats[1],stats[5],stats[3],stats[4]]
    return definedStats = definedStats1
}
else if(clase=="Monk"){
    document.getElementById("skillAcrobatics").disabled = false;
    document.getElementById("skillAthletics").disabled = false;
    document.getElementById("skillInsight").disabled = false;
    document.getElementById("skillHistory").disabled = false;
    document.getElementById("skillReligion").disabled = false;
    document.getElementById("skillStealth").disabled = false;
    let definedStats1 = [stats[5],stats[0],stats[1],stats[4],stats[2],stats[3]]
    return definedStats = definedStats1
}
else if(clase=="Paladin"){
    document.getElementById("skillAthletics").disabled = false;
    document.getElementById("skillInsight").disabled = false;
    document.getElementById("skillIntimidation").disabled = false;
    document.getElementById("skillMedicine").disabled = false;
    document.getElementById("skillPersuasion").disabled = false;
    document.getElementById("skillReligion").disabled = false;
    let definedStats1 = [stats[1],stats[3],stats[2],stats[5],stats[0],stats[4]]
    return definedStats = definedStats1
}
else if(clase=="Ranger"){
    document.getElementById("skillAnimalHandling").disabled = false;
    document.getElementById("skillAthletics").disabled = false;
    document.getElementById("skillInsight").disabled = false;
    document.getElementById("skillInvestigation").disabled = false;
    document.getElementById("skillNature").disabled = false;
    document.getElementById("skillPerception").disabled = false;
    document.getElementById("skillSurvival").disabled = false;
    document.getElementById("skillStealth").disabled = false;
    let definedStats1 = [stats[5],stats[0],stats[2],stats[3],stats[1],stats[4]]
    return definedStats = definedStats1
}
else if(clase=="Rogue"){
    document.getElementById("skillAcrobatics").disabled = false;
    document.getElementById("skillAthletics").disabled = false;
    document.getElementById("skillDeception").disabled = false;
    document.getElementById("skillInsight").disabled = false;
    document.getElementById("skillIntimidation").disabled = false;
    document.getElementById("skillInvestigation").disabled = false;
    document.getElementById("skillPerception").disabled = false;
    document.getElementById("skillPerformance").disabled = false;
    document.getElementById("skillPersuasion").disabled = false;
    document.getElementById("skillSleightofHand").disabled = false;
    document.getElementById("skillStealth").disabled = false;
    let definedStats1 = [stats[5],stats[0],stats[2],stats[4],stats[1],stats[3]]
    return definedStats = definedStats1
}
else if(clase=="Sorcerer"){
    document.getElementById("skillArcana").disabled = false;
    document.getElementById("skillDeception").disabled = false;
    document.getElementById("skillInsight").disabled = false;
    document.getElementById("skillIntimidation").disabled = false;
    document.getElementById("skillPersuasion").disabled = false;
    document.getElementById("skillReligion").disabled = false;
    let definedStats1 = [stats[5],stats[3],stats[2],stats[4],stats[1],stats[0]]
    return definedStats = definedStats1
}
else if(clase=="Warlock"){
    document.getElementById("skillArcana").disabled = false;
    document.getElementById("skillDeception").disabled = false;
    document.getElementById("skillHistory").disabled = false;
    document.getElementById("skillIntimidation").disabled = false;
    document.getElementById("skillInvestigation").disabled = false;
    document.getElementById("skillNature").disabled = false;
    document.getElementById("skillReligion").disabled = false;
    let definedStats1 = [stats[5],stats[3],stats[2],stats[4],stats[1],stats[0]]
    return definedStats = definedStats1
}
else if(clase=="Wizard"){
    document.getElementById("skillArcana").disabled = false;
    document.getElementById("skillHistory").disabled = false;
    document.getElementById("skillInsight").disabled = false;
    document.getElementById("skillInvestigation").disabled = false;
    document.getElementById("skillMedicine").disabled = false;
    document.getElementById("skillReligion").disabled = false;
    let definedStats1 = [stats[5],stats[4],stats[2],stats[0],stats[1],stats[3]]
    return definedStats = definedStats1
};
} 
profsByClass();
console.log(definedStats);
$("#scoresMain").replaceWith('<li id="scoresMain">Abilities Score:   ' + 'Str: ' + definedStats[0] + '  Dex: '+  definedStats[1] +'  Con: ' + definedStats[2] +'  Int: ' + definedStats[3] +'  Wis: '+  definedStats[4] +'  Cha: ' + definedStats[5] +'</li>');
}

$('.mainSkills :checkbox').change(function () {
    var $cs = $(this).closest('.mainSkills').find(':checkbox:checked');
    if ($cs.length > 2) {
        this.checked = false;
    }
});



// ELECCION DE RAZA

let btnR1         = document.getElementById("btnR1");
btnR1.onclick     = () => {
    let race1 = 'Dragonborn' 
    return race = race1
}
let btnR2         = document.getElementById("btnR2");
btnR2.onclick     = () => {
    let race1 = 'Dwarf' 
    return race = race1
}
let btnR3         = document.getElementById("btnR3");
btnR3.onclick     = () => {
    let race1 = 'Elf' 
    return race = race1
}
let btnR4         = document.getElementById("btnR4");
btnR4.onclick     = () => {
    let race1 = 'Gnome' 
    return race = race1
}
let btnR5         = document.getElementById("btnR5");
btnR5.onclick     = () => {
    let race1 = 'HalfElf' 
    return race = race1
}
let btnR6         = document.getElementById("btnR6");
btnR6.onclick     = () => {
    let race1 = 'Human' 
    return race = race1
}
let btnR7         = document.getElementById("btnR7");
btnR7.onclick     = () => {
    let race1 = 'HalfOrc' 
    return race = race1
}
let btnR8        = document.getElementById("btnR8");
btnR8.onclick     = () => {
    let race1 = 'Hafling' 
    return race = race1
}
let btnR9         = document.getElementById("btnR9");
btnR9.onclick     = () => {
    let race1 = 'Tiefling' 
    return race = race1
}

 
//boton aceptar 

document.getElementById("accept2").onclick = () => {
    $("#raceMain").replaceWith('<li id="raceMain"> Race: ' + race +'</li>');

    document.getElementById("LanguageCommon").disabled  = true;
    document.getElementById("LanguageElvish").disabled   = true;
    document.getElementById("LanguageDwarvish").disabled = true;
    document.getElementById("LanguageGiant").disabled  = true;
    document.getElementById("LanguageGnomish").disabled  = true;
    document.getElementById("LanguageInfernal").disabled  = true;
    document.getElementById("LanguageHafling").disabled  = true;
    document.getElementById("LanguageOrc").disabled  = true;
    document.getElementById("LanguageCelestial").disabled  = true; 
    document.getElementById("LanguageSylvan").disabled  = true; 
    document.getElementById("LanguageGoblin").disabled  = true; 
    document.getElementById("LanguagePrimordial").disabled  = true; 
    document.getElementById("LanguageUndercommon").disabled  = true; 
    document.getElementById("LanguageDeepSpeech").disabled  = true; 
    document.getElementById("LanguageAbyssal").disabled  = true; 
    document.getElementById("LanguageDraconic").disabled = true; 

if(race=='Dragonborn'){
    document.getElementById("LanguageDraconic").disabled = false; 
    document.getElementById("LanguageCommon").disabled  = false;
}

else if (race=='Dwarf'){
    document.getElementById("LanguageDwarvish").disabled = false;
    document.getElementById("LanguageCommon").disabled  = false;
}

else if (race=='Elf'){
    document.getElementById("LanguageElvish").disabled  = false;
    document.getElementById("LanguageCommon").disabled  = false;
}

else if (race=='Gnome'){
    document.getElementById("LanguageGnomish").disabled = false;
    document.getElementById("LanguageCommon").disabled  = false;
}

else if (race=='HalfElf'){
    document.getElementById("LanguageCommon").disabled  = false;
    document.getElementById("LanguageElvish").disabled  = false;
    document.getElementById("LanguageDwarvish").disabled = false;
    document.getElementById("LanguageGiant").disabled = false;
    document.getElementById("LanguageGnomish").disabled = false;
    document.getElementById("LanguageInfernal").disabled = false;
    document.getElementById("LanguageHafling").disabled = false;
    document.getElementById("LanguageOrc").disabled = false;
    document.getElementById("LanguageDraconic").disabled = false; 
}

else if (race=='Human'){
    document.getElementById("LanguageCommon").disabled  = false;
    document.getElementById("LanguageElvish").disabled = false;
    document.getElementById("LanguageDwarvish").disabled = false;
    document.getElementById("LanguageGiant").disabled = false;
    document.getElementById("LanguageGnomish").disabled = false;
    document.getElementById("LanguageInfernal").disabled = false;
    document.getElementById("LanguageHafling").disabled = false;
    document.getElementById("LanguageOrc").disabled = false;
    document.getElementById("LanguageDraconic").disabled = false;

}

else if (race=='HalfOrc'){
    document.getElementById("LanguageOrc").disabled = false;
    document.getElementById("LanguageCommon").disabled  = false;}

else if (race=='Hafling'){
    document.getElementById("LanguageHafling").disabled = false;
    document.getElementById("LanguageCommon").disabled  = false;
}

else if (race=='Tiefling'){
    document.getElementById("LanguageInfernal").disabled = false; 
    document.getElementById("LanguageCommon").disabled  = false;
}
}

$('.mainLanguages :checkbox').change(function () {
    var $cs = $(this).closest('.mainLanguages').find(':checkbox:checked');
    if ($cs.length > 2) {
        this.checked = false;
    }
});





const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);





$('#trigger').click( function() {
    let mainStat = new AbilityStats (definedStats[0], definedStats[1], definedStats[2], definedStats[3], definedStats[4], definedStats[5], clase, race, name1);
    mainStat.showStats ();
    $("#name1").replaceWith("Name: <br>" + name1);
    $("#clase1").replaceWith("Class: <br>" + clase);
    $("#raza1").replaceWith("Race: <br>" + race);
    let statsTabla = document.createElement("div");
    statsTabla.innerHTML = 
    `<ul>
    <br>
    <li id="str">
        Strength: ${definedStats[0]}
    </li>
    <br>
    <li id="dex">
        Dexterity: ${definedStats[1]}
    </li>
    <br>
    <li id="con">
        Constitution: ${definedStats[2]}
    </li>
    <br>
    <li id="int">
        Intelligence: ${definedStats[3]}
    </li>
    <br>
    <li id="wis">
        Wisdom: ${definedStats[4]}
    </li>
    <br>
    <li id="cha">
        Charisma: ${definedStats[5]}
    </li>
    <br>
    <br>
    </ul>`;
    someplace2 = document.getElementById('results');
    someplace2.appendChild(statsTabla);
    localStorage.setItem ( "mainStats", JSON.stringify(mainStat));
    
    });




