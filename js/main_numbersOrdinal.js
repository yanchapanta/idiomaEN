

//LISTA
let listWord=[
    ["1","20  ","	Twenty	        ","Veinte ","	I have twenty friends","	Tengo veinte amigos","	'Twenty' es el número 20, y se usa como base para los números del 21 al 29"],
    ["2","21  ","	Twenty-one	    ","Veintiuno  ","	There are twenty-one chairs in the room","	Hay veintiuna sillas en la sala","	'Twenty-one' se forma combinando 'twenty' (veinte) y 'one' (uno)"],
    ["3","22  ","	Twenty-two	    ","Veintidós  ","	I ate twenty-two cookies","	Comí veintidós galletas","	'Twenty-two' se forma con 'twenty' (veinte) y 'two' (dos)"],
    ["4","23  ","	Twenty-three	","Veintitrés ","	My sister is twenty-three years old","	Mi hermana tiene veintitrés años","	'Twenty-three' es una combinación de 'twenty' (veinte) y 'three' (tres)"],
    ["5","24  ","	Twenty-four	    ","Veinticuatro   ","	There are twenty-four hours in a day","	Hay veinticuatro horas en un día","	'Twenty-four' es la combinación de 'twenty' (veinte) y 'four' (cuatro)"],
    ["6","25  ","	Twenty-five	    ","Veinticinco    ","	I bought twenty-five tickets","	Compré veinticinco entradas","	'Twenty-five' es una combinación de 'twenty' (veinte) y 'five' (cinco)"],
    ["7","26  ","	Twenty-six	    ","Veintiséis ","	Study twenty-six words for tomorrow","	Estudia veintiséis palabras para mañana","	'Twenty-six' se forma con 'twenty' (veinte) y 'six' (seis)"],
    ["8","27  ","	Twenty-seven	","Veintisiete    ","	They have twenty-seven dollars","	Ellos tienen veintisiete dólares","	'Twenty-seven' se forma con 'twenty' (veinte) y 'seven' (siete)"],
    ["9","28  ","	Twenty-eight	","Veintiocho ","	I saw twenty-eight birds in the park","	Vi veintiocho pájaros en el parque","	'Twenty-eight' se forma con 'twenty' (veinte) y 'eight' (ocho)"],
    ["10","29  ","	Twenty-nine	    ","Veintinueve    ","	I worked for twenty-nine hours","	Estuve trabajando veintinueve horas","	'Twenty-nine' se forma con 'twenty' (veinte) y 'nine' (nueve)"],
    ["11","30  ","	Thirty	        ","Treinta    ","	I have thirty pages to read","	Tengo treinta páginas que leer","	'Thirty' es el número 30"," Se usa como base para los números del 31 al 39"],
    ["12","40  ","	Forty	        ","Cuarenta   ","	My grandmother has forty grandchildren","	Mi abuela tiene cuarenta nietos","	'Forty' es el número 40, y se forma con 'four' (cuatro) y el sufijo '-ty' que indica decenas"],
    ["13","50  ","	Fifty	        ","Cincuenta  ","	There are fifty people at the party","	Hay cincuenta personas en la fiesta","	'Fifty' es el número 50, formado por 'five' (cinco) y el sufijo '-ty'"],
    ["14","60  ","	Sixty	        ","Sesenta    ","	The train leaves in sixty minutes","	El tren sale en sesenta minutos","	'Sixty' es el número 60, compuesto por 'six' (seis) y el sufijo '-ty'"],
    ["15","70  ","	Seventy	        ","Setenta    ","	There are seventy pages in the book","	Hay setenta páginas en el libro","	'Seventy' es el número 70, compuesto por 'seven' (siete) y '-ty'"],
    ["16","80  ","	Eighty	        ","Ochenta    ","	I run eighty kilometers every week","	Corro ochenta kilómetros cada semana","	'Eighty' es el número 80, compuesto por 'eight' (ocho) y '-ty'"],
    ["17","90  ","	Ninety	        ","Noventa    ","	I studied for ninety minutes","	Estudié noventa minutos","	'Ninety' es el número 90, compuesto por 'nine' (nueve) y '-ty'"],
    ["18","100 ","	One hundred	    ","Cien   ","	My house costs one hundred thousand dollars","	Mi casa cuesta cien mil dólares","	'One hundred' es el número 100, formado por 'one' (uno) y 'hundred' (cien)"," Este es un múltiplo de 100"],
    ["19","0   ","	Zero	        ","Cero   ","	I have zero doubts","	No tengo cero dudas","	'Zero' es el número que indica ninguna cantidad"," Se usa para indicar la ausencia de algo"],
    ["20","1   ","	One	            ","Uno    ","	I have one in my hand","	Tengo uno en mi mano","	'One' es el primer número"," Se usa para contar una sola unidad"],
    ["21","2   ","	Two	            ","Dos    ","	I have two apples","	Tengo dos manzanas","	'Two' es el número dos"," Se usa para contar dos unidades de algo"],
    ["22","3   ","	Three	        ","Tres   ","	I saw three cars on the street","	Vi tres coches en la calle","	'Three' es el número tres"," Se utiliza para contar tres elementos"],
    ["23","4   ","	Four	        ","Cuatro ","	I have four brothers","	Tengo cuatro hermanos","	'Four' es el número cuatro"," Se usa para contar cuatro objetos o personas"],
    ["24","5   ","	Five	        ","Cinco  ","	I bought five books","	Compré cinco libros","	'Five' es el número cinco"," Se usa para referirse a cinco objetos o unidades"],
    ["25","6   ","	Six		        "," Seis ","There are six chairs on the table","	Hay seis sillas en la mesa","	'Six' es el número seis"," Indica una cantidad de seis elementos"],
    ["26","7   ","	Seven	        ","Siete  ","	I have seven days left on vacation","	Me quedan siete días de vacaciones","	'Seven' es el número siete"," Se usa para contar siete unidades"],
    ["27","8   ","	Eight	        ","Ocho   ","	I ate eight cookies","	Comí ocho galletas","	'Eight' es el número ocho"," Se usa para contar ocho cosas o personas"],
    ["28","9   ","	Nine	        ","Nueve  ","	I am nine years old","	Tengo nueve años","	'Nine' es el número nueve"," Se usa para contar hasta nueve"],
    ["29","10  ","	Ten		        "," Diez ","There are ten pencils in the box","	Hay diez lápices en la caja","	'Ten' es el número diez"," Se usa para contar diez elementos o cosas"],
    ["30","11  ","	Eleven	        ","Once   ","	I have eleven dollars","	Tengo once dólares","	'Eleven' es el número once, que es el primer número de dos dígitos"],
    ["31","12  ","	Twelve	        ","Doce   ","	My sister is twelve years old","	Mi hermana tiene doce años","	'Twelve' es el número doce"," Se usa para contar doce elementos o años"],
    ["32","13  ","	Thirteen	    ","Trece  ","	The train leaves at thirteen o'clock","	El tren sale a las trece horas","	'Thirteen' es el número trece"," Se usa para contar hasta trece"],
    ["33","14  ","	Fourteen	    ","Catorce    ","	I am on the fourteenth floor","	Estoy en el catorceavo piso","	'Fourteen' es el número catorce"," Es una combinación de 'four' (cuatro) y 'teen' (sufijo que indica cantidad)"],
    ["34","15  ","	Fifteen	        ","Quince ","	My friend turns fifteen","	Mi amigo cumple quince años","	'Fifteen' es el número quince"," Se forma uniendo 'five' (cinco) y 'teen'"],
    ["35","16  ","	Sixteen	        ","Dieciséis  ","	I bought sixteen tickets","	Compré dieciséis entradas","	'Sixteen' es el número dieciséis"," Se forma combinando 'six' (seis) y el sufijo '-teen'"],
    ["36","17  ","	Seventeen	    ","Diecisiete ","	She is seventeen years old","	Ella tiene diecisiete años","	'Seventeen' es el número diecisiete"," Se forma con 'seven' (siete) y el sufijo '-teen'"],
    ["37","18  ","	Eighteen	    ","Dieciocho  ","	I have eighteen messages","	Tengo dieciocho mensajes","	'Eighteen' es el número dieciocho"," Se forma con 'eight' (ocho) y '-teen'"],
    ["38","19  ","	Nineteen	    ","Diecinueve ","	There are nineteen students in the class","	Hay diecinueve alumnos en la clase","	'Nineteen' es el número diecinueve"," Se forma con 'nine' (nueve) y '-teen'"],
    ["39","20  ","	Twenty	        ","Veinte ","	My mom is going to buy twenty flowers","	Mi mamá va a comprar veinte flores","	'Twenty' es el número veinte"," Se forma con 'ten' (diez) y el sufijo '-ty'"],
    ["40","200	     ","Two hundred	"," Doscientos    ","There are two hundred students at the school","	Hay doscientos estudiantes en la escuela","		Two hundred es el número 200, compuesto por 'two' (dos) y 'hundred' (cien), que indica dos veces 100"],
    ["41","1,000	 ","	One thousand "," Mil           ","I have one thousand reasons to smile","	Tengo mil razones para sonreír","	One thousand es el número 1,000, formado por 'one' (uno) y 'thousand' (mil)"," Indica mil unidades"],
    ["42","1,500	 ","One thousand  five hundred"," Mil quinientos	 ","The city has one thousand five hundred inhabitants","	La ciudad tiene mil quinientos habitantes","	One thousand five hundred es una combinación de mil (1,000) y quinientos (500), por lo que se usa para números como 1,500"],
    ["43","10,000	 "," Ten thousand ","Diez mil     ","There are ten thousand books in the library","	Hay diez mil libros en la biblioteca","	Ten thousand es el número 10,000, que combina 'ten' (diez) y 'thousand' (mil), y es uno de los grandes números de la numeración estándar"],
    ["44","1,000,000"," One million ","Un millón	 ","They won one million dollars","	Ganaron un millón de dólares","	One million es el número 1,000,000, compuesto por 'one' (uno) y 'million' (millón)"," Este número se usa para cantidades extremadamente grandes"]	
]

