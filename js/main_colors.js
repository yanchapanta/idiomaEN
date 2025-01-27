

//LISTA
let listWord=[
    ["1","	Aqua","	Aqua","	The ocean glimmers aqua	","   El océano brilla en color aqua	","Aqua describe un tono vibrante de azul verdoso"],
    ["2","	Aquamarine","	Aquamarine","	The ocean is a beautiful aquamarine","	El océano es de un hermoso color aguamarina","	Aquamarine es un tono de azul verdoso, similar al color del mar"],
    ["3","	Azure","	Azure","	The azure sky is so clear","	El cielo azur es tan claro","	Azure es otro sinónimo de 'azul cielo', pero con una connotación más poética"],
    ["4","	Beige","	Beige","	The sand is soft and beige","	La arena es suave y beige","	Beige es un color entre el crema y el marrón claro"],
    ["5","	Black","	Negro","	The night sky is dark black","	El cielo nocturno es negro oscuro","	Una forma sencilla de describir el color del cielo en la noche"],
    ["6","	Blue","	Azul","	The ocean is deep blue","	El océano es azul profundo","	Deep blue enfatiza la intensidad del color azul del océano"],
    ["7","	Brown","	Marrón","	The tree trunk is brown","	El tronco del árbol es marrón","	Un color común para los troncos de los árboles"],
    ["8","	Chocolate","	Chocolate","	The cake is dark chocolate","	El pastel es de chocolate oscuro","	Un sabor y color común para los pasteles"],
    ["9","	Coral","	Coral","	The coral reef is colorful","	El arrecife de coral es colorido","	Los arrecifes de coral son conocidos por su gran variedad de colores"],
    ["10","	Crimson","	Carmesí","	The rose is a deep crimson","	La rosa es de un rojo carmesí intenso","	Crimson es un tono de rojo muy intenso y oscuro"],
    ["11","	DarkGray","Gris oscuro","The clouds are dark gray","	Las nubes son de un gris oscuro","	Un color común para las nubes antes de una tormenta"],
    ["12","	Gold","	Dorado","	The sun is shining gold","	El sol brilla dorado","	Una descripción poética del color del sol"],
    ["13","	Gray","	Gris","	The rock is gray and old","	La roca es gris y vieja","	Un color común para las rocas y las piedras"],
    ["14","	Green","	Verde","	The grass is so green","	La hierba está muy verde","	Un color asociado con la naturaleza y la vida"],
    ["15","	Indigo","	Índigo","	The flower is a bright indigo","	La flor es de un color índigo brillante","	Indigo es un tono de azul oscuro, casi morado"],
    ["16","	Ivory","	Marfil","	The dress is a soft ivory","	El vestido es de un suave color marfil","	Ivory es un color blanco cremoso, a menudo asociado con la elegancia"],
    ["17","	Lavender","	Lavanda","	The field of lavender is purple","	El campo de lavanda es morado","	Lavender es un tono de morado pálido y suave"],
    ["18","	LightGray","	Gris claro","	The clouds are light gray","	Las nubes son de un gris claro","	Un color común para las nubes en un día nublado"],
    ["19","	Magenta","	Magenta","	The flower is a bright magenta","	La flor es de un color magenta brillante","	Magenta es un tono de rosa muy intenso y vibrante"],
    ["20","	Maroon","	Marrón oscuro","	The carpet is a deep maroon","	La alfombra es de un color burdeos intenso","	Maroon es un tono de rojo oscuro, casi marrón"],
    ["21","	MistyRose","	Rosa pálido","	The sky is a misty rose","	El cielo es de un rosa pálido","	Misty rose es un tono de rosa muy suave y delicado"],
    ["22","	Navy","	Azul marino","	The sailor's uniform is navy blue","	El uniforme de marinero es azul marino","	Navy blue es un tono de azul oscuro, asociado con la marina"],
    ["23","	Olive","	Oliva","	The olive oil is green","	El aceite de oliva es verde","	El aceite de oliva virgen extra tiene un color verde"],
    ["24","	Orange","	Naranja","	The orange is so juicy","	La naranja está muy jugosa","	Un color y sabor asociados con la fruta"],
    ["25","	Pink","	Rosa","	The cotton candy is pink","	El algodón de azúcar es rosa","	Un color asociado con la dulzura y la infancia"],
    ["26","	Plum","	Ciruela","	The plum is dark purple","	La ciruela es de color morado oscuro","	Un color asociado con la fruta"],
    ["27","	Purple","	Morado","	The grape is dark purple","	La uva es de color morado oscuro","	Un color común para las uvas"],
    ["28","	Red","	Rojo","	The apple is bright red","	La manzana es de un rojo brillante","	Un color asociado con la fruta y la energía"],
    ["29","	Salmon","	Salmón","	The fish is pink salmon","	El pescado es salmón rosado","	Un tipo de pescado conocido por su color rosado"],
    ["30","	Silver","	Plata","	The moon is shining silver","	La luna brilla plateada","	Una descripción poética del color de la luna"],
    ["31","	Sky","	Cielo","	The sky is a clear blue","	El cielo es de un azul claro","	Una forma sencilla de describir el color del cielo"],
    ["32","	Tan","	Caoba","	The leather is a light brown","	El cuero es de un marrón claro","	Un color común para el cuero"],
    ["33","	Teal","	Azul verdoso","	The duck is a bright teal","	El pato es de un color azul verdoso brillante","	Teal es un tono de azul verdoso, similar al color del agua"],
    ["34","	Turquoise","	Turquesa","	The water is a bright turquoise","	El agua es de un color turquesa brillante","	Turquoise es un tono de azul verdoso, asociado con el agua"],
    ["35","	White","	Blanco","	The snow is pure white","	La nieve es blanca pura","	Un color asociado con la pureza y el invierno"],
    ["36","	WhiteSmoke","	Blanco","The smoke is white and wispy","	El humo es blanco y tenue","	Una descripción del humo blanco"],
    ["37","	Yellow","	Amarillo","	The lemon is bright yellow","	El limón es de un amarillo brillante","	Un color asociado con la fruta y el sol"],
    ["38","	Cyan","	Cian","	The logo uses cyan accents	","   El logo usa acentos en cian	","Cyan es un color primario en impresión"]    
]

