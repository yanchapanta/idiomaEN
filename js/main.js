// LISTA DE PALABRAS 
let listWord=[
    "The sky is a clear aqua.",
    "The ocean is a beautiful aquamarine.",
    "The azure sky is so clear.",
    "The sand is soft and beige.",
    "The night sky is dark black.",
    "The ocean is deep blue.",
    "The tree trunk is brown.",
    "The cake is dark chocolate.",
    "The coral reef is colorful.",
    "The rose is a deep crimson.",
    "The clouds are dark gray.",
    "The sun is shining gold.",
    "The rock is gray and old.",
    "The grass is so green.",
    "The flower is a bright indigo.",
    "The dress is a soft ivory.",
    "The field of lavender is purple.",
    "The clouds are light gray.",
    "The flower is a bright magenta.",
    "The carpet is a deep maroon.",
    "The sky is a misty rose.",
    "The sailor's uniform is navy blue.",
    "The olive oil is green.",
    "The orange is so juicy.",
    "The cotton candy is pink.",
    "The plum is dark purple.",
    "The grape is dark purple.",
    "The apple is bright red.",
    "The fish is pink salmon.",
    "The moon is shining silver.",
    "The sky is a clear blue.",
    "The leather is a light brown.",
    "The duck is a bright teal.",
    "The water is a bright turquoise.",
    "The snow is pure white.",
    "The smoke is white and wispy.",
    "The lemon is bright yellow."
];
let textEscrito=document.getElementById("textEscrito");
textEscrito.value=listWord[0]


// BOTON REPETIR
document.getElementById('btn_play').addEventListener("click",()=>{
    textToSpeak()    
});
//BOTON MUESTRAME
document.getElementById('btn_showMe').addEventListener("click",()=>{
   textEscrito.classList.add("showYes")
   
});


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
// Expected output: 0, 1 or 2


//BOTON siguiente
let btn_next=document.getElementById('btn_next');
let toText = document.getElementById("toText");

btn_next.addEventListener("click",()=>{
    
    let numberSelected = 0;
    toText.value="";
    
    for (let i = 0; i < listWord.length; i++) {        
        numberSelected++;
        //console.log(numberSelected)
    }
    console.log(getRandomInt(numberSelected));
    
    textEscrito.value=listWord[getRandomInt(numberSelected)];
    textToSpeak()  
    textEscrito.classList.remove("showYes")
    
});
//BOTON ESPAÑOL
    
document.getElementById('btn_spanish').addEventListener("click",()=>{
    let texto=textEscrito.value.trim();
        texto=`https://api.mymemory.translated.net/get?q=${texto}&langpair=en-US|es-ES`;
    //https://api.mymemory.translated.net/get?q=Hello World!&langpair=en-US|es-ES
    let apiUrl = texto.trim();
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        data.matches.forEach(data => {
            if(data.id === 0) {
                toText.value = data.translation;
            }
        });
        toText.setAttribute("placeholder", "Traducción");
    });
    
   
});

//CARGA DEFAULT
document.addEventListener("DOMContentLoaded",(e)=>{
    textToSpeak();           
});
//TRASFORMACION DE VOZ

let utterance = new SpeechSynthesisUtterance();/* convierte texto a voz */

function textToSpeak(){
    utterance.text =document.getElementById("textEscrito").value ;   
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