const teamA_numStart=document.getElementById("teamA_numStart"),
      teamA_numEnd=document.getElementById("teamA_numEnd"),
      totalList=document.getElementById("totalList");
      totalList.textContent=listWord.length;
      
let numStart=teamA_numStart.value-1,
numEnd=teamA_numEnd.value-1;//listWord.length/2 →22 

let ABCD_rowRamdon=ABCD_numAleatorio(),
    ABCD_colNum=listWord[ABCD_rowRamdon][0],  
    ABCD_colWordEN=listWord[ABCD_rowRamdon][2],  
    ABCD_colWordES=listWord[ABCD_rowRamdon][3],  
    ABCD_colPhraseEN=listWord[ABCD_rowRamdon][4],  
    ABCD_colPhraseES=listWord[ABCD_rowRamdon][5],
    ABCD_num_random=document.getElementById("ABCD_num_random");   
let teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd),
    teamA_colNum=listWord[teamA_rowRamdon][0],  
    teamA_colWordEN=listWord[teamA_rowRamdon][2],  
    teamA_colWordES=listWord[teamA_rowRamdon][3],  
    teamA_colPhraseEN=listWord[teamA_rowRamdon][4],  
    teamA_colPhraseES=listWord[teamA_rowRamdon][5],
    teamA_num_random=document.getElementById("teamA_num_random");  
  