const teamA_numStart=document.getElementById("teamA_numStart"),
      teamA_numEnd=document.getElementById("teamA_numEnd"),
      totalList=document.getElementById("totalList");
      totalList.textContent=listWord.length;
      
let numStart=teamA_numStart.value-1,
numEnd=teamA_numEnd.value-1;//listWord.length/2 →22 
let teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd),
    teamA_colNum=listWord[teamA_rowRamdon][0],  
    teamA_colWordEN=listWord[teamA_rowRamdon][1],  
    teamA_colWordES=listWord[teamA_rowRamdon][2],  
    teamA_colPhraseEN=listWord[teamA_rowRamdon][3],  
    teamA_colPhraseES=listWord[teamA_rowRamdon][4],
    teamA_num_random=document.getElementById("teamA_num_random");  


  

//CARGA DEFAULT
document.addEventListener("DOMContentLoaded",(e)=>{    
    teamA_phraseToSpeak(); 
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

 
teamA_inputEN_phrase.textContent=teamA_colPhraseEN;
teamA_wordEnglish.textContent=teamA_colWordEN; 

// BOTON REPETIR
document.getElementById('teamA_btn_repeat').addEventListener("click",()=>{
    teamA_phraseToSpeak();  
});
//BOTON MUESTRAME

document.getElementById('teamA_btn_showMe').addEventListener("click",()=>{
   teamA_inputEN_phrase.classList.add("showYes");   
   teamA_wordEnglish.classList.add("showYes");
   //color atomático
   teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    //  teamA_fila.style.backgroundColor="red";
    for (let i = 0; i < listWord.length; i++) {
        
        
        if(i === teamA_rowRamdon){
           // teamA_fila.style.backgroundColor="red";
            teamA_num_random.style.backgroundColor=listWord[i][1].trim();
           
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }        
     }   
});

//BOTON ESPAÑOL
let teamA_inputES_phrase=document.getElementById("teamA_inputES_phrase");
document.getElementById('teamA_btn_spanish').addEventListener("click",()=>{
    teamA_inputES_phrase.textContent=teamA_colPhraseES;
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
    for (let i = 0; i < listWord.length; i++) {
        
        
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
            teamA_num_random.style.backgroundColor="transparent";
            
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }
        
     }

    teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd);
    teamA_colNum=listWord[teamA_rowRamdon][0],  
    teamA_colWordEN=listWord[teamA_rowRamdon][1],  
    teamA_colWordES=listWord[teamA_rowRamdon][2],  
    teamA_colPhraseEN=listWord[teamA_rowRamdon][3],  
    teamA_colPhraseES=listWord[teamA_rowRamdon][4],

    
    teamA_phraseToSpeak();
   
  
    teamA_inputEN_phrase.textContent=teamA_colPhraseEN;
    teamA_wordEnglish.textContent=teamA_colWordEN; 
    teamA_wordSpanish.textContent=teamA_colWordES;
    teamA_num_random.textContent=  teamA_colNum;
    teamA_num_random.setAttribute("href",`#teamA_fila${teamA_colNum}`);
    //teamA_fila.style.backgroundColor="red";

    teamA_inputES_phrase.textContent=" ";
    teamA_wordSpanish.textContent=" ";
    teamA_inputEN_phrase.classList.remove("showYes");
    teamA_wordEnglish.classList.remove("showYes");     

});

teamA_wordEnglish.addEventListener("click",()=>{
    teamA_wordToSpeak();
});



