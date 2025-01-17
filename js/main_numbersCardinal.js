

//LISTA
let listWord=[
    ["1","	17","	    Seventeenth	    ","Decimoséptimo	    ","The seventeenth chapter is long","	El decimoséptimo capítulo es largo","	'Seventeenth' representa el número diecisiete en una secuencia ordinal"],
    ["2","	18","	    Eighteenth	    ","Decimoctavo	        ","Today is the eighteenth day of the month","	Hoy es el decimoctavo día del mes","	'Eighteenth' denota el número dieciocho en un orden"],
    ["3","	19","	    Nineteenth	    ","Decimonoveno	    ","It's the nineteenth attempt","	Es el decimonoveno intento","	'Nineteenth' se usa para el número diecinueve en una secuencia ordinal"],
    ["4","	20","	    Twentieth	    ","Vigésimo	        ","Today is his twentieth birthday","	Hoy es su vigésimo cumpleaños","	'Twentieth' denota el número veinte en un orden"],
    ["5","	21","	    Twenty-first	","Vigésimo primero	","It is the twenty-first floor","	Es el vigésimo primer piso","	A partir de '21', los números ordinales se forman combinando la decena ('twenty') y la unidad ('first', 'second', etc",")"],
    ["6","	22","	    Twenty-second	","Vigésimo segundo	","He is in the twenty-second place","	Está en el vigésimo segundo lugar","	El patrón sigue igual: decena más ordinal de la unidad"],
    ["7","	23","	    Twenty-third	","Vigésimo tercero	","This is the twenty-third episode","	Este es el vigésimo tercer episodio","	Igual que en español, 'third' sigue el patrón de unidad más ordinal"],
    ["8","	30","	    Thirtieth	    ","Trigésimo	        ","It's the thirtieth day of the month","	Es el trigésimo día del mes","	'Thirtieth' denota el número treinta en un orden"],
    ["9","	40","	    Fortieth	    ","Cuadragésimo	    ","Today is the fortieth anniversary","	Hoy es el cuadragésimo aniversario","	'Fortieth' representa el número cuarenta en el orden ordinal"],
    ["10","	50","	    Fiftieth	    ","Quincuagésimo	    ","We celebrate his fiftieth birthday","	Celebramos su quincuagésimo cumpleaños","	'Fiftieth' denota el número cincuenta en un orden"],
    ["11","	60","	    Sixtieth	    ","Sexagésimo	        ","He is in his sixtieth year","	Está en su sexagésimo año","	'Sixtieth' corresponde al número sesenta en un orden"],
    ["12","	70","	    Seventieth	    ","Septuagésimo	    ","Today is the seventieth day of the year","	Hoy es el septuagésimo día del año","	'Seventieth' denota el número setenta en una secuencia ordinal"],
    ["13","	80","	    Eightieth	    ","Octogésimo	        ","This is the eightieth anniversary","	Este es el octogésimo aniversario","	'Eightieth' indica el número ochenta en un orden"],
    ["14","	90","	    Ninetieth	    ","Nonagésimo	        ","It's the ninetieth chapter of the book","	Es el nonagésimo capítulo del libro","	'Ninetieth' denota el número noventa en una secuencia"],
    ["15","	100","	One hundredth	","Centésimo	        ","Today is his one hundredth birthday","	Hoy es su centésimo cumpleaños","	'One hundredth' denota el número cien en una secuencia ordinal"],
    ["16","	1","	    First	        ","Primero	            ","It's the first time I travel","	Es la primera vez que viajo","	'First' se usa para indicar el comienzo de una secuencia"],
    ["17","	2","	    Second	        ","Segundo	            ","It's my second chance","	Es mi segunda oportunidad","	'Second' se refiere al número dos en una secuencia ordinal"],
    ["18","	3","	    Third	        ","Tercero	            ","This is the third attempt","	Este es el tercer intento","	'Third' indica el número tres en un orden"],
    ["19","	4","	    Fourth	        ","Cuarto	            ","She lives on the fourth floor","	Ella vive en el cuarto piso","	'Fourth' indica la posición número cuatro en una secuencia"],
    ["20","	5","	    Fifth	        ","Quinto	            ","It's her fifth birthday","	Es su quinto cumpleaños","	'Fifth' representa el número cinco en el orden ordinal"],
    ["21","	6","	    Sixth	        ","Sexto	            ","She is in her sixth month of pregnancy","	Está en su sexto mes de embarazo","	'Sixth' se usa para hablar del número seis en una secuencia ordinal"],
    ["22","	7","	    Seventh	        ","Séptimo	            ","This is the seventh chapter","	Este es el séptimo capítulo","	'Seventh' corresponde al número siete en el orden"],
    ["23","	8","	    Eighth	        ","Octavo	            ","The eighth day is a holiday","	El octavo día es festivo","	'Eighth' denota la posición número ocho en una secuencia"],
    ["24","	9","	    Ninth	        ","Noveno	            ","It's the ninth anniversary","	Es el noveno aniversario","	'Ninth' se usa para representar el número nueve en un orden"],
    ["25","	10","	    Tenth	        ","Décimo	            ","Today is his tenth concert","	Hoy es su décimo concierto","	'Tenth' se utiliza para indicar el décimo en una serie o lista"],
    ["26","	11","	    Eleventh	    ","Undécimo	        ","He arrived in eleventh place","	Llegó en el undécimo lugar","	'Eleventh' es el número once en una secuencia"],
    ["27","	12","	    Twelfth	        ","Duodécimo	        ","Today is her twelfth class","	Hoy es su duodécima clase","	'Twelfth' denota el número doce en un orden"],
    ["28","	13","	    Thirteenth	    ","Decimotercero	    ","It was the thirteenth birthday","	Fue el decimotercer cumpleaños","	'Thirteenth' representa el número trece en una secuencia"],
    ["29","	14","	    Fourteenth	    ","Decimocuarto	    ","It is the fourteenth chapter","	Es el decimocuarto capítulo","	'Fourteenth' indica el número catorce en un orden"],
    ["30","	15","	    Fifteenth	    ","Decimoquinto	    ","Today is the fifteenth anniversary","	Hoy es el decimoquinto aniversario","	'Fifteenth' denota el número quince en una secuencia ordinal"],
    ["31","	16","	    Sixteenth	    ","Decimosexto	        ","The sixteenth day is important","	El decimosexto día es importante","	'Sixteenth' se usa para el número dieciséis en un orden"]
]