//CARGA DEFAULT
document.addEventListener("DOMContentLoaded",(e)=>{       
    ABCD_phraseToSpeak(); 
    ABCD_num_random.textContent= ABCD_colNum;
    ABCD_num_random.setAttribute("href",`#ABCD_fila${ABCD_colNum}`);
    
    //teamA_phraseToSpeak(); 
    teamA_num_random.textContent= teamA_colNum;
    teamA_num_random.setAttribute("href",`#teamA_fila${teamA_colNum}`);

    const teamA_numStart=document.getElementById("teamA_numStart"),
      teamA_numEnd=document.getElementById("teamA_numEnd");


    teamA_numStart.value=1;
    teamA_numEnd.value=listWord.length;


});  
// ingresar área de estudio
function fromToArea() {
    const teamA_numStart=document.getElementById("teamA_numStart").value-1,
      teamA_numEnd=document.getElementById("teamA_numEnd").value-1;
    numStart=teamA_numStart;
      numEnd=teamA_numEnd;
    //numStart=teamA_numStart
}
function ABCD_numAleatorio(){
    //del 1 al 44
    let numberSelected = 0;
    for (let i = 0; i < listWord.length; i++) {        
        numberSelected++;
    }
    return getRandomInt(numberSelected) 
}    
/*     
function teamA_numAleatorio(numStart,numEnd){
    //del 1 hasta 22
    let numberSelected = 0;
    for (let i = numStart; i < numEnd; i++) {        
        numberSelected++;
    }
    return getRandomInt(numberSelected) 
}  
    */
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
console.log("hola",teamA_numAleatorio(1,10));


