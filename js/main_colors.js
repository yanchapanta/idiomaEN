let variableStaticA="Hello world";
let variableStaticB="dos";

//LISTA
let listWord=[
    ["1","	Aqua/Cyan","	Aqua/Cian","	The sky is a clear aqua","	El cielo es de un azul claro","	Aqua es una forma más poética de decir 'azul claro'"],
    ["2","	Aquamarine","	Aquamarine","	The ocean is a beautiful aquamarine","	El océano es de un hermoso color aguamarina","	Aquamarine es un tono de azul verdoso, similar al color del mar"],
    ["3","	Azure","	Azure","	The azure sky is so clear","	El cielo azur es tan claro","	Azure es otro sinónimo de 'azul cielo', pero con una connotación más poética"],
    ["4","	Beige","	Beige","	The sand is soft and beige","	La arena es suave y beige","	Beige es un color entre el crema y el marrón claro"],
    ["5","	Black","	Negro","	The night sky is dark black","	El cielo nocturno es negro oscuro","	Una forma sencilla de describir el color del cielo en la noche"],
    ["6","	Blue","	Azul","	The ocean is deep blue","	El océano es azul profundo","	Deep blue enfatiza la intensidad del color azul del océano"],
    ["7","	Brown","	Marrón","	The tree trunk is brown","	El tronco del árbol es marrón","	Un color común para los troncos de los árboles"],
    ["8","	Chocolate","	Chocolate","	The cake is dark chocolate","	El pastel es de chocolate oscuro","	Un sabor y color común para los pasteles"],
    ["9","	Coral","	Coral","	The coral reef is colorful","	El arrecife de coral es colorido","	Los arrecifes de coral son conocidos por su gran variedad de colores"],
    ["10","	Crimson","	Carmesí","	The rose is a deep crimson","	La rosa es de un rojo carmesí intenso","	Crimson es un tono de rojo muy intenso y oscuro"],
    ["11","	Dark Gray","Gris oscuro","The clouds are dark gray","	Las nubes son de un gris oscuro","	Un color común para las nubes antes de una tormenta"],
    ["12","	Gold","	Dorado","	The sun is shining gold","	El sol brilla dorado","	Una descripción poética del color del sol"],
    ["13","	Gray","	Gris","	The rock is gray and old","	La roca es gris y vieja","	Un color común para las rocas y las piedras"],
    ["14","	Green","	Verde","	The grass is so green","	La hierba está muy verde","	Un color asociado con la naturaleza y la vida"],
    ["15","	Indigo","	Índigo","	The flower is a bright indigo","	La flor es de un color índigo brillante","	Indigo es un tono de azul oscuro, casi morado"],
    ["16","	Ivory","	Marfil","	The dress is a soft ivory","	El vestido es de un suave color marfil","	Ivory es un color blanco cremoso, a menudo asociado con la elegancia"],
    ["17","	Lavender","	Lavanda","	The field of lavender is purple","	El campo de lavanda es morado","	Lavender es un tono de morado pálido y suave"],
    ["18","	Light Gray","	Gris claro","	The clouds are light gray","	Las nubes son de un gris claro","	Un color común para las nubes en un día nublado"],
    ["19","	Magenta","	Magenta","	The flower is a bright magenta","	La flor es de un color magenta brillante","	Magenta es un tono de rosa muy intenso y vibrante"],
    ["20","	Maroon","	Marrón oscuro","	The carpet is a deep maroon","	La alfombra es de un color burdeos intenso","	Maroon es un tono de rojo oscuro, casi marrón"],
    ["21","	Misty Rose","	Rosa pálido","	The sky is a misty rose","	El cielo es de un rosa pálido","	Misty rose es un tono de rosa muy suave y delicado"],
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
    ["36","	White Smoke","	Blanco","The smoke is white and wispy","	El humo es blanco y tenue","	Una descripción del humo blanco"],
    ["37","	Yellow","	Amarillo","	The lemon is bright yellow","	El limón es de un amarillo brillante","	Un color asociado con la fruta y el sol"]    
]
let numAleatorio1=numAleatorio(),
    speakRamdonNum=listWord[numAleatorio1][0],  
    speakRamdonWord=listWord[numAleatorio1][1],  
    speakRamdonWordES=listWord[numAleatorio1][2],  
    speakRamdon=listWord[numAleatorio1][3],  
    spanishRamdon=listWord[numAleatorio1][4],
    numberA=document.getElementById("numberA");   
    variableStaticA=numAleatorio1;