const teamA_numStart=document.getElementById("teamA_numStart"),
      teamA_numEnd=document.getElementById("teamA_numEnd");
let numStart=teamA_numStart.textContent-1,
    numEnd=teamA_numEnd.textContent-1;//listWord.length/2 →22 
  
let teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd),
    teamA_colNum=listWord[teamA_rowRamdon][0],  
    teamA_colWordEN=listWord[teamA_rowRamdon][2],  
    teamA_colWordES=listWord[teamA_rowRamdon][3],  
    teamA_colPhraseEN=listWord[teamA_rowRamdon][4],  
    teamA_colPhraseES=listWord[teamA_rowRamdon][5],
    teamA_num_random=document.getElementById("teamA_num_random");  
  

//CARGA DEFAULT
document.addEventListener("DOMContentLoaded",(e)=>{    
    teamA_phraseToSpeak(); 
    teamA_num_random.textContent= teamA_colNum;
    teamA_num_random.setAttribute("href",`#teamA_fila${teamA_colNum}`);

});  

   

function teamB_numAleatorio(inicio,final){
    //del 23 al 44
    let numberSelected = 0;
    for (let i = 0; i < listWord.length; i++) {        
        numberSelected++;
    }
    return getRandomInt_teamB(listWord.length/2+1,numberSelected) 
}  


//Función consegir un número aleatorio
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function  teamA_numAleatorio(numStart,numEnd) {
    const minCeiled = Math.ceil(numStart);
    const maxFloored = Math.floor(numEnd);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}



let teamA_inputEN_phrase=document.getElementById("teamA_inputEN_phrase"),
    teamA_wordEnglish=document.getElementById("teamA_wordEnglish"),
    teamA_wordSpanish=document.getElementById("teamA_wordSpanish");

 
teamA_inputEN_phrase.value=teamA_colPhraseEN;
teamA_wordEnglish.textContent=teamA_colWordEN; 