//ABCD_inputEN_phrase de input principal
let ABCD_inputEN_phrase=document.getElementById("ABCD_inputEN_phrase"),
    ABCD_wordEnglish=document.getElementById("ABCD_wordEnglish"),
    ABCD_wordSpanish=document.getElementById("ABCD_wordSpanish");
let teamA_inputEN_phrase=document.getElementById("teamA_inputEN_phrase"),
    teamA_wordEnglish=document.getElementById("teamA_wordEnglish"),
    teamA_wordSpanish=document.getElementById("teamA_wordSpanish");

ABCD_inputEN_phrase.value=ABCD_colPhraseEN;
ABCD_wordEnglish.textContent=ABCD_colWordEN; 
teamA_inputEN_phrase.value=teamA_colPhraseEN;
teamA_wordEnglish.textContent=teamA_colWordEN; 

// BOTON REPETIR
document.getElementById('ABCD_btn_repeat').addEventListener("click",()=>{
    ABCD_phraseToSpeak();  
});
document.getElementById('teamA_btn_repeat').addEventListener("click",()=>{
    teamA_phraseToSpeak();  
});
//BOTON MUESTRAME
document.getElementById('ABCD_btn_showMe').addEventListener("click",()=>{
   ABCD_inputEN_phrase.classList.add("showYes")   
   ABCD_wordEnglish.classList.add("showYes")   
});
document.getElementById('teamA_btn_showMe').addEventListener("click",()=>{
   teamA_inputEN_phrase.classList.add("showYes")   
   teamA_wordEnglish.classList.add("showYes")   
});

//BOTON ESPAÑOL
let ABCD_inputES_phrase=document.getElementById("ABCD_inputES_phrase");
document.getElementById('ABCD_btn_spanish').addEventListener("click",()=>{
    ABCD_inputES_phrase.value=ABCD_colPhraseES;
    ABCD_wordSpanish.textContent=ABCD_colWordES;
   
});
let teamA_inputES_phrase=document.getElementById("teamA_inputES_phrase");
document.getElementById('teamA_btn_spanish').addEventListener("click",()=>{
    teamA_inputES_phrase.value=teamA_colPhraseES;
    teamA_wordSpanish.textContent=teamA_colWordES;
   
});

//TRASFORMACION DE VOZ

let utterance = new SpeechSynthesisUtterance();/* convierte texto a voz */