//CARGA DEFAULT
document.addEventListener("DOMContentLoaded",(e)=>{       
    textToSpeak(); 
    numberA.textContent= speakRamdonNum;
    numberA.setAttribute("href",`#fila${speakRamdonNum}`);

});  
function numAleatorio(){
    let numberSelected = 0;
    for (let i = 0; i < listWord.length; i++) {        
        numberSelected++;
    }
    return getRandomInt(numberSelected) 
}         

//Función consegir un número aleatorio
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//textEscrito de input principal
let textEscrito=document.getElementById("textEscrito");
let wordEnglish=document.getElementById("wordEnglish");
let wordSpanish=document.getElementById("wordSpanish");
textEscrito.value=speakRamdon;
wordEnglish.textContent=speakRamdonWord; 

// BOTON REPETIR
document.getElementById('btn_play').addEventListener("click",()=>{
    textToSpeak()    
});
//BOTON MUESTRAME
document.getElementById('btn_showMe').addEventListener("click",()=>{
   textEscrito.classList.add("showYes")   
   wordEnglish.classList.add("showYes")   
});

//BOTON ESPAÑOL
let toTextSpanish=document.getElementById("toTextSpanish");
document.getElementById('btn_spanish').addEventListener("click",()=>{
    toTextSpanish.value=spanishRamdon;
    wordSpanish.textContent=speakRamdonWordES;
   
});

//TRASFORMACION DE VOZ

let utterance = new SpeechSynthesisUtterance();/* convierte texto a voz */

function textToSpeak(){
    //utterance.text =listWord[numAleatorio()][2];   
    utterance.text =speakRamdon;
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
function textToSpeakword(){
    //utterance.text =listWord[numAleatorio()][2];   
    utterance.text =speakRamdonWord;
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

 /**
  * LISTA CONTENIDO DE FRASES
  */
 const tblBody = document.createElement("tbody");
 const tabla=document.getElementById("tablas");

 // Crea las celdas
for (let i = 0; i < listWord.length; i++) {
   // Crea las hileras de la tabla
   const hilera = document.createElement("tr");
        hilera.setAttribute("id",`fila${i}`);

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
   
}
tabla.appendChild(tblBody);

let fila=" ";
let ban=1;
numberA.addEventListener("click",()=>{ 

    console.log("fila",fila)
    
    fila=document.getElementById(`fila${numAleatorio1}`);
    //  fila.style.backgroundColor="red";
    for (let i = 0; i < listWord.length; i++) {
        
        
        if(i === numAleatorio1){
            fila.style.backgroundColor="red";
            variableStaticA=numAleatorio1;
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }
        
     }

    
});
console.log(variableStaticA)
console.log(variableStaticB)
//BOTON siguiente
let btn_next=document.getElementById('btn_next');
let toText = document.getElementById("toText");

btn_next.addEventListener("click",()=>{
    fila=document.getElementById(`fila${numAleatorio1}`);
    for (let i = 0; i < listWord.length; i++) {
        
        if(i !== numAleatorio1){
            console.log("direrente",i,numAleatorio1)
            fila.style.backgroundColor="green";
        }
        if(i === numAleatorio1){
            fila.style.backgroundColor="red";
            
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }
        
     }

    fila=document.getElementById(`fila${numAleatorio1}`);
    numAleatorio1=numAleatorio()
    speakRamdonNum=listWord[numAleatorio1][0],  
    speakRamdonWord=listWord[numAleatorio1][1],  
    speakRamdonWordES=listWord[numAleatorio1][2],  
    speakRamdon=listWord[numAleatorio1][3],  
    spanishRamdon=listWord[numAleatorio1][4];      
    textToSpeak();
    variableStaticA=numAleatorio1;
    console.log(variableStaticA)
    textEscrito.value=speakRamdon;
    wordEnglish.textContent=speakRamdonWord; 
    wordSpanish.textContent=speakRamdonWordES;
    numberA.textContent=  speakRamdonNum;
    numberA.setAttribute("href",`#fila${speakRamdonNum}`);
    //fila.style.backgroundColor="red";

    toTextSpanish.value=" ";
    wordSpanish.textContent=" ";
    textEscrito.classList.remove("showYes");
    wordEnglish.classList.remove("showYes"); 

    
     

});

wordEnglish.addEventListener("click",()=>{
    textToSpeakword();
    console.log("soy español") 
});