// BOTON REPETIR
document.getElementById('teamA_btn_repeat').addEventListener("click",()=>{
    teamA_phraseToSpeak();  
});
//BOTON MUESTRAME

document.getElementById('teamA_btn_showMe').addEventListener("click",()=>{
   teamA_inputEN_phrase.classList.add("showYes")   
   teamA_wordEnglish.classList.add("showYes")   
});

//BOTON ESPAÑOL
let teamA_inputES_phrase=document.getElementById("teamA_inputES_phrase");
document.getElementById('teamA_btn_spanish').addEventListener("click",()=>{
    teamA_inputES_phrase.value=teamA_colPhraseES;
    teamA_wordSpanish.textContent=teamA_colWordES;
   
});

//TRASFORMACION DE VOZ

let utterance = new SpeechSynthesisUtterance();/* convierte texto a voz */
function teamA_phraseToSpeak(){
    utterance.text =teamA_colPhraseEN;
    utterance.rate="0.7";
    utterance.pitch = "1.1";  
    utterance.name = "Google US English";
    utterance.voiceURI = "Google US English";
    utterance.lang = "en-US";
     
    window.speechSynthesis.speak(utterance);   

    /** 
     * Google US English _ en-US
        Google UK English Female _ en-GB
        Google UK English Male _ en-GB 
    */ 
}

function teamA_wordToSpeak(){
    utterance.text =teamA_colWordEN;
    utterance.rate="0.7";
    utterance.pitch = "1.1";  
    utterance.name = "Google US English";
    utterance.voiceURI = "Google US English";
    utterance.lang = "en-US";
     
    window.speechSynthesis.speak(utterance);      
}

 

 /**
  * LISTA CONTENIDO DE FRASES  team A
  */
const tblBody_teamA = document.createElement("tbody");
const teamA_tablas=document.getElementById("teamA_tablas");
for (let i = 0; i < listWord.length; i++) {
    const hilera = document.createElement("tr");
         hilera.setAttribute("id",`teamA_fila${i}`);
 
    for (let j = 0; j < listWord[0].length; j++) {
      const celda = document.createElement("td");
      const textoCelda = document.createTextNode(listWord[i][j]
      );
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    
    tblBody_teamA.appendChild(hilera);
    
 }
 teamA_tablas.appendChild(tblBody_teamA);


//COLOREAR FILAS teamA
let teamA_fila=" ";

teamA_num_random.addEventListener("click",()=>{ 

    
    teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    //  teamA_fila.style.backgroundColor="red";
    for (let i = 0; i < listWord.length/2; i++) {
        
        
        if(i === teamA_rowRamdon){
            teamA_fila.style.backgroundColor="red";
           
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }        
     }
    
});




//teamA boton siguiente teamA
let teamA_btn_next=document.getElementById('teamA_btn_next');

teamA_btn_next.addEventListener("click",()=>{
    teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    for (let i = 0; i < listWord.length; i++) {
        
        if(i !== teamA_rowRamdon){
            teamA_fila.style.backgroundColor="green";
        }
        if(i === teamA_rowRamdon){
            teamA_fila.style.backgroundColor="red";
            
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }
        
     }

    teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd);
    teamA_colNum=listWord[teamA_rowRamdon][0],  
    teamA_colWordEN=listWord[teamA_rowRamdon][2],  
    teamA_colWordES=listWord[teamA_rowRamdon][3],  
    teamA_colPhraseEN=listWord[teamA_rowRamdon][4],  
    teamA_colPhraseES=listWord[teamA_rowRamdon][5],

    
    teamA_phraseToSpeak();
   
  
    teamA_inputEN_phrase.value=teamA_colPhraseEN;
    teamA_wordEnglish.textContent=teamA_colWordEN; 
    teamA_wordSpanish.textContent=teamA_colWordES;
    teamA_num_random.textContent=  teamA_colNum;
    teamA_num_random.setAttribute("href",`#teamA_fila${teamA_colNum}`);
    //teamA_fila.style.backgroundColor="red";

    teamA_inputES_phrase.value=" ";
    teamA_wordSpanish.textContent=" ";
    teamA_inputEN_phrase.classList.remove("showYes");
    teamA_wordEnglish.classList.remove("showYes");     

});

teamA_wordEnglish.addEventListener("click",()=>{
    teamA_wordToSpeak();
});