function ABCD_phraseToSpeak(){
    //utterance.text =listWord[ABCD_numAleatorio()][2];   
    utterance.text =ABCD_colPhraseEN;
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
function teamA_phraseToSpeak(){
    //utterance.text =listWord[ABCD_numAleatorio()][2];   
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
function ABCD_wordToSpeak(){
    //utterance.text =listWord[ABCD_numAleatorio()][2];   
    utterance.text =ABCD_colWordEN;
    utterance.rate="0.7";
    utterance.pitch = "1.1";  
    utterance.name = "Google US English";
    utterance.voiceURI = "Google US English";
    utterance.lang = "en-US";
     
    window.speechSynthesis.speak(utterance);      
}
function teamA_wordToSpeak(){
    //utterance.text =listWord[ABCD_numAleatorio()][2];   
    utterance.text =teamA_colWordEN;
    utterance.rate="0.7";
    utterance.pitch = "1.1";  
    utterance.name = "Google US English";
    utterance.voiceURI = "Google US English";
    utterance.lang = "en-US";
     
    window.speechSynthesis.speak(utterance);      
}

 /**
  * LISTA CONTENIDO DE FRASES ABCD
  */
 const tblBody = document.createElement("tbody");
 const ABCD_tablas=document.getElementById("ABCD_tablas");

 // Crea las celdas
for (let i = 0; i < listWord.length; i++) {
   // Crea las hileras de la tabla
   const hilera = document.createElement("tr");
        hilera.setAttribute("id",`ABCD_fila${i}`);

   for (let j = 0; j < listWord[0].length; j++) {
     // Crea un elemento <td> y un nodo de texto, haz que el nodo de
     // texto sea el contenido de <td>, ubica el elemento <td> al final
     // de la hilera de la tabla
     const celda = document.createElement("td");
     const textoCelda = document.createTextNode(listWord[i][j]
     );
     celda.appendChild(textoCelda);
     hilera.appendChild(celda);
   }
   
   // agrega la hilera al final de la tabla (al final del elemento tblbody)
   tblBody.appendChild(hilera);
   //tblBody_teamA.appendChild(hilera);
   
}
ABCD_tablas.appendChild(tblBody);

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

//COLOREAR FILAS ABCD
let ABCD_fila=" ";

ABCD_num_random.addEventListener("click",()=>{ 

    console.log("ABCD_fila",ABCD_fila)
    
    ABCD_fila=document.getElementById(`ABCD_fila${ABCD_rowRamdon}`);
    //  ABCD_fila.style.backgroundColor="red";
    for (let i = 0; i < listWord.length; i++) {
        
        
        if(i === ABCD_rowRamdon){
            ABCD_fila.style.backgroundColor="red";
           
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }        
     }
    
});
//COLOREAR FILAS teamA
let teamA_fila=" ";

teamA_num_random.addEventListener("click",()=>{ 

    
    teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    //  teamA_fila.style.backgroundColor="red";
    for (let i = 0; i < listWord.length; i++) {
        
        
        if(i === teamA_rowRamdon){
            teamA_fila.style.backgroundColor="red";
           
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }        
     }
    
});

//BOTON siguiente ABCD
let ABCD_btn_next=document.getElementById('ABCD_btn_next');

ABCD_btn_next.addEventListener("click",()=>{
    ABCD_fila=document.getElementById(`ABCD_fila${ABCD_rowRamdon}`);
    for (let i = 0; i < listWord.length; i++) {
        
        if(i !== ABCD_rowRamdon){
            ABCD_fila.style.backgroundColor="green";
        }
        if(i === ABCD_rowRamdon){
            ABCD_fila.style.backgroundColor="red";
            
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }
        
     }

    ABCD_fila=document.getElementById(`ABCD_fila${ABCD_rowRamdon}`);
    ABCD_rowRamdon=ABCD_numAleatorio()
    ABCD_colNum=listWord[ABCD_rowRamdon][0],  
    ABCD_colWordEN=listWord[ABCD_rowRamdon][2],  
    ABCD_colWordES=listWord[ABCD_rowRamdon][3],  
    ABCD_colPhraseEN=listWord[ABCD_rowRamdon][4],  
    ABCD_colPhraseES=listWord[ABCD_rowRamdon][5],

    
    ABCD_phraseToSpeak();
   
  
    ABCD_inputEN_phrase.value=ABCD_colPhraseEN;
    ABCD_wordEnglish.textContent=ABCD_colWordEN; 
    ABCD_wordSpanish.textContent=ABCD_colWordES;
    ABCD_num_random.textContent=  ABCD_colNum;
    ABCD_num_random.setAttribute("href",`#ABCD_fila${ABCD_colNum}`);
    //ABCD_fila.style.backgroundColor="red";

    ABCD_inputES_phrase.value=" ";
    ABCD_wordSpanish.textContent=" ";
    ABCD_inputEN_phrase.classList.remove("showYes");
    ABCD_wordEnglish.classList.remove("showYes");     

});

ABCD_wordEnglish.addEventListener("click",()=>{
    ABCD_wordToSpeak();
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



